import { NextFunction, Response, Request } from "express";
import { ArticleRepository } from '../repositories/article.repository'
import { CumtomResponse } from "../config/response";

export class ArticleController {
    articleRepository: ArticleRepository;
    constructor() {
        this.articleRepository = new ArticleRepository();
    }

    getError = async (request: Request, response: Response, next: NextFunction) => {
        throw CumtomResponse.badRequest({}, 'Error');
    }

    getRecord = async (request: Request, response: Response, next: NextFunction) => {
        const res = await this.articleRepository.getRecord();
        response.json(res);
    }

    createRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.articleRepository.createRecord(request.body);
        response.json(CumtomResponse.success(null, "create success"));
    }

    updateRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.articleRepository.updateRecord(request.body);
        response.json(CumtomResponse.success(null, "update success"));
    }

    deleteRecord = async (request: Request, response: Response, next: NextFunction) => {
        await this.articleRepository.deleteRecord(request.body.id);
        response.json(CumtomResponse.success(null, 'article ' + request.body.id + ' is deleted successfully'));
    }
}