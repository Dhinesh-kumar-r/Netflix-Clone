import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import dbConnectivity from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import { Verification } from "./middleware/verification.js";
import movieRoute from "./routes/MovieRouter.js";
import path from "path"
const  __dirname = path.resolve() 
dotenv.config({path:path.join(__dirname,"config/config.env")});

const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use("/auth",authRouter)
app.use("/api/v1",movieRoute)

app.use(cookieParser())
app.use("/verify",Verification,authRouter)




dbConnectivity();
app.listen(process.env.PORT,()=>{
    console.log(`Server connected  on ${process.env.PORT} in ${process.env.NODE_ENV} `)
})