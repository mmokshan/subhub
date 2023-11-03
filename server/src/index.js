import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {userRouter} from "./routes/user-route.js"
import { profileRouter } from "./routes/profile-route.js"; 
import { seriesRouter } from "./routes/series-router.js"
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const url =process.env.URL ;

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/auth", userRouter);
app.use("/api", profileRouter);
app.use("/series",seriesRouter)

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
