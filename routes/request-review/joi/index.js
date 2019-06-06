const validationModule = require('./modules').validation;
module.exports.validation = {
    isValidPerson : validationModule.personValidation,
    isValidRole : validationModule.roleValidation,
}