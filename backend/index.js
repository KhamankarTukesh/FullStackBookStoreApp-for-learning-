import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import bookRoute from "./route/book.route.js";
import userRoute from"./route/user.route.js"
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
//connect to mongoDB

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected Successfully");
} catch (error) {
  console.log("MongoDB Connection Failed:", error);
}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);



app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`);
})