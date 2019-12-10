const DomainError = require('../DomainError')
const errorMessages = require('../../../assets/errorMessages')
/**
 * 502: BAD GATEWAY ERROR
 * 
 * The server, while acting as a gateway or proxy, received an invalid response 
 * from an inbound server it accessed while attempting to fulfill the request.
 * 
 * Source: RFC7231 Section 6.6.3
 */

class BadGatewayError extends DomainError {
    constructor(msg = errorMessages[502]) {
      super(msg, 502);
    }
}

module.exports = BadGatewayError;