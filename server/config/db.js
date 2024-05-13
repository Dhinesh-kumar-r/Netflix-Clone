import mongoose from "mongoose";

function dbConnectivity(){
    mongoose.connect(process.env.DB_LOCAL_URI)
    .then(res=>console.log("Database connected"))
    .catch(err=> console.log("not connected"))

}
export default dbConnectivity