import validator from "validator";
import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

//api for adding doctor

const addDoctor = async (req, res) => {
  try {
    const {name,email,password,speciality,degree,experience,about,fees,address,} = req.body;
    const imageFile = req.file;
    if (!name ||!email ||!password ||!speciality ||!degree ||!experience ||!about ||!fees ||!address ||!imageFile) {
      return res.json({
        success: false,
        message: "Error something is missing",
      });
    }

    //checking user already exist or not
    const exists = await doctorModel.findOne({ email });
    if (exists) {
      return res.json({ succes: false, message: "user Already exists" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please Enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        succes: false,
        message: "Password must be 8 character or greater",
      });
    }

    //hasing doctor password

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    //upload image to cloudiary

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    const doctorData = {name, email, image: imageUrl, password: hashed_password,speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    res.json({ succes: true, message: "Doctor added" });

  } catch (error) {
    console.log(error);
    return res.json({ succes: false, message: error.message });
  }
};

//Api for Admin login
const loginAdmin = async(req,res)=>{
    try {
        const {email , password } = req.body;
        
        if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {            
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})    
        }else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        return res.json({ succes: false, message: error.message });
    }
}

//API for All Doctor list for all doctors list

const allDoctors = async(req,res)=>{
  try {

    const doctor  =  await doctorModel.find({}).select('-password') //isse password nhi aayega doctor me 
    res.json({succes:true,doctor})
    
  } catch (error) {
    return res.json({ succes: false, message: error.message })
  }
}


export { addDoctor , loginAdmin , allDoctors};
