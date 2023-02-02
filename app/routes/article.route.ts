import * as express from 'express';
import { ArticleController } from '../controllers/article.controller';
import * as asyncHandler from 'express-async-handler'
export class ArticleRoutes {
    router: express.Router;
    controller: ArticleController;
    constructor() {
        this.router = express.Router();
        this.controller = new ArticleController();
    }
    get routes() {
        this.router.get('/', asyncHandler(this.controller.getRecord));
        this.router.post('/', asyncHandler(this.controller.createRecord));
        this.router.put('/', asyncHandler(this.controller.updateRecord));
        this.router.delete('/', asyncHandler(this.controller.deleteRecord));
        return this.router;
    }
}