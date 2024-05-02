import mongoose from "mongoose";

function dbConnectivity(){
    mongoose.connect("mongodb://localhost:27017/Netflix")
    .then(res=>console.log("Database connected"))
    .catch(err=> console.log("not connected"))

}
export default dbConnectivity