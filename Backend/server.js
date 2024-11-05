import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("API working successfully");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
