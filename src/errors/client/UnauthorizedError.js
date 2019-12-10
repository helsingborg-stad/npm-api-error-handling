const DomainError = require('../DomainError')
const errorMessages = require('../../../assets/errorMessages')

/**
 * 401: UNAUTHORIZED ERROR
 * 
 * The request has not been applied because it lacks valid 
 * authentication credentials for the target resource.
 * 
 * Source: RFC7235 Section 3.1
 */

class UnauthorizedError extends DomainError {
    constructor(msg = errorMessages[401]) {
      super(msg, 401);
    }
}

module.exports = UnauthorizedError;