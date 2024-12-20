import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import BaseError from '../../errors/BaseError';
import ErrorResponse from '../common/ErrorResponse';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
    if(error instanceof BaseError) {
        ErrorResponse.message = error.message;
        ErrorResponse.error = error.details;
        return res.status(error.statusCode).json(ErrorResponse);
    }

    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
};

export default errorHandler;