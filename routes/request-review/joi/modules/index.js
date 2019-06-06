const personJoi = require('./person.joi').validatePerson;
const roleJoi = require('./role.joi').validateRole;
module.exports.validation = {
    personValidation: personJoi,
    roleValidation: roleJoi,
}