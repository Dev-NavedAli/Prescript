import express from "express";
import dotenv from "dotenv";

dotenv.config();

//app config
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("API working successfully");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
