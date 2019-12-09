const errorMessages = require('../../assets/errorMessages')

/**
 * DomainError
 *
 * Custom error class to extend with specific codes and messages
 *
 * Shamelessly stolen from https://rclayton.silvrback.com/custom-errors-in-node-js
 * All kudos to the author: Richard Clayton
 */

class DomainError extends Error {
    constructor(msg, status) {
      super(msg);
      // Ensure the name of this error is the same as the class name
      this.name = this.constructor.name;
      this.status = status;
      this.detail = errorMessages[status];
      this.message = msg
      // This clips the constructor invocation from the stack trace.
      // It's not absolutely essential, but it does make the stack trace a little nicer.
      // See Node.js reference.
      Error.captureStackTrace(this, this.constructor);
    }
  }

  module.exports = DomainError;