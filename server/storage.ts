import { type User, type InsertUser, type ChecklistProgress, type InsertChecklistProgress } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getChecklistProgress(userId?: string, category?: string): Promise<ChecklistProgress[]>;
  updateChecklistItem(progress: InsertChecklistProgress & { userId?: string }): Promise<ChecklistProgress>;
  getUserProgress(userId?: string): Promise<{ [category: string]: { completed: number; total: number } }>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private checklistProgress: Map<string, ChecklistProgress>;

  constructor() {
    this.users = new Map();
    this.checklistProgress = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getChecklistProgress(userId?: string, category?: string): Promise<ChecklistProgress[]> {
    const allProgress = Array.from(this.checklistProgress.values());
    return allProgress.filter(progress => {
      if (userId && progress.userId !== userId) return false;
      if (category && progress.category !== category) return false;
      return true;
    });
  }

  async updateChecklistItem(progressData: InsertChecklistProgress & { userId?: string }): Promise<ChecklistProgress> {
    const key = `${progressData.userId || 'anonymous'}-${progressData.category}-${progressData.itemId}`;
    
    const existing = this.checklistProgress.get(key);
    if (existing) {
      const updated: ChecklistProgress = {
        ...existing,
        completed: progressData.completed,
        completedAt: progressData.completed ? new Date() : null,
      };
      this.checklistProgress.set(key, updated);
      return updated;
    } else {
      const id = randomUUID();
      const newProgress: ChecklistProgress = {
        id,
        userId: progressData.userId || null,
        category: progressData.category,
        itemId: progressData.itemId,
        completed: progressData.completed,
        completedAt: progressData.completed ? new Date() : null,
      };
      this.checklistProgress.set(key, newProgress);
      return newProgress;
    }
  }

  async getUserProgress(userId?: string): Promise<{ [category: string]: { completed: number; total: number } }> {
    // Return mock data for total counts based on the checklist items
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

export const storage = new MemStorage();
