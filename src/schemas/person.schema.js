const Joi = require("joi")

const PersonSchema = Joi.object().keys({
    name:Joi.string().required(),
    age:Joi.number().required(),
    hobbies: Joi.array().required()
})

module.exports = PersonSchema