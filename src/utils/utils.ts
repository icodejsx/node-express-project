import { error } from "console";
import exp from "constants";
import Joi from "joi";
import { CompletionTriggerKind } from "typescript";

export const RegisterSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).regex(/^[a-zA-Z0-9]{3,39}$/).required(),
    confirm_password: Joi.string().valid(Joi.ref("password")).required().label("confirm password").messages({ 'any.only': '{{#lable}} dose not match' }),
    phoneNumber: Joi.string().required(),
    age: Joi.number().required(),
})


export const LoginSchema = Joi.object({
      email: Joi.string().required(),
    password: Joi.string().min(6).regex(/^[a-zA-Z0-9]{3,39}$/).required(),
})


export const option = {
    abortearly: false,
    errors: {
        wrap: {
            lable: "",
        },
    },
};

export const creatTodoSchema = Joi.object({
    description: Joi.string().required,
    CompletionTriggerKind: Joi.boolean().required


})

export const updateSchema = Joi.object({
    description: Joi.string().required,
    CompletionTriggerKind: Joi.boolean().required


})