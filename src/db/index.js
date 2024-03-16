import mongoose from "mongoose";
import  DB_Name  from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log("MongoDb connected ! and DB Host is ",connectionInstance);
    } catch (error) {
        console.log("MongoDb Connection error", error);
        process.exit(1);//exit application must read
    }
}

export default connectDB;