import { Router } from "express";
import { createHttpRouter } from "../core/http/router";
import {
  listLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from "../modules/leads/module";
