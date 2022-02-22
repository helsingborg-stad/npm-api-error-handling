declare const _exports: {
    throwError: (statusCode: number, msg: string) => never;
    BadGatewayError: typeof import("./errors/server/BadGatewayError");
    InternalServerError: typeof import("./errors/server/InternalServerError");
    BadRequestError: typeof import("./errors/client/BadRequestError");
    ForbiddenError: typeof import("./errors/client/ForbiddenError");
    ResourceNotFoundError: typeof import("./errors/client/ResourceNotFoundError");
    RequestTimeoutError: typeof import("./errors/client/RequestTimeoutError");
    UnauthorizedError: typeof import("./errors/client/UnauthorizedError");
    UnprocessableEntityError: typeof import("./errors/client/UnprocessableEntityError");
};
export = _exports;
