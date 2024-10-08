export const successResponse = (res, data, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({ success: true, message, data });
};

export const notFoundResponse = (res, data, message = 'Not Found', statusCode = 404) => {
    return res.status(statusCode).json({ success: false, message, data });
};

export const unAuthorizedResponse = (res, data, message = 'Unauthorized Response', statusCode = 401) => {
    return res.status(statusCode).json({ success: false, message, data });
};

export const noAccessResponse = (res, data, message = 'No Access Response', statusCode = 403) => {
    return res.status(statusCode).json({ success: false, message, data });
};

export const errorResponse = (res, errors, message = 'Error Occured', statusCode = 400) => {
    return res.status(statusCode).json({ success: false, message, errors });
};

export const internalServerErrorResponse = (res, errors, message = 'Something went wrong, Please try again', statusCode = 500) => {
    return res.status(statusCode).json({ success: false, message, errors });
};