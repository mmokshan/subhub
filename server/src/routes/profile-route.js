// routes/profile.js
import express from 'express';
import {ProfileModel }from '../models/profile.js';
const router = express.Router();

router.post('/add-profile-details', addProfile);

export async function addProfile(req, res) {
    const { name, contact, city, avatar } = req.body;
    const newProfile = new ProfileModel({
        name,
        contact,
        city,
        avatar
      });
    
      try {
        await newProfile.save(); 
        res.status(201).json({ message: "Profile Updated successfully" });
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
}

router.get('/profile-details', getProfile);
export async function getProfile(req, res) {
    
    try {
        
    } catch (error) {
        
    }
}









export { router as profileRouter }; // Export the router as profileRouter


