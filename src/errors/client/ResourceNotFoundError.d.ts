export = ResourceNotFoundError;
/**
 * 404: RESOURCE NOT FOUND ERROR
 *
 * The origin server did not find a current representation
 * for the target resource or is not willing to disclose that one exists.
 *
 * Source: RFC7231 6.5.4
 */
declare class ResourceNotFoundError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
