const Joi = require('./joi.lib').Joi;
const roleSchema = Joi.object().keys({
    jobtitle: Joi.string().min(3).max(50).required(),
    PersonId: Joi.number().integer().required(),
});
module.exports.validateRole = (requestObject) => {
    return Joi.validate({ jobtitle: requestObject.jobtitle, PersonId: requestObject.PersonId }, roleSchema);
}
