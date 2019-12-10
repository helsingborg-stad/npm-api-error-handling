const errors = require('./errors');

/**
 * A function for throwing an error based on a http status code
 * @param {number} statusCode
 * @param {string} msg
 */
const throwError = (statusCode, msg) => {
  switch (statusCode) {
    case 400:
      throw new errors.BadRequestError(msg);
    case 401:
      throw new errors.UnauthorizedError(msg);
    case 403:
      throw new errors.RequestTimeoutError(msg);
    case 404:
      throw new errors.ResourceNotFoundError(msg);
    case 422:
      throw new errors.UnprocessableEntityError(msg);
    case 502:
      throw new errors.BadGatewayError(msg);
    default:
      throw new errors.InternalServerError(msg);
  }
};

module.exports = {
    ...errors,
    throwError
}
