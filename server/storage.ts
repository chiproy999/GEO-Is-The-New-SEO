import { users, checklistProgress, emailSubscribers, type User, type UpsertUser, type ChecklistProgress, type InsertChecklistProgress, type EmailSubscriber, type InsertEmailSubscriber } from "@shared/schema";
import { getChecklistTotals } from "@shared/checklist-data";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

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
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
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
  }

  async getChecklistProgress(userId: string, category?: string): Promise<ChecklistProgress[]> {
    const conditions = [eq(checklistProgress.userId, userId)];
    if (category) {
      conditions.push(eq(checklistProgress.category, category));
    }
    
    return await db.select().from(checklistProgress).where(and(...conditions));
  }

  async updateChecklistItem(progressData: InsertChecklistProgress & { userId: string }): Promise<ChecklistProgress> {
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
  }

  async getSubscriberByEmail(email: string): Promise<EmailSubscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(emailSubscribers)
      .where(eq(emailSubscribers.email, email.toLowerCase()));
    return subscriber || undefined;
  }

  async getAllSubscribers(): Promise<EmailSubscriber[]> {
    return await db
      .select()
      .from(emailSubscribers)
      .where(eq(emailSubscribers.unsubscribed, false));
  }

  async unsubscribe(email: string): Promise<boolean> {
    const result = await db
      .update(emailSubscribers)
      .set({ 
        unsubscribed: true,
        unsubscribedAt: new Date()
      })
      .where(eq(emailSubscribers.email, email.toLowerCase()))
      .returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
