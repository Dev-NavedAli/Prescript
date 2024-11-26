//Api for register user
import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt, { genSalt } from "bcrypt";
import jwt from "jsonwebtoken";



const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
      res.json({ success: false, message: "missing details" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "email is not valid" });
    }

    //validating the strength of password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be 8 character long",
      });
    }
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already exist" });
    }

    //hashing the password

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashed_password,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Api for user Login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({ success: true, token });
  } else {
    res.json({ success: false, message: "Invalid Credentials" });
  }
  } catch (error) {
    res.json({success:false,message:error.message})
    console.log(error);
    
  }
  
};

export { registerUser, loginUser };
