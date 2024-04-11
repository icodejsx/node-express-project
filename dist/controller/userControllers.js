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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.RegisterUser = void 0;
const utils_1 = require("../utils/utils");
const userModel_1 = require("../model/userModel");
const uuid_1 = require("uuid");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtsecret = process.env.JWT_SECRET;
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, confirm_password, phoneNumber, age } = req.body;
        const uuivv4 = (0, uuid_1.v4)();
        const validateUser = utils_1.RegisterSchema.validate(req.body);
        if (validateUser.error) {
            res.status(400).json({ Error: validateUser.error.details[0].message });
        }
        const passwordHash = yield bcryptjs_1.default.hash(password, yield bcryptjs_1.default.genSalt(12));
        const User = yield userModel_1.UserInstance.findOne({ where: { email: email } });
        if (!User) {
            const newUser = yield userModel_1.UserInstance.create({
                id: uuivv4,
                firstName,
                lastName,
                email,
                passWord: passwordHash,
                phoneNumber,
                age
            });
            return res.status(200).json({
                message: "Registeration Successfully",
                newUser
            });
        }
        res.status(400).json({
            message: "user already exists"
        });
    }
    catch (error) {
    }
});
exports.RegisterUser = RegisterUser;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const uuivv4 = (0, uuid_1.v4)();
        const validateUser = utils_1.LoginSchema.validate(req.body);
        if (validateUser.error) {
            return res.status(400).json({ Error: validateUser.error.details[0].message });
        }
        const User = yield userModel_1.UserInstance.findOne({ where: { email: email } });
        if (!User) {
            return res.status(400).json({
                error: "user not found"
            });
        }
        const { id } = User;
        const token = jsonwebtoken_1.default.sign({ id }, jwtsecret, { expiresIn: '20day' });
        const validUser = yield bcryptjs_1.default.compare(password, User.passWord);
        console.log(validUser);
        if (!validUser) {
            return res.status(400).json({
                error: 'Login not Successful '
            });
        }
        return res.status(200).json({
            msg: 'Login  Successful ',
            User,
            token
        });
    }
    catch (error) {
        console.log('something went wrong with login');
    }
});
exports.Login = Login;
