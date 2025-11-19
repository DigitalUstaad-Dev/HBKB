// api/index.ts

import type { VercelRequest, VercelResponse } from "@vercel/node";
import serverless from "serverless-http";
import { createApp } from "../src/app/server";

const app = createApp();
const handler = serverless(app);

export default async function handlerFn(
  req: VercelRequest,
  res: VercelResponse
) {
  return handler(req as any, res as any);
}
