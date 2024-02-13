
const { AppError } = require("../AppError")
const { asyncWrapper } = require("../helpers/asyncWrapper")
const { UserModel } = require("../models/UserModel");
const { comparePass } = require("../utils/bcrypt");
const { jwtSign } = require("../utils/jsonwebtoken");

const LoginController= asyncWrapper(
    async (req,res,next)=>{
      const  {email,password}=req.body;
      //confirm email and password is received
        if(!email || !password){
            throw new AppError("enter your credentials",400)
        }
         const result=await UserModel.findOne({email:email})

         //email not match
         if(!result){
            throw new AppError("Please Register Email First",400)
         }

         //check for password matching
         const same=await comparePass(password,result.password)
         if(!same){
            throw new AppError("Enter Matching Credentials",400)
         }

         const token=jwtSign({id:result._id,email:result.email,username:result.username,role:result.role})

         let expDate= new Date(Date.now()+3600000*12)
         res.status(200).cookie("token",token,{expires: expDate,httpOnly:true,sameSite:"lax"}).json({data:result,message:"Login SuccessFul.",success:true})

    }
)

module.exports={LoginController}