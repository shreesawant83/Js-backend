//require('dotenv').config({ path: './env' })
import mongoose from "mongoose";
//import { DB_Name } from "./constants"
import  connectDB  from "./db/index.js"

connectDB();




/* //1st approach db connection
import express from "express";
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listning on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error : " + error);
        throw error;
    }
})() */