import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/mongodb.js";

dotenv.config();

//app config
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cors())

connectDB().then(()=>{
    console.log('connected to db successfully');
}).catch(()=>{
    console.log('error occured');
    
})

app.get("/", (req, res) => {
    res.send("API working Great");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
