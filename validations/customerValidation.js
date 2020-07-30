    const Joi = require('@hapi/joi');

    //Register validation
    const registerCustomerValidation = (data) => {
        const params = Joi.object({
            name: Joi.string()
                .min(3)
                .max(30)
                .required(),
            number: Joi.number()
                .integer()
                .min(99999999)
                .max(9999999999)
                .required(),
            password: Joi.string()
                .min(6)
                .required()
        });
        return params.validate(data);
    }

    //Login validation
    const loginCustomerValidation = (data) => {
        const params = Joi.object({
            number: Joi.string()
                .integer()
                .min(99999999)
                .max(9999999999)
                .required(),
            password: Joi.string()
                .min(6)
                .required()
        });
        return params.validate(data)
    }


    //Export functions for use
    module.exports.registerCustomerValidation = registerCustomerValidation;
    module.exports.loginCustomerValidation = loginCustomerValidation;