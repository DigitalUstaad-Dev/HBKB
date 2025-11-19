// src/core/http/router.ts
import { Router, Request, Response } from 'express';
import {
  listLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
} from '../../modules/leads/module';

export function createAppRouter() {
  const router = Router();

  // Simple health check
  router.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  // Leads CRUD
  router.get('/leads', listLeads);
  router.get('/leads/:id', getLead);
  router.post('/leads', createLead);
  router.put('/leads/:id', updateLead);
  router.delete('/leads/:id', deleteLead);

  return router;
}
