export = DomainError;
/**
 * DomainError
 *
 * Custom error class to extend with specific codes and messages
 *
 * Shamelessly stolen from https://rclayton.silvrback.com/custom-errors-in-node-js
 * All kudos to the author: Richard Clayton
 */
declare class DomainError extends Error {
    constructor(msg: any, status: any);
    status: any;
    detail: any;
}
