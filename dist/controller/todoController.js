"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const utils_1 = require("./../utils/utils");
const todoModel_1 = require("../model/todoModel");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, completed } = req.body;
        const verify = req.user;
        const { id } = verify;
        const validateUser = utils_1.creatTodoSchema.validate(req.body, option);
        if (validateUser.error) {
            res.status(400).json({ Error: validateUser.error.details[0].message });
        }
        const newTodo = yield todoModel_1.TodoInstance.create({
            userId: id,
            description,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTodo = createTodo;
