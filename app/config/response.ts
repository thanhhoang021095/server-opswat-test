export const SUCCESS = {
    '200': 200
}

export const UNAUTH_ERROR = {
    '401': 401
}

export const CLIENT_ERROR = {
    '400': 400
}

export const SERVER_ERROR = {
    '500': 500
}

export class CumtomResponse {
    static success = (data: any, message: string = '') => {
        return {
            message: message,
            data: data
        };
    }

    static unAuthorized = (message: string = '') => {
        return {
            code: UNAUTH_ERROR[401],
            message: message,
        };
    }
    
    static badRequest = (data: any, message: string = '') => {
        return {
            code: CLIENT_ERROR[400],
            message: message,
            data: data
        };
    }

    static serverError = (data: any, message: string = '') => {
        return {
            code: SERVER_ERROR[500],
            message: message,
            data: data
        };
    }
}