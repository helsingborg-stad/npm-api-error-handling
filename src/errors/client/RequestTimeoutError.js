const DomainError = require('../DomainError')
const errorMessages = require('../../../assets/errorMessages')

/**
 * 408: REQUEST TIMEOUT ERROR
 * 
 * The server did not receive a complete requestmessage 
 * within the time that it was prepared to wait.
 * 
 * Source: RFC7231 Section 6.5.7
 */

class RequestTimeoutError extends DomainError {
    constructor(msg = errorMessages[408]) {
      super(msg, 408);
    }
}

module.exports = RequestTimeoutError;
