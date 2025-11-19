// src/app/routes.ts

import { Express } from "express";
import { createApiRouter } from "../core/http/router";

export function registerRoutes(app: Express) {
  // health check
  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // API routes
  app.use("/api", createApiRouter());
}
