// src/app/server.ts
import express from "express";
import { registerRoutes } from "./routes";

export function createApp() {
  const app = express();

  app.use(express.json());

  const router = registerRoutes();
  app.use("/api", router);

  return app;
}
