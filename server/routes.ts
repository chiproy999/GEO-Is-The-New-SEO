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
            name: 'GEO Audit Checklist 2025',
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
            name: 'GEO Audit Checklist 2025',
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
      title: "GEO Audit Checklist 2025 - 37 Essential Optimization Points",
      description: "Your complete roadmap to dominating AI search results",
      categories: [
        {
          name: "Authority Building",
          items: [
            "Claim and verify all business profiles (Google, Bing, Apple Maps)",
            "Add E-E-A-T signals to author pages",
            "Create detailed About Us page with credentials",
            "Implement proper author schema markup",
            "Build quality backlinks from authoritative sources",
            "Establish topical authority in your niche",
            "Add trust signals (certifications, awards, testimonials)"
          ]
        },
        {
          name: "Content Optimization",
          items: [
            "Write conversational, natural language content",
            "Include specific facts, statistics, and citations",
            "Create comprehensive FAQ sections",
            "Add clear, direct answers to common questions",
            "Use semantic keywords naturally",
            "Optimize for featured snippets",
            "Include supporting images and videos"
          ]
        },
        {
          name: "Technical Implementation",
          items: [
            "Implement JSON-LD structured data",
            "Add Organization schema",
            "Include Product/Service schema where applicable",
            "Set up FAQ schema markup",
            "Optimize Core Web Vitals",
            "Ensure mobile responsiveness",
            "Enable HTTPS across entire site"
          ]
        },
        {
          name: "Local & Maps Optimization",
          items: [
            "Complete Google Business Profile 100%",
            "Add high-quality photos and videos",
            "Respond to all reviews within 24 hours",
            "Maintain NAP consistency across web",
            "Build local citations",
            "Create location-specific landing pages",
            "Implement local business schema"
          ]
        },
        {
          name: "AI Platform Specific",
          items: [
            "Optimize for ChatGPT with conversational content",
            "Create research-backed content for Claude",
            "Add visual content for Gemini multimodal",
            "Include authoritative citations for Perplexity",
            "Monitor AI search appearances",
            "Test content in each platform",
            "Track and measure AI traffic"
          ]
        }
      ],
      footer: "© 2025 GEO Optimization Guide - Visit us for more insights at geoguide.com"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
