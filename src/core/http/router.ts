// src/core/http/router.ts

import { Router } from "express";
import {
  listLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from "../../modules/leads/module";

export function createApiRouter() {
  const router = Router();

  // Leads CRUD
  router.get("/leads", listLeads);
  router.get("/leads/:id", getLead);
  router.post("/leads", createLead);
  router.put("/leads/:id", updateLead);
  router.delete("/leads/:id", deleteLead);

  return router;
}
