import { TrieRouter } from "hono/router/trie-router";
import { ROUTES, REQ } from "../util";
import { Hono } from "hono/quick";

const app = new Hono({ router: new TrieRouter() });

for (let i = 0; i < ROUTES; i++)
  app.get(`/${i}/:id/dyn/*`, (c) => c.body(c.req.param('id')));

app.fetch(REQ);
