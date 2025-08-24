import { users, checklistProgress, type User, type InsertUser, type ChecklistProgress, type InsertChecklistProgress } from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getChecklistProgress(userId?: string, category?: string): Promise<ChecklistProgress[]>;
  updateChecklistItem(progress: InsertChecklistProgress & { userId?: string }): Promise<ChecklistProgress>;
  getUserProgress(userId?: string): Promise<{ [category: string]: { completed: number; total: number } }>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getChecklistProgress(userId?: string, category?: string): Promise<ChecklistProgress[]> {
    let query = db.select().from(checklistProgress);
    
    const conditions = [];
    if (userId) {
      conditions.push(eq(checklistProgress.userId, userId));
    }
    if (category) {
      conditions.push(eq(checklistProgress.category, category));
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }
    
    return await query;
  }

  async updateChecklistItem(progressData: InsertChecklistProgress & { userId?: string }): Promise<ChecklistProgress> {
    // Check if item already exists
    const [existing] = await db
      .select()
      .from(checklistProgress)
      .where(
        and(
          eq(checklistProgress.userId, progressData.userId || null),
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
          userId: progressData.userId || null,
          category: progressData.category,
          itemId: progressData.itemId,
          completed: progressData.completed,
          completedAt: progressData.completed ? new Date() : null,
        })
        .returning();
      return newProgress;
    }
  }

  async getUserProgress(userId?: string): Promise<{ [category: string]: { completed: number; total: number } }> {
    // Return fixed data for total counts based on the checklist items
    const totalCounts = {
      'geo': 6,
      'maps': 6,
      'technical': 6
    };

    const userProgress = await this.getChecklistProgress(userId);
    const result: { [category: string]: { completed: number; total: number } } = {};

    for (const category of Object.keys(totalCounts)) {
      const categoryProgress = userProgress.filter(p => p.category === category);
      const completed = categoryProgress.filter(p => p.completed).length;
      result[category] = {
        completed,
        total: totalCounts[category as keyof typeof totalCounts]
      };
    }

    return result;
  }
}

export const storage = new DatabaseStorage();
