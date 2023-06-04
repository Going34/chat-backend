import Joi from 'joi';

export const userSchema = Joi.object().keys({
    email: Joi.string().email().required().min(8),
    password: Joi.string().required().min(6).max(50),
    name: Joi.string().required().min(3),
    pic: Joi.string(),
    isAdmin: Joi.boolean(),
    phoneNumber: Joi.string().required(),
    token: Joi.string().default("")
  });

  export const searchJoi = Joi.object().keys({
    phoneNumber: Joi.string().required().min(8),
  })