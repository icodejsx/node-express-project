"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controller/userControllers");
const router = express_1.default.Router();
router.post('/register_user', userControllers_1.RegisterUser);
router.post('/login', userControllers_1.Login);
exports.default = router;
