import express from "express"
import {Signup, Signin, ForgotPassword, ResetPassword, Verify } from "../controller/authController.js"

const authRouter = express.Router()
authRouter.route("/signup").post(Signup)
authRouter.route("/signin").post(Signin)
authRouter.route("/forgot").post(ForgotPassword)
authRouter.route("/reset").post(ResetPassword)
authRouter.route("/auth").get(Verify)


export default authRouter