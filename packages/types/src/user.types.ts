import { Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    password?: string;
    role: "candidate" | "recruiter";
    isValid: boolean;
    tryAttempt?: number;
    OutOfOtp?: Date;
}

  
export interface IOtp extends Document {
    email: string;
    otp: string;
}