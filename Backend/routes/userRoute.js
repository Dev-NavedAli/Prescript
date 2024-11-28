import express from "express"
import { loginUser, registerUser, userData } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/data',userData)

export default userRouter;