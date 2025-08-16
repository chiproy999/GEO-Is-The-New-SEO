import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChecklistProgressSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get checklist progress
  app.get("/api/checklist/progress", async (req, res) => {
    try {
      const { userId, category } = req.query as { userId?: string; category?: string };
      const progress = await storage.getChecklistProgress(userId, category);
      res.json(progress);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Update checklist item
  app.post("/api/checklist/progress", async (req, res) => {
    try {
      const validatedData = insertChecklistProgressSchema.extend({
        userId: z.string().optional()
      }).parse(req.body);
      
      const progress = await storage.updateChecklistItem(validatedData);
      res.json(progress);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Get user progress summary
  app.get("/api/checklist/summary", async (req, res) => {
    try {
      const { userId } = req.query as { userId?: string };
      const summary = await storage.getUserProgress(userId);
      res.json(summary);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
