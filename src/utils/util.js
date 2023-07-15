import { HTTP_STATUS } from "../enum.js";

export class BaseResponse {
    constructor({ status, message, data }) {
        this.status = status || 200;
        this.message = message || 'success';
        this.data = data || null;
    }
}

export class ExceptionResponse {
    constructor({ status, message, data }) {
        this.status = status || HTTP_STATUS.BAD_REQUEST;
        this.message = message || 'Data not valid';
        this.data = data || null;
    }
}