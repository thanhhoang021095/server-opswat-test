import { NextFunction, Response, Request } from "express";
import { AuthRepository } from '../repositories/auth.repository'
import { CumtomResponse } from "../config/response";

export class AuthController {
    authRepository: AuthRepository;
    constructor() {
        this.authRepository = new AuthRepository();
    }

    authLogin = async (request: Request, response: Response, next: NextFunction) => {
        const res = await this.authRepository.authLogin(request.body);
        if (!res) {
            response.status(401).json(CumtomResponse.unAuthorized("login failed"))
        } else {
            response.json(CumtomResponse.success(null, "login success"));
        }
    }
}