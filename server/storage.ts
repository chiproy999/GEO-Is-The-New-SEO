import { users, checklistProgress, emailSubscribers, type User, type UpsertUser, type ChecklistProgress, type InsertChecklistProgress, type EmailSubscriber, type InsertEmailSubscriber } from "@shared/schema";
import { getChecklistTotals } from "@shared/checklist-data";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

// Check if we have a real database connection
const isDatabaseAvailable = process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('placeholder');

// Helper function to handle database operations gracefully
async function withDatabase<T>(operation: () => Promise<T>, fallback: T): Promise<T> {
  if (!isDatabaseAvailable) {
    console.warn("Database not available, using fallback");
    return fallback;
  }
  
  try {
    return await operation();
  } catch (error) {
    console.warn("Database operation failed, using fallback:", error);
    return fallback;
  }
}

export interface IStorage {
  // User operations for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  // Checklist operations
  getChecklistProgress(userId: string, category?: string): Promise<ChecklistProgress[]>;
  updateChecklistItem(progress: InsertChecklistProgress & { userId: string }): Promise<ChecklistProgress>;
  getUserProgress(userId: string): Promise<{ [category: string]: { completed: number; total: number } }>;
  // Email subscriber operations
  addEmailSubscriber(subscriber: InsertEmailSubscriber): Promise<EmailSubscriber>;
  getSubscriberByEmail(email: string): Promise<EmailSubscriber | undefined>;
  getAllSubscribers(): Promise<EmailSubscriber[]>;
  unsubscribe(email: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return withDatabase(async () => {
      const [user] = await db.select().from(users).where(eq(users.id, id));
      return user || undefined;
    }, undefined);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    return withDatabase(async () => {
      const [user] = await db
        .insert(users)
        .values(userData)
        .onConflictDoUpdate({
          target: users.id,
          set: {
            ...userData,
            updatedAt: new Date(),
          },
        })
        .returning();
      return user;
    }, {
      id: userData.id || 'mock-user',
      username: userData.username,
      password: userData.password,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      profileImageUrl: userData.profileImageUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User);
  }

  async getChecklistProgress(userId: string, category?: string): Promise<ChecklistProgress[]> {
    return withDatabase(async () => {
      const conditions = [eq(checklistProgress.userId, userId)];
      if (category) {
        conditions.push(eq(checklistProgress.category, category));
      }
      
      return await db.select().from(checklistProgress).where(and(...conditions));
    }, []);
  }

  async updateChecklistItem(progressData: InsertChecklistProgress & { userId: string }): Promise<ChecklistProgress> {
    return withDatabase(async () => {
      // Check if item already exists
      const [existing] = await db
        .select()
        .from(checklistProgress)
        .where(
          and(
            eq(checklistProgress.userId, progressData.userId),
            eq(checklistProgress.category, progressData.category),
            eq(checklistProgress.itemId, progressData.itemId)
          )
        );

      if (existing) {
        // Update existing item
        const [updated] = await db
          .update(checklistProgress)
          .set({
            completed: progressData.completed,
            completedAt: progressData.completed ? new Date() : null,
          })
          .where(eq(checklistProgress.id, existing.id))
          .returning();
        return updated;
      } else {
        // Create new item
        const [newProgress] = await db
          .insert(checklistProgress)
          .values({
            userId: progressData.userId,
            category: progressData.category,
            itemId: progressData.itemId,
            completed: progressData.completed,
            completedAt: progressData.completed ? new Date() : null,
          })
          .returning();
        return newProgress;
      }
    }, {
      id: 'mock-progress',
      userId: progressData.userId,
      category: progressData.category,
      itemId: progressData.itemId,
      completed: progressData.completed,
      completedAt: progressData.completed ? new Date() : null,
    } as ChecklistProgress);
  }

  async getUserProgress(userId: string): Promise<{ [category: string]: { completed: number; total: number } }> {
    // Get dynamic totals from shared checklist data
    const totalCounts = getChecklistTotals();

    const userProgress = await this.getChecklistProgress(userId);
    const result: { [category: string]: { completed: number; total: number } } = {};

    for (const category of Object.keys(totalCounts)) {
      const categoryProgress = userProgress.filter(p => p.category === category);
      const completed = categoryProgress.filter(p => p.completed).length;
      result[category] = {
        completed,
        total: totalCounts[category]
      };
    }

    return result;
  }

  async addEmailSubscriber(subscriberData: InsertEmailSubscriber): Promise<EmailSubscriber> {
    return withDatabase(async () => {
      try {
        const [subscriber] = await db
          .insert(emailSubscribers)
          .values(subscriberData)
          .returning();
        return subscriber;
      } catch (error: any) {
        if (error.code === '23505') { // Unique constraint violation
          throw new Error('Email already subscribed');
        }
        throw error;
      }
    }, {
      id: 'mock-subscriber',
      email: subscriberData.email || '',
      name: subscriberData.name,
      source: subscriberData.source || 'mock',
      leadMagnet: subscriberData.leadMagnet || 'geo-audit-checklist',
      ipAddress: subscriberData.ipAddress,
      userAgent: subscriberData.userAgent,
      referrer: subscriberData.referrer,
      verified: false,
      unsubscribed: false,
      subscribedAt: new Date(),
      unsubscribedAt: null,
    } as EmailSubscriber);
  }

  async getSubscriberByEmail(email: string): Promise<EmailSubscriber | undefined> {
    return withDatabase(async () => {
      const [subscriber] = await db
        .select()
        .from(emailSubscribers)
        .where(eq(emailSubscribers.email, email.toLowerCase()));
      return subscriber || undefined;
    }, undefined);
  }

  async getAllSubscribers(): Promise<EmailSubscriber[]> {
    return withDatabase(async () => {
      return await db
        .select()
        .from(emailSubscribers)
        .where(eq(emailSubscribers.unsubscribed, false));
    }, []);
  }

  async unsubscribe(email: string): Promise<boolean> {
    return withDatabase(async () => {
      const result = await db
        .update(emailSubscribers)
        .set({ 
          unsubscribed: true,
          unsubscribedAt: new Date()
        })
        .where(eq(emailSubscribers.email, email.toLowerCase()))
        .returning();
      return result.length > 0;
    }, false);
  }
}

export const storage = new DatabaseStorage();
