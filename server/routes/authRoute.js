import express from "express"
import {Signup, Signin, ForgotPassword, ResetPassword, Verify, Logout, GetUserData } from "../controller/authController.js"

const authRouter = express.Router()
authRouter.route("/signup").post(Signup)
authRouter.route("/signin").post(Signin)
authRouter.route("/forgot").post(ForgotPassword)
authRouter.route("/reset/:id").post(ResetPassword)
authRouter.route("/auth").get(Verify)
authRouter.route("/logout").get(Logout)
authRouter.route("/userdata").get(GetUserData)


export default authRouter