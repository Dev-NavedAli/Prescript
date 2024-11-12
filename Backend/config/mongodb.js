import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dbUrl = process.env.MONGODB_URL

const connectDb = async()=>{
    console.log(dbUrl);
    
    await mongoose.connect(`${dbUrl}/prescripto`)
}

export default connectDb;