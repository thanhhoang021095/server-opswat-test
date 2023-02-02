import * as express from 'express'
import { UserRoutes } from './user.route';
import { ArticleRoutes } from './article.route';
import { AuthRoutes } from './auth.route';

const app = express();

export class AppRoutes {
  get routes() {
    app.use("/user", new UserRoutes().routes);
    app.use("/article", new ArticleRoutes().routes);
    app.use("/auth", new AuthRoutes().routes);
    return app;
  }
}