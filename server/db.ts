import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  console.warn("⚠️  DATABASE_URL not set. Database features will be disabled.");
  console.warn("   To enable full functionality, set up a PostgreSQL database and set DATABASE_URL.");
  // Create a placeholder to avoid immediate errors - actual connection attempts will be handled in storage layer
  process.env.DATABASE_URL = "postgresql://localhost:5432/placeholder";
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });