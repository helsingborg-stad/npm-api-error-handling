const DomainError = require('../DomainError');
const errorMessages = require('../../../assets/errorMessages');

/**
 * 500: INTERNAL SERVER ERROR
 *
 * The server encountered an unexpected condition that prevented it
 * from fulfilling the request.
 *
 * Source: RFC7231 Section 6.6.1
 */

class InternalServerError extends DomainError {
  constructor(msg = errorMessages[500]) {
    super(msg, 500);
  }
}

module.exports = InternalServerError;
