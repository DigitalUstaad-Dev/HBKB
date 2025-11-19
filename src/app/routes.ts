// src/app/routes.ts

import { RouteDefinition } from "../core/http/types";

// Health route
import healthHandler from "./health";

// Leads module handlers
import { getAllLeads, createLead } from "../modules/leads";

export const routes: RouteDefinition[] = [
  // Health check
  {
    method: "get",
    path: "/health",
    handler: healthHandler,
  },

  // Leads list
  {
    method: "get",
    path: "/leads",
    handler: getAllLeads,
  },

  // Leads create
  {
    method: "post",
    path: "/leads",
    handler: createLead,
  },
];
