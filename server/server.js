import express from "express"
import cors from "cors";
import dbConnectivity from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import { Verification } from "./middleware/verification.js";


const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use("/auth",authRouter)
app.use(cookieParser())
app.use("/verify",Verification,authRouter)




dbConnectivity();
app.listen(5998,()=>{
    console.log("Server connected  on 5998")
})