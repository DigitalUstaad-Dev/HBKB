// src/app/routes.ts
import { Router } from "express";
import { createHttpRouter } from "../core/http/router";
import {
  listLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from "../modules/leads/module";

export function registerRoutes(): Router {
  const router = createHttpRouter();

  // Health
  router.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  // Leads CRUD
  router.get("/leads", listLeads);
  router.get("/leads/:id", getLead);
  router.post("/leads", createLead);
  router.put("/leads/:id", updateLead);
  router.delete("/leads/:id", deleteLead);

  return router;
}
