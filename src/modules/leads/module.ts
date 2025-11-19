// src/modules/leads/module.ts

import { Request, Response } from "express";
import { leadService } from "./service";

export async function listLeads(req: Request, res: Response) {
  const leads = await leadService.list();
  res.json(leads);
}

export async function getLead(req: Request, res: Response) {
  const lead = await leadService.get(req.params.id);
  if (!lead) {
    return res.status(404).json({ error: "Lead not found" });
  }
  res.json(lead);
}

export async function createLead(req: Request, res: Response) {
  const { name, email, source } = req.body ?? {};

  if (!name || !email || !source) {
    return res
      .status(400)
      .json({ error: "name, email, and source are required" });
  }

  const created = await leadService.create(req.body);
  res.status(201).json(created);
}

export async function updateLead(req: Request, res: Response) {
  const updated = await leadService.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({ error: "Lead not found" });
  }
  res.json(updated);
}

export async function deleteLead(req: Request, res: Response) {
  const ok = await leadService.remove(req.params.id);
  if (!ok) {
    return res.status(404).json({ error: "Lead not found" });
  }
  res.status(204).send();
}
