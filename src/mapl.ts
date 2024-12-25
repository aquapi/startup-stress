import { REQ, ROUTES } from '../util';
import { router, jitc } from '@mapl/app';

const app = router();

for (let i = 0; i < ROUTES; i++)
  app.get(`/${i}/*/dyn/**`, (c) => c.params[0]);

const build = await jitc(app);
build.fetch(REQ);
