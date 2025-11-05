import mongoose from "mongoose"
import {ENV} from "./env.js"

const connectDb = async() => {
    try {
    await mongoose.connect(ENV.MONGODB_URL)
    console.log("Database Connecting Successfully!!");
    } catch (error) {
        console.log("error occurred", error);
        process.exit(1)
    }
}

export default connectDb;