import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const connectionInstace = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then (()=>{
            console.log(`CONNECTED to the THE DB ${DB_NAME}`)
        })
    } catch(error){
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}

export default connectDB;