// src/modules/leads/module.ts
import { Request, Response } from 'express';

type Lead = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
};

// TEMP in-memory store (you can swap to real DB later)
const leads: Lead[] = [];

// GET /leads
export function listLeads(_req: Request, res: Response) {
  res.json(leads);
}

// GET /leads/:id
export function getLead(req: Request, res: Response) {
  const lead = leads.find(l => l.id === req.params.id);
  if (!lead) {
    return res.status(404).json({ message: 'Lead not found' });
  }
  res.json(lead);
}

// POST /leads
export function createLead(req: Request, res: Response) {
  const { name, email, phone } = req.body || {};
  const newLead: Lead = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };
  leads.push(newLead);
  res.status(201).json(newLead);
}

// PUT /leads/:id
export function updateLead(req: Request, res: Response) {
  const lead = leads.find(l => l.id === req.params.id);
  if (!lead) {
    return res.status(404).json({ message: 'Lead not found' });
  }
  const { name, email, phone } = req.body || {};
  if (name !== undefined) lead.name = name;
  if (email !== undefined) lead.email = email;
  if (phone !== undefined) lead.phone = phone;

  res.json(lead);
}

// DELETE /leads/:id
export function deleteLead(req: Request, res: Response) {
  const index = leads.findIndex(l => l.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Lead not found' });
  }
  leads.splice(index, 1);
  res.status(204).send();
}
