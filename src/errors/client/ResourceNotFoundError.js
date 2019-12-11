const DomainError = require('../DomainError');
const errorMessages = require('../../../assets/errorMessages');

/**
 * 404: RESOURCE NOT FOUND ERROR
 *
 * The origin server did not find a current representation
 * for the target resource or is not willing to disclose that one exists.
 *
 * Source: RFC7231 6.5.4
 */

class ResourceNotFoundError extends DomainError {
  constructor(msg = errorMessages[404]) {
    super(msg, 404);
  }
}

module.exports = ResourceNotFoundError;
