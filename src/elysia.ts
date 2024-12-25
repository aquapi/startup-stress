import { ROUTES, REQ } from "../util";
import Elysia from "elysia";

const app = new Elysia({ aot: false });

for (let i = 0; i < ROUTES; i++)
  app.get(`/${i}/:id/dyn/*`, (c) => c.params.id);

app.fetch(REQ);
