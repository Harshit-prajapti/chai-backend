// XfATKk1WFIgOj37j data base password
// user name
// require('dotenv').config({path : './.env'});
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import app from './app.js';
import connectDB from './db/connect_to_db.js';

dotenv.config({
    path : './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000 , () =>{
        console.log(`Server is running is on port : ${process.env.PORT || 5000}`)
    })
})
.catch((err)=>{
    console.log("Error via connecting to the database",err)
})




// import express from 'express';

// const app = express();
// ;( async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERRR: ",error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log("APP is listening on port : ",process.env.PORT)
//         })
//     }catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()