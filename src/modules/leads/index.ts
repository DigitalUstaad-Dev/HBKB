import { createApp } from "./app/server";

const port = Number(process.env.PORT) || 3000;

const app = createApp();

app.listen(port, () => {
  console.log(`[HBKB] API running on http://localhost:${port}`);
});
