const errorMessages = {
    400: "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
    401: "The request has not been applied because it lacks valid authentication credentials for the target resource.",
    403: "The server understood the request but refuses to authorize it.",
    404: "The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.",
    408: "The server did not receive a complete request message within the time that it was prepared to wait.",
    422: "The server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.",
    500: "The server encountered an unexpected condition that prevented it from fulfilling the request.",
    502: "The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.",
}

module.exports = errorMessages;
