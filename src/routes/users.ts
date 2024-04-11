import { LoginSchema } from './../utils/utils';
import express, { Request, Response } from "express";
import { RegisterUser, Login } from "../controller/userControllers";



const router = express.Router();

/* GET users listing. */
router.post('/register_user', RegisterUser)
router.post('/login', Login)



export default router;