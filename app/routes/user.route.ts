import * as express from 'express';
import { UserController } from '../controllers/user.controller';
import * as asyncHandler from 'express-async-handler'
export class UserRoutes {
    router: express.Router;
    controller: UserController;
    constructor() {
        this.router = express.Router();
        this.controller = new UserController();
    }
    get routes() {
        this.router.get('/error', asyncHandler(this.controller.getError));
        this.router.get('/', asyncHandler(this.controller.getRecord));
        this.router.post('/', asyncHandler(this.controller.createRecord));
        this.router.delete('/', asyncHandler(this.controller.deleteRecord));
        return this.router;
    }
}