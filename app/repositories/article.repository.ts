import { NextFunction, Response, Request } from "express";
import * as articleData from "../mock/articles.json";
const fs = require('fs');

const fileLocation = './app/mock/articles.json';

export class ArticleRepository {
    async getRecord() {
        return articleData;
    }

    async createRecord(sendData) {
        await fs.readFile(fileLocation, (err, resData) => {
            if (err) {
                console.log(err);
            } else {
                const { data } = JSON.parse(resData);
                const newData = {
                    data: [
                        ...data,
                        {
                            id: data.length + 1,
                            ...sendData
                        }
                    ]
                };

                fs.writeFileSync(fileLocation, JSON.stringify(newData), 'utf8');
            }
        });
        return;
    }

    async updateRecord(newValues) {
        await fs.readFile(fileLocation, (err, resData) => {
            if (err) {
                console.log(err);
            } else {
                const { data } = JSON.parse(resData);

                const updateIdx: number = data.findIndex(d => d.id === newValues.id);
                if (updateIdx !== -1) {
                    data[updateIdx] = newValues;

                    fs.writeFileSync(fileLocation, JSON.stringify({ data }), 'utf8');
                }
            }
        });
        return;
    }

    async deleteRecord(id) {
        await fs.readFile(fileLocation, (err, resData) => {
            if (err) {
                console.log(err);
            } else {
                const { data } = JSON.parse(resData);
                const delIdx: number = data.findIndex(d => d.id === +id);

                if (delIdx !== -1) {
                    data.splice(delIdx, 1);

                    fs.writeFileSync(fileLocation, JSON.stringify({ data }), 'utf8');
                }
            }
        });
        return;
    }
}