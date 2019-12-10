const DomainError = require('../DomainError');
const errorMessages = require('../../../assets/errorMessages');

/**
 * 400: BAD REQUEST ERROR
 *
 * The server cannot or will not process the request due to something that
 * is perceived to be a client error (e.g., malformed request syntax,
 * invalid request message framing, or deceptive request routing).
 *
 * Source: RFC7231 Section 6.5.1
 */

class BadRequestError extends DomainError {
  constructor(msg = errorMessages[400]) {
    super(msg, 400);
  }
}

module.exports = BadRequestError;
