import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertChecklistProgressSchema,
  insertEmailSubscriberSchema,
  type InsertChecklistProgress,
  type InsertEmailSubscriber,
} from "@shared/schema";
import { setupAuth, isAuthenticated, csrfProtection } from "./replitAuth";
import type { ParsedQs } from "qs";

type AuthenticatedRequest<TBody = unknown, TQuery extends ParsedQs = ParsedQs> = Request<
  Record<string, string>,
  unknown,
  TBody,
  TQuery
> & {
  user: { claims: { sub: string } };
};

const getClientIp = (req: Request): string | undefined => {
  const forwardedHeader = req.headers["x-forwarded-for"];
  const rawForwarded = Array.isArray(forwardedHeader)
    ? forwardedHeader[0]
    : forwardedHeader;

  const forwardedIp = rawForwarded?.split(",")[0]?.trim();
  return forwardedIp || req.socket.remoteAddress;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);
  
  // CSRF protection for unsafe methods
  app.use(csrfProtection);

  // Auth routes
  app.get("/api/auth/user", isAuthenticated, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      const message = error instanceof Error ? error.message : "Failed to fetch user";
      res.status(500).json({ message });
    }
  });
  
  // Get checklist progress
  app.get("/api/checklist/progress", isAuthenticated, async (req: AuthenticatedRequest<unknown, ParsedQs>, res: Response) => {
    try {
      const userId = req.user.claims.sub;
      const categoryQuery = req.query.category;
      const category = typeof categoryQuery === "string" ? categoryQuery : undefined;
      const progress = await storage.getChecklistProgress(userId, category);
      res.json(progress);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load progress";
      res.status(500).json({ message });
    }
  });

  // Update checklist item
  app.post(
    "/api/checklist/progress",
    isAuthenticated,
    async (req: AuthenticatedRequest<unknown>, res: Response) => {
      try {
        const userId = req.user.claims.sub;
        // Validate request body excluding userId since it comes from auth session
        const validatedData = insertChecklistProgressSchema.omit({ userId: true }).parse(req.body);

        const progress = await storage.updateChecklistItem({
          ...validatedData,
          userId,
        });
        res.json(progress);
      } catch (error) {
        console.error("Checklist progress update error:", error);
        const message = error instanceof Error ? error.message : "Invalid checklist update";
        res.status(400).json({ message });
      }
    },
  );

  // Get user progress summary
  app.get("/api/checklist/summary", isAuthenticated, async (req: AuthenticatedRequest, res: Response) => {
    try {
      const userId = req.user.claims.sub;
      const summary = await storage.getUserProgress(userId);
      res.json(summary);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load summary";
      res.status(500).json({ message });
    }
  });

  // Email subscription endpoint
  app.post("/api/subscribe", async (req: Request<unknown, unknown, unknown>, res: Response) => {
    try {
      // Get IP and user agent for tracking
      const ipAddress = getClientIp(req);
      const userAgent = typeof req.headers["user-agent"] === "string" ? req.headers["user-agent"] : "";
      const referrer = typeof req.headers.referer === "string" ? req.headers.referer : "";

      // Validate request body
      const validatedData = insertEmailSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getSubscriberByEmail(validatedData.email);
      if (existing) {
        // If already subscribed, just return success (idempotent)
        return res.json({
          success: true,
          message: "You're already subscribed!",
          leadMagnet: {
            type: 'guide',
            name: '5-Step GEO Starter Guide',
            downloadUrl: '/api/download/geo-checklist'
          }
        });
      }

      // Add new subscriber
      const subscriber = await storage.addEmailSubscriber({
        ...validatedData,
        ipAddress,
        userAgent,
        referrer
      });

      res.json({
        success: true,
        message: "Success! Check your email for your free guide.",
        leadMagnet: {
          type: 'guide',
          name: '5-Step GEO Starter Guide',
          downloadUrl: '/api/download/geo-checklist'
        }
      });
    } catch (error) {
      console.error("Subscription error:", error);
      const message = error instanceof Error ? error.message : "Failed to subscribe";
      if (message === "Email already subscribed") {
        res.json({
          success: true,
          message: "You're already subscribed!",
          leadMagnet: {
            type: 'guide',
            name: '5-Step GEO Starter Guide',
            downloadUrl: '/api/download/geo-checklist'
          }
        });
        return;
      }

      res.status(400).json({ message });
    }
  });

  // Check subscription status
  app.get("/api/subscribe/check", async (req: Request<unknown, unknown, unknown, ParsedQs>, res: Response) => {
    try {
      const emailQuery = req.query.email;
      if (typeof emailQuery !== "string") {
        return res.json({ subscribed: false });
      }

      const subscriber = await storage.getSubscriberByEmail(emailQuery);
      res.json({
        subscribed: !!subscriber && !subscriber.unsubscribed,
        leadMagnet: subscriber ? {
          type: 'guide',
          name: '5-Step GEO Starter Guide',
          downloadUrl: '/api/download/geo-checklist'
        } : null
      });
    } catch (_error: unknown) {
      res.json({ subscribed: false });
    }
  });

  // Lead magnet download endpoint
  app.get("/api/download/geo-checklist", (req, res) => {
    // Return a comprehensive checklist as JSON that frontend can render
    res.json({
      title: "5-Step GEO Starter Guide",
      description: "Begin your journey to better AI search visibility",
      categories: [
        {
          name: "Your 5 Quick Steps",
          items: [
            "Step 1: Write conversational content that answers questions",
            "Step 2: Add your business to Google My Business",
            "Step 3: Create an About Us page with your expertise",
            "Step 4: Make your website mobile-friendly",
            "Step 5: Add frequently asked questions to your site"
          ]
        }
      ],
      footer: "Want to go deeper? Explore our comprehensive guides and advanced strategies."
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
