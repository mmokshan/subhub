import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  const existingUser = await UserModel.findOne({ username });

  if (existingUser) {
    return res.status(409).json({ error: "User already exists." });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new UserModel({
    username,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.status(409).json({ error: "User doesn't exist." });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: "Username or password is incorrect." });
  }
  const token = jwt.sign({ id: user._id }, process.env.secretKey);
  return res.status(200).json({ message: "User logged in successfully", token, userID: user._id });

});
export { router as userRouter };


