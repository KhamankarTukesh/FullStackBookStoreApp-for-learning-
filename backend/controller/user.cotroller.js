import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup =async (req,res) =>{
    try{
        const {fullName,email,password} = req.body;
        const user =await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            fullName,
            email,
            password:hashPassword
        });

       await newUser.save();
        return res.status(201).json({message:"User created successfully",user:{
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email
        }});
    }catch(err){
        console.log("Error:"+ err.message);
        return res.status(500).json({message:"Internal server Error"});
    }
};


export const login = async (req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const ispasswordMatch = await bcrypt.compare(password,user.password);
        if(!user || !ispasswordMatch){
            return res.status(400).json({message:"Invalisd emmail or password"});
        }else{
            res.status(200).json({message:"Login Successfully",user:{
                _id:user._id,
                fullName:user.fullName,
                email:user.email}});
        }
    }catch(err){
        console.log("Error:"+err.message);
        return res.status(500).json({message:"Internal server Error"});
    }
}