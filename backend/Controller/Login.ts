import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import route from "express";
import signup from "../Models/register";
import dotenv from 'dotenv'
dotenv.config()
export const Signup=async (req: route.Request, reply: route.Response) => {
  try {
    const { email, password } = req.body;
    const isExist = await signup.findOne({email:email});
    if(isExist){
        return reply.send({
            status:200,
            message:"Email Already Exists"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser = await signup.create({
      email: email,
      password: hashedPassword,
    });

    reply.send({
      status: 200,
      data: {
        newUser,
      },
    });
  } catch (error:any) {
    throw new Error(error)
  }
}

export const Login=async (req:route.Request,reply:route.Response)=>{
    try {
        const {email,password}=req.body
        const user:{email:string,password:string}|null = await signup.findOne({email:email})
        console.log(user)
        if(!user){
            return reply.send({
                status:404,
                message:"No user Found"
            })
        }
        let isCheck:boolean;
        if(user!==null){

        isCheck = await bcrypt.compare(password,user.password)

        if(isCheck){
            const token = jwt.sign({email:email},`${process.env.JWT_KEY}`)
            return reply.send({
                status:200,
                jwt_token:token
            })
        }else{
          return reply.send({
            status:403,
            jwt_token:"Email/password is wrong"
        })
        }
        }
    } catch (error:any) {
        throw new Error(error)
    }
}
