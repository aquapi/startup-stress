import { TrieRouter } from "hono/router/trie-router";
import { routes, testReq } from "../util";
import { Hono } from "hono";

const app = new Hono({ router: new TrieRouter() });
for (let i = 0; i < routes; i++)
  app.get(`/${i}/:id/dyn/*`, (c) => c.body(c.req.param('id')));
app.fetch(testReq);
