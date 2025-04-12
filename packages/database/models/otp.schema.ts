import { IOtp } from "@workspace/types/user.types";
import mongoose, { Schema, Document, Model } from "mongoose";

const OtpSchema: Schema<IOtp> = new Schema({
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  otp: {
    type: String,
    required: true,
  },
});

// 3. Mongoose Model
export const Otp: Model<IOtp> = mongoose.model<IOtp>("Otp", OtpSchema);
