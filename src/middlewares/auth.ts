import { error } from 'console';
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken" 
import { UserInstance } from "../model/userModel";

const jwtsecret = process.env.JWT_SECRET as string;

const auth = async (req: Request | any , res: Response, next: NextFunction) => {
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            return res.status(401).json({message: "kindle sign as a user "})
            
        }
    
        const token = authorization.slice(7, authorization.length)
        const verify = jwt.verify(token, jwtsecret)

        if (!verify) { 
            return res.status(400).json({message: " invalid token"})
        }

        const { id} = verify as {[key: string]: string}
        const user = await UserInstance.findOne({ where: { id: id } })
        
        if (!user) {
            return res.status(400).json({message: "User not found"})
        }
        req.user = verify;
        next()
    
    } catch (error) {
        console.log(error);
        
    }
}

export default auth