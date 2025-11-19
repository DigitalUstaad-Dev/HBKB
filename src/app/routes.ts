import { Express } from "express";

export function registerRoutes(app: Express) {
  // health check
  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });
}
