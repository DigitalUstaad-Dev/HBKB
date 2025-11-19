// src/app/server.ts
import { registerRoutes } from './routes';
import { Router } from '../core/http/router';

export function createApp() {
  const router = registerRoutes();
  return router.buildServer();
}
