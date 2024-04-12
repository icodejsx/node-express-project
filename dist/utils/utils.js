"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.creatTodoSchema = exports.option = exports.LoginSchema = exports.RegisterSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.RegisterSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    password: joi_1.default.string().min(6).regex(/^[a-zA-Z0-9]{3,39}$/).required(),
    confirm_password: joi_1.default.string().valid(joi_1.default.ref("password")).required().label("confirm password").messages({ 'any.only': '{{#lable}} dose not match' }),
    phoneNumber: joi_1.default.string().required(),
    age: joi_1.default.number().required(),
});
exports.LoginSchema = joi_1.default.object({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().min(6).regex(/^[a-zA-Z0-9]{3,39}$/).required(),
});
exports.option = {
    abortearly: false,
    errors: {
        wrap: {
            lable: "",
        },
    },
};
exports.creatTodoSchema = joi_1.default.object({
    description: joi_1.default.string().required,
    CompletionTriggerKind: joi_1.default.boolean().required
});
exports.updateSchema = joi_1.default.object({
    description: joi_1.default.string().required,
    CompletionTriggerKind: joi_1.default.boolean().required
});
