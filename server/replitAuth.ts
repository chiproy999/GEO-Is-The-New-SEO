import * as client from "openid-client";
import { Strategy, type VerifyFunction } from "openid-client/passport";

import passport from "passport";
import session from "express-session";
import type { Express, RequestHandler } from "express";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
import { storage } from "./storage";
import lusca from "lusca";

// CSRF middleware for use after session
export const csrfMiddleware = lusca.csrf();

// Check if we're in a development environment without Replit
const isReplitEnvironment = process.env.REPLIT_DOMAINS && process.env.REPL_ID;

if (!isReplitEnvironment) {
  console.warn("⚠️  REPLIT_DOMAINS not set. Running in development mode without authentication.");
}

const getOidcConfig = memoize(
  async () => {
    if (!isReplitEnvironment) {
      throw new Error("OIDC not available in development mode");
    }
    return await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID!
    );
  },
  { maxAge: 3600 * 1000 }
);

export function getSession() {
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  
  if (!isReplitEnvironment) {
    // Use memory store for development
    // Use secure cookies in development if HTTPS is used, or allow override via env
    const cookieSecure = process.env.SESSION_COOKIE_SECURE
      ? process.env.SESSION_COOKIE_SECURE === 'true'
      : (process.env.NODE_ENV === "production" || process.env.HTTPS === "true");
    if (!cookieSecure) {
      console.warn("⚠️  Session cookies are not marked as secure (only sent over HTTPS). Consider enabling HTTPS and setting SESSION_COOKIE_SECURE=true for secure development.");
    }
    return session({
      secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: cookieSecure,
        maxAge: sessionTtl,
        sameSite: 'lax',
      },
    });
  }
  
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions",
  });
  return session({
    secret: process.env.SESSION_SECRET!,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: sessionTtl,
      sameSite: 'lax', // CSRF protection
    },
  });
}

/**
 * Returns an array containing both the session middleware and CSRF protection middleware.
 * Example usage in your Express app setup:
 *   app.use(...getSessionWithCsrf());
 * This ensures CSRF protection is always applied after session middleware.
 */
export function getSessionWithCsrf(): RequestHandler[] {
  return [getSession(), getCsrfProtection()];
}

/**
 * Returns the CSRF protection middleware. Should be used after session middleware.
 * If you need session and CSRF protection together, use getSessionWithCsrf().
 */
export function getCsrfProtection(): RequestHandler {
  return lusca.csrf();
}

function updateUserSession(
  user: any,
  tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers
) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}

async function upsertUser(
  claims: any,
) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"],
  });
}

export async function setupAuth(app: Express) {
  app.set("trust proxy", 1);
  app.use(getSession());
  app.use(passport.initialize());
  app.use(passport.session());

  if (!isReplitEnvironment) {
    // Development mode - set up minimal auth routes
    app.get("/api/login", (req, res) => {
      res.json({ message: "Authentication not available in development mode" });
    });
    
    app.get("/api/callback", (req, res) => {
      res.redirect("/");
    });
    
    app.get("/api/logout", (req, res) => {
      res.redirect("/");
    });
    
    return;
  }

  const config = await getOidcConfig();

  const verify: VerifyFunction = async (
    tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers,
    verified: passport.AuthenticateCallback
  ) => {
    const user = {};
    updateUserSession(user, tokens);
    await upsertUser(tokens.claims());
    verified(null, user);
  };

  for (const domain of process.env
    .REPLIT_DOMAINS!.split(",")) {
    const strategy = new Strategy(
      {
        name: `replitauth:${domain}`,
        config,
        scope: "openid email profile offline_access",
        callbackURL: `https://${domain}/api/callback`,
      },
      verify,
    );
    passport.use(strategy);
  }

  passport.serializeUser((user: Express.User, cb) => cb(null, user));
  passport.deserializeUser((user: Express.User, cb) => cb(null, user));

  app.get("/api/login", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"],
    })(req, res, next);
  });

  app.get("/api/callback", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login",
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID!,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`,
        }).href
      );
    });
  });
}

// CSRF protection middleware for unsafe methods
export const csrfProtection: RequestHandler = (req, res, next) => {
  // Only apply CSRF protection to unsafe methods
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const origin = req.get('Origin');
    const referer = req.get('Referer');
    const host = req.get('Host');
    
    // Check if request has valid origin or referer matching our host
    const validOrigin = origin && origin === `${req.protocol}://${host}`;
    const validReferer = referer && new URL(referer).host === host;
    
    if (!validOrigin && !validReferer) {
      return res.status(403).json({ message: 'CSRF protection: Invalid origin' });
    }
  }
  
  next();
};

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  if (!isReplitEnvironment) {
    // In development mode, skip authentication
    (req as any).user = {
      claims: { sub: 'dev-user' }
    };
    return next();
  }

  const user = req.user as any;

  if (!req.isAuthenticated() || !user.expires_at) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const now = Math.floor(Date.now() / 1000);
  if (now <= user.expires_at) {
    return next();
  }

  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};