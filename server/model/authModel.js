import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    email : String,
    password : String,
})

const authModel = mongoose.model("authentication",authSchema)

export default authModel;