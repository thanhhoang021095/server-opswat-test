import { NextFunction, Response, Request } from "express";
import { UserRepository } from '../repositories/user.repository'
import { CumtomResponse } from "../config/response";

export class UserController {
    userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    getError = async (request: Request, response: Response, next: NextFunction) => {
        throw CumtomResponse.badRequest({}, 'Error');
    }

    getRecord = async (request: Request, response: Response, next: NextFunction) => {
        const res = await this.userRepository.getRecord();
        response.json(res);
    }

    createRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.userRepository.createRecord(request.body);
        response.json(CumtomResponse.success(null, "create success"));
    }

    deleteRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.userRepository.deleteRecord(request.body.id);
        response.json(CumtomResponse.success(null, 'article ' + request.body.id + ' is deleted successfully'));
    }
}