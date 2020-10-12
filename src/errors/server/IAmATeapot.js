const DomainError = require('../DomainError');
const errorMessages = require('../../../assets/errorMessages');

/**
 * 418: I'm a teapot
 *
 * Any attempt to brew coffee with a teapot should result in the error
 * code "418 I'm a teapot". The resulting entity body MAY be short and
 * stout
 *
 * Source: RFC2324 Section 2.3.2
 */

class IAmATeapot extends DomainError {
  constructor(msg = errorMessages[418]) {
    super(msg, 418);
  }
}

module.exports = IAmATeapot;
