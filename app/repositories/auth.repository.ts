import { NextFunction, Response, Request } from "express";
import * as userData from "../mock/users.json";
const fs = require('fs');


export class AuthRepository {
    async authLogin(reqData) {
        const { data } = userData;
        return data.some(u => u.username === reqData.username && u.password === reqData.password);
    }
}