declare const _exports: {
    BadGatewayError: typeof import("./server/BadGatewayError");
    InternalServerError: typeof import("./server/InternalServerError");
    BadRequestError: typeof import("./client/BadRequestError");
    ForbiddenError: typeof import("./client/ForbiddenError");
    ResourceNotFoundError: typeof import("./client/ResourceNotFoundError");
    RequestTimeoutError: typeof import("./client/RequestTimeoutError");
    UnauthorizedError: typeof import("./client/UnauthorizedError");
    UnprocessableEntityError: typeof import("./client/UnprocessableEntityError");
};
export = _exports;
