export = InternalServerError;
/**
 * 500: INTERNAL SERVER ERROR
 *
 * The server encountered an unexpected condition that prevented it
 * from fulfilling the request.
 *
 * Source: RFC7231 Section 6.6.1
 */
declare class InternalServerError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
