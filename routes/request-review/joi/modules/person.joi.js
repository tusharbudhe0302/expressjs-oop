const Joi = require('./joi.lib').Joi;
const personSchema = Joi.object().keys({
    firstname: Joi.string().min(3).max(50).required(),
    lastname: Joi.string().min(3).max(50).required(),
    age: Joi.number().integer().min(1).max(150).required(),
});
module.exports.validatePerson = (requestObject) => {
    return Joi.validate({ firstname: requestObject.firstname, lastname: requestObject.lastname, age: requestObject.age }, personSchema);
}
