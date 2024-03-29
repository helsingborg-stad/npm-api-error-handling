export = UnprocessableEntityError;
/**
 * 422: UNPROCESSABLE ENTITY ERROR
 *
 * The server understands the content type of the request entity
 * (hence a 415 Unsupported Media Type status code is inappropriate),
 * and the syntax of the request entity is correct (thus a 400 Bad
 * Request status code is inappropriate) but was unable to process
 * the contained instructions.
 *
 * Source: RFC4918 Section 11.2
 */
declare class UnprocessableEntityError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
