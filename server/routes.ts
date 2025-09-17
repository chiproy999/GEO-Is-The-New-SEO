import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChecklistProgressSchema, insertEmailSubscriberSchema } from "@shared/schema";
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

  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Get IP and user agent for tracking
      const ipAddress = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress;
      const userAgent = req.headers['user-agent'] || '';
      const referrer = req.headers.referer || '';

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
            type: 'checklist',
            name: 'GEO Quick Start Checklist',
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
        message: "Success! Check your email for your free checklist.",
        leadMagnet: {
          type: 'checklist',
          name: 'GEO Audit Checklist 2025',
          downloadUrl: '/api/download/geo-checklist'
        }
      });
    } catch (error: any) {
      console.error('Subscription error:', error);
      if (error.message === 'Email already subscribed') {
        res.json({
          success: true,
          message: "You're already subscribed!",
          leadMagnet: {
            type: 'checklist',
            name: 'GEO Quick Start Checklist',
            downloadUrl: '/api/download/geo-checklist'
          }
        });
      } else {
        res.status(400).json({ message: error.message || "Failed to subscribe" });
      }
    }
  });

  // Check subscription status
  app.get("/api/subscribe/check", async (req, res) => {
    try {
      const { email } = req.query as { email?: string };
      if (!email) {
        return res.json({ subscribed: false });
      }
      
      const subscriber = await storage.getSubscriberByEmail(email);
      res.json({ 
        subscribed: !!subscriber && !subscriber.unsubscribed,
        leadMagnet: subscriber ? {
          type: 'checklist',
          name: 'GEO Audit Checklist 2025',
          downloadUrl: '/api/download/geo-checklist'
        } : null
      });
    } catch (error: any) {
      res.json({ subscribed: false });
    }
  });

  // Lead magnet download endpoint
  app.get("/api/download/geo-checklist", (req, res) => {
    // Return a comprehensive checklist as JSON that frontend can render
    res.json({
      title: "GEO Quick Start Checklist",
      description: "Essential tips to improve your AI search visibility",
      categories: [
        {
          name: "Essential GEO Checklist",
          items: [
            "Create clear, conversational content that answers questions directly",
            "Add structured data (Schema.org) to your website",
            "Claim and verify your Google Business Profile",
            "Build credibility with author pages and About Us content",
            "Include citations and sources for important claims",
            "Optimize for mobile devices and fast loading",
            "Create FAQ sections for common questions",
            "Use semantic keywords naturally in content",
            "Add high-quality images with descriptive alt text",
            "Monitor your appearance in AI search results",
            "Keep NAP (Name, Address, Phone) consistent across the web",
            "Respond to reviews and engage with your audience"
          ]
        }
      ],
      footer: "For more optimization strategies, explore our guides and resources"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
