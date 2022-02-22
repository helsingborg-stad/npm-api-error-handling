export = BadGatewayError;
/**
 * 502: BAD GATEWAY ERROR
 *
 * The server, while acting as a gateway or proxy, received an invalid response
 * from an inbound server it accessed while attempting to fulfill the request.
 *
 * Source: RFC7231 Section 6.6.3
 */
declare class BadGatewayError extends DomainError {
    constructor(msg?: string);
}
import DomainError = require("../DomainError");
