import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema(
    {
        name:{type: String, required: true, unique: true},
        contact:{type: Number},
        city:{type: String},
        avatar:{type:String},
        
    }
);

export const ProfileModel = mongoose.model("profiles", UserSchema);