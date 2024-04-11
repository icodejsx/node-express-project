import { error } from "console";
import Joi from "joi";

export const RegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).regex(/^[a-zA-Z0-9]{3,39}$/).required(),
    confirm_password: Joi.string().valid(Joi.ref("password")).required().label("confirm password").messages({ 'any.only': '{{#lable}} dose not match' }),
    phoneNumber: Joi.string().required(),
    age: Joi.number().required(),
})






export const option = {
    abortearly: false,
    errors: {
        wrap: {
            lable: "",
        },
    },
};