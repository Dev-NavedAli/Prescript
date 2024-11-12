import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

dotenv.config();

//app config
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
// app.use(cors())

app.use(cors({
    origin: 'https://hoppscotch.io', // Allow requests from Hoppscotch
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // If you need to allow cookies/auth headers
  }));

connectDB().then(()=>{
    console.log('connected to db successfully');
}).catch(()=>{
    console.log('error occured');
})
connectCloudinary()

//api endpoints
app.use('/api/admin',adminRouter)

app.get("/", (req, res) => {
    res.send("API working Great");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
