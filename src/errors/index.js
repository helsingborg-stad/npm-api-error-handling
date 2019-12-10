const clientErrors = require('./client');
const serverErrors = require('./server');

module.exports = {
    ...clientErrors,
    ...serverErrors
}