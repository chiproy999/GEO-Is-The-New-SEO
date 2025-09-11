import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChecklistProgressSchema } from "@shared/schema";
import { setupAuth, isAuthenticated, csrfProtection } from "./replitAuth";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);
  
  // CSRF protection for unsafe methods
  app.use(csrfProtection);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  
  // Get checklist progress
  app.get("/api/checklist/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { category } = req.query as { category?: string };
      const progress = await storage.getChecklistProgress(userId, category);
      res.json(progress);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Update checklist item
  app.post("/api/checklist/progress", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      // Validate request body excluding userId since it comes from auth session
      const validatedData = insertChecklistProgressSchema.omit({ userId: true }).parse(req.body);
      
      const progress = await storage.updateChecklistItem({
        ...validatedData,
        userId
      });
      res.json(progress);
    } catch (error: any) {
      console.error('Checklist progress update error:', error);
      res.status(400).json({ message: error.message });
    }
  });

  // Get user progress summary
  app.get("/api/checklist/summary", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const summary = await storage.getUserProgress(userId);
      res.json(summary);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
