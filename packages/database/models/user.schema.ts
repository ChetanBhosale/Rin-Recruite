import mongoose, { Schema, Document, Model } from "mongoose";
import {IUser} from '@workspace/types/user.types'
// 1. TypeScript Interface for User

// 2. Mongoose Schema
const UserSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["candidate", "recruiter"],
    required: true,
  },
  isValid: {
    type: Boolean,
    required: true,
    default: false,
  },
  tryAttempt: {
    type: Number,
  },
  OutOfOtp: {
    type: Date,
  },
});

// 3. Mongoose Model
export const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
