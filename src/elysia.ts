import { routes, testReq } from "../util";
import Elysia from "elysia";

const app = new Elysia();
for (let i = 0; i < routes; i++)
  app.get(`/${i}/:id/dyn/*`, (c) => c.params.id);
app.fetch(testReq);
