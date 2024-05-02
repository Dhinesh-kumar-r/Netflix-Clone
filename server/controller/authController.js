import authModel from "../model/authModel.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

//Signup
const Signup = async(req,res)=>{
    const {email,password} = req.body;

    try{
        const user = await authModel.findOne({email});
        if(user){
            res.json({msg :"exist"})
        }
        else{
            const hashPassword = await bcrypt.hash(password,10)
            const userData = new authModel({email,password:hashPassword})
            await userData.save();
            res.status(200).json({msg:"added",userData})
        }
    }
    catch(err){
            res.json({msg:"signup_error"})
    }
}

//Login

const Signin =async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await authModel.findOne({email})
        if(!user){
            res.json({msg:"Please_Register"})
        }
        else{
            const matchPassword = await bcrypt.compare(password,user.password)
            if(!matchPassword){
                res.json({msg:"incorrect_Password"})
            }
            else{
                res.json({msg:"login_Sucessfully"})
            }
        }
    }
    catch(err){
        res.json({msg:"Signin error"})
    }
}


//Forgot Password
const ForgotPassword = async(req,res)=>{
    const{email} = req.body
    const user = await authModel.findOne({email})
    const token = jwt.sign({id:user._id},"secretkey",{expiresIn:"5m"})

    try{
        if(!user){
            res.json({status:false,msg:"not_exist"})
        }
        else{
                            
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dhinesh08112001@gmail.com',
      pass: 'yidf cxrd zanb fvrm '
    }
  });
  
  const text = `http://localhost:3000/reset/${token}`;

  var mailOptions = {
    from: 'dhinesh08112001@gmail.com',
    to: email,
    subject: "password reset",
    html : `<h3>Reset Password</h3>
    <p>${text}</p>`
   
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
  res.json({status:true,msg : "mail send"})
            }
        }
        catch(err){
            res.json({msg:"forget password error",err})
        }

  
}

//Reset Password

const ResetPassword = async(req,res)=>{
    const {password} = req.body;
    const{id} = req.body;

    try{
        const verified = jwt.verify(id,"secretkey")
        const userId = verified.id
        const hashPassword = await bcrypt.hash(password,10)
        await authModel.findByIdAndUpdate({_id:userId},{password:hashPassword})

    }
    catch(e){
        res.json({msg:"Reset_Error"})
    }
}

//Cookie Verification Controller
const Verify = async (req,res)=>{
    res.json({status:true,msg:"authorized"})
}


export { Signup,Signin,ForgotPassword,ResetPassword,Verify}