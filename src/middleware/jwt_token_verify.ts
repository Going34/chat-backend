import  jwt  from "jsonwebtoken";
import { Request, Response } from "express";
import * as dotenv from 'dotenv';
dotenv.config();

export const verifyToken = async (req:Request , res:Response , next:any) => {
    const token = req.body.token || req.query.token || req.headers['authorization']
    if(token){
        try {
        if (process.env.JWT_TOKEN) {
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
         req.body['user'] = decode
        }
        } catch (error) {
            res.send('In_valid Token').status(400)
        }
        return next()
    }
    else{
        res.status(400).send({success:false , msg:"A Toekn is required for authorization"})

    }
}