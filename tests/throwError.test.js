/* eslint-disable no-unused-expressions */
const errors = require('../src')
const expect = require('chai').expect;

describe('Testing throwError function', () => {
    it('Should throw 400 Bad Request Error', () => {
        expect(() => errors.throwError(400)).to.throw(errors.BadRequestError)
    });
    it('Should throw 401 Unauthorized Error', () => {
        expect(() => errors.throwError(401)).to.throw(errors.UnauthorizedError)
    });
    it('Should throw 403 Request Timeout Error', () => {
        expect(() => errors.throwError(403)).to.throw(errors.RequestTimeoutError)
    });
    it('Should throw 404 Resource Not Found Error', () => {
        expect(() => errors.throwError(404)).to.throw(errors.ResourceNotFoundError)
    });
    it('Should throw 422 Unprocessable Entity Error', () => {
        expect(() => errors.throwError(422)).to.throw(errors.UnprocessableEntityError)
    });
    it('Should throw 502 Bad Gateway Error', () => {
        expect(() => errors.throwError(502)).to.throw(errors.BadGatewayError)
    });
    it('Should throw 500 Internal Server Error', () => {
        expect(() => errors.throwError(500)).to.throw(errors.InternalServerError)
    });
    it('Should fallback to thorwing 500 Internal Server Error', () => {
        expect(() => errors.throwError()).to.throw(errors.InternalServerError)
        expect(() => errors.throwError(743)).to.throw(errors.InternalServerError)
    });
});