import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB= async ()=>{
    try {
     const connectInstance =  await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
     console.log(`\n MONGODB CONNECT DB HOST ${connectInstance}`)
     console.log(`\n MONGODB CONNECT DB HOST ${connectInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB FAILED",error)
        process.exit(1)
        
    }
}

export default connectDB