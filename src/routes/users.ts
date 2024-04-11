import express, { Request, Response } from "express";
import { RegisterUser } from "../controller/userControllers";



const router = express.Router();

/* GET users listing. */
router.post('/register_user', RegisterUser)


export default router;