import { Request, Response } from "express";
import { RegisterSchema, option, LoginSchema } from "../utils/utils";
import { UserInstance } from "../model/userModel";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const jwtsecret = process.env.JWT_SECRET as string

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
     return res.status(200).json({
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

// Loggin in User 
export const Login = async (req: Request, res: Response )=> {
  try {
    const { email, password } = req.body
    const uuivv4 = uuidv4();
    // validate user 
    const validateUser = LoginSchema.validate(req.body)
    if (validateUser.error) {
    return res.status(400).json({Error: validateUser.error.details[0].message  })
    }

    const User = await UserInstance.findOne({ where: { email: email } }) as unknown as { [key: string]: string }
    
    if (!User) {
      return res.status(400).json({
     error: "user not found"
      })
      
    }

    const { id } = User;
    // console.log(id)

    // compare password 
    const token = jwt.sign({ id }, jwtsecret, { expiresIn: '20day' });
    // console.log(token)

    // compare password 
    const validUser = await bcrypt.compare(password, User.passWord)

    console.log(validUser)
    

    if (!validUser) {
      return res.status(400).json({
        error: 'Login not Successful '
      })
    }
    return res.status(200).json({
      msg: 'Login  Successful ',
      User,
      token
    })

  }catch (error) {
    console.log('something went wrong with login')
  }
  
}