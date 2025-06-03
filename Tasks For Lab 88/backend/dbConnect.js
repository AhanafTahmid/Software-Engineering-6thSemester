//connect mongoDB
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const str = process.env.MONGO_URL;
// console.log("MongoDB URL:", str);
export const connectDB = async () => {
    mongoose.connect(str)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Mongo Error",err);
        })
}