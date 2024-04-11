import { Request, Response } from "express";
import { RegisterSchema, option } from "../utils/utils";
import { UserInstance } from "../model/userModel";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs"


export const RegisterUser =  async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password, confirm_password, phoneNumber, age } = req.body
    const uuivv4 = uuidv4();
    
    // validate user 
    const validateUser = RegisterSchema.validate(req.body, )
    if (validateUser.error) {
    res.status(400).json({Error: validateUser.error.details[0].message  })
    }

    // Hashing password
    const passwordHash = await bcrypt.hash(password, await bcrypt.genSalt(12))

    const User = await UserInstance.findOne({ where: { email: email } })
    
    if (!User) {
      const newUser = await UserInstance.create({
        id: uuivv4,
        firstName,
        lastName,
        email,
        passWord:passwordHash,
        phoneNumber,
        age
      })
      res.status(200).json({
        message: "Registeration Successfully",
        newUser
      })
    }
    
    res.status(400).json({
      message:"user already exists"
    })

    
  }catch (error) {
    
  }
}