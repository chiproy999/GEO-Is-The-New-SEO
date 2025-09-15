import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").unique(),
  password: text("password"),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const checklistProgress = pgTable("checklist_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  category: text("category").notNull(), // 'geo', 'maps', 'technical'
  itemId: text("item_id").notNull(),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
}, (table) => [
  index("idx_checklist_user_category").on(table.userId, table.category),
  index("idx_checklist_user_item").on(table.userId, table.itemId),
]);

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").unique().notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  authorBio: text("author_bio"),
  authorImage: text("author_image"),
  featuredImage: text("featured_image"),
  featuredImageAlt: text("featured_image_alt"),
  tags: text("tags").array().notNull(),
  category: text("category").notNull(),
  published: boolean("published").default(false),
  featured: boolean("featured").default(false),
  readTimeMinutes: text("read_time_minutes"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords").array(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  publishedAt: timestamp("published_at"),
}, (table) => [
  index("idx_blog_published").on(table.published, table.publishedAt),
  index("idx_blog_category").on(table.category),
  index("idx_blog_featured").on(table.featured),
]);

export const insertChecklistProgressSchema = createInsertSchema(checklistProgress).omit({
  id: true,
  completedAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type ChecklistProgress = typeof checklistProgress.$inferSelect;
export type InsertChecklistProgress = z.infer<typeof insertChecklistProgressSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
