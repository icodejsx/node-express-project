import { UserAttribute } from './../model/userModel';
import { updateSchema, creatTodoSchema } from './../utils/utils';
import { Request, Response } from "express";
import { TodoInstance } from '../model/todoModel';

export const createTodo = async (req:Request | any, res:Response) => {
    try {
        const { description, completed } = req.body
        const verify = req.user

        const {id} = verify as {[key: string]: string}

        
        // validate todo input

        const validateUser = creatTodoSchema.validate(req.body, option)

        if (validateUser.error) {
            res.status(400).json({Error: validateUser.error.details[0].message})
        }

        const newTodo = await TodoInstance.create({
            userId: id,
            description,

        })


    } catch (error) {
        console.log(error)
    }
}
