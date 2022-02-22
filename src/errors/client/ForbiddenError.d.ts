export = ForbiddenError;
/**
 * 403: FORBIDDEN ERROR
 *
 * The server understood the request but refuses to authorize it.
 *
 * Source: RFC7231 Section 6.5.3
 */
declare class ForbiddenError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
