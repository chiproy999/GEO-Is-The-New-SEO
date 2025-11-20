import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      // Only log high-level metadata to avoid leaking response data or PII
      log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
    const status =
      typeof err === "object" && err !== null
        ? Number(
            ((err as { status?: number; statusCode?: number }).status ??
              (err as { statusCode?: number }).statusCode)
          ) || 500
        : 500;
    const message = err instanceof Error ? err.message : "Internal Server Error";

    res.status(status).json({ message });

    // Log a sanitized error message without rethrowing to keep the server stable
    console.error(err);
    log(`Error ${status} on ${req.method} ${req.path}: ${message}`, "express");
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 3000 if not specified for local development.
  // this serves both the API and the client.
  const port = parseInt(process.env.PORT || '3000', 10);
  server.listen({
    port,
    host: process.env.NODE_ENV === 'production' ? "0.0.0.0" : "localhost",
    reusePort: process.env.NODE_ENV === 'production',
  }, () => {
    log(`serving on port ${port}`);
  });
})();
