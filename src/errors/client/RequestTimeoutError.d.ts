export = RequestTimeoutError;
/**
 * 408: REQUEST TIMEOUT ERROR
 *
 * The server did not receive a complete requestmessage
 * within the time that it was prepared to wait.
 *
 * Source: RFC7231 Section 6.5.7
 */
declare class RequestTimeoutError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
