export = UnauthorizedError;
/**
 * 401: UNAUTHORIZED ERROR
 *
 * The request has not been applied because it lacks valid
 * authentication credentials for the target resource.
 *
 * Source: RFC7235 Section 3.1
 */
declare class UnauthorizedError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
