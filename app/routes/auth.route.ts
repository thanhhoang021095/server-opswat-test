import * as express from 'express';
import { AuthController } from '../controllers/auth.controller';
import * as asyncHandler from 'express-async-handler';

export class AuthRoutes {
    router: express.Router;
    controller: AuthController;
    constructor() {
        this.router = express.Router();
        this.controller = new AuthController();
    }
    get routes() {
        this.router.post('/', asyncHandler(this.controller.authLogin));
        return this.router;
    }
}