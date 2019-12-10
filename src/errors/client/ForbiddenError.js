const DomainError = require('../DomainError')
const errorMessages = require('../../../assets/errorMessages')

/**
 * 403: FORBIDDEN ERROR
 * 
 * The server understood the request but refuses to authorize it.
 * 
 * Source: RFC7231 Section 6.5.3
 */

class ForbiddenError extends DomainError {
    constructor(msg = errorMessages[403]) {
      super(msg, 403);
    }
}

module.exports = ForbiddenError