import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

//app config
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
// app.use(cors())


const allowedOrigins = [
    'https://prescripto-frontend-psi-beige.vercel.app',
    'https://prescripto-admin-taupe.vercel.app' // Replace with your second URL
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error('Not allowed by CORS')); // Reject the request
      }
    },
  };
  
  app.use(cors(corsOptions))

connectDB().then(()=>{
    console.log('connected to db successfully');
}).catch(()=>{
    console.log('error occured');
})
connectCloudinary()

//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
    res.send("API working Great");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
