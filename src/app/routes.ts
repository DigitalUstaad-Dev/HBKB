// src/app/routes.ts
import { Router } from '../core/http/router';
import { leadsModule } from '../modules/leads';

export function registerRoutes() {
  const router = new Router();

  router.get('/health', () => ({ status: 'ok' }));

  router.group('/leads', leadsModule);

  return router;
}
