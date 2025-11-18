import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { visualizer } from "rollup-plugin-visualizer";

const shouldAnalyze = process.env.ANALYZE === "true";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    splitVendorChunkPlugin(),
    ...(shouldAnalyze
      ? [
          visualizer({
            filename: "dist/public/bundle-report.html",
            template: "treemap",
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react") || id.includes("framer-motion")) {
              return "ui-vendors";
            }
            if (id.includes("recharts") || id.includes("embla-carousel")) {
              return "visualization";
            }
            if (id.includes("@tanstack") || id.includes("wouter")) {
              return "framework";
            }
          }
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
