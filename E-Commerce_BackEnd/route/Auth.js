import express from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const AuthRouter = express.Router()
import Jwt from "jsonwebtoken";
import upload from "../middleWare/fileUpload.js";

AuthRouter.post("/SignUp", async(req, res)=>{
    try{
        const{UserName, Email, Password, ConfirmPassword}= req.body
        if(!UserName || !Email || !Password || !ConfirmPassword ){
            return res.status(200).json({message:"All Fields Are Required"})
        }
        if(Password !== ConfirmPassword){
            return res.status(400).json({message:"Password Didn't Match"})
        }
        const existingUser = await User.findOne({$or: [{Email},{UserName}]})
        if(existingUser){
            return res.status(400).json({message: "User Already Exists"})
        }
        const saltvalue = 10
        const hashPassword=await bcrypt.hash(Password, saltvalue)
        const user = new User({
            UserName,
            Email,
            Password:hashPassword,
        });
        await user.save();
        res.status(201).json({message:"Signed Up Successfully"})
    }
    catch(err){
        console.log(err);
    }
});


AuthRouter.post("/Login", async(req, res)=>{
    try{
        const {Email, Password,UserName} = req.body;
        if(!Password || !(Email || Password)){
            return res.status(400).json({ message: "All Fields Are Required"})
        }
        const existingUser = await User.findOne({$or: [{Email}, {UserName}]})
        if(!existingUser){
            return res.status(401).json({message: "User Not Exists"})
        }
        const matchpassword = await bcrypt.compare(Password, existingUser.Password)
        if(!matchpassword){
            return res.status(402).json({message: "Invalid Password"})
        }
        const Token = Jwt.sign(
            { userid:  existingUser._id},
            process.env.JWT_SECRET_KEY
        )
            const userID = existingUser._id
        res.status(200).json({message: "Logged In Successfully", Token, userID});
    }
    catch(err){
        console.log(err);
    }
})

export default AuthRouter;