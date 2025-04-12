import mongoose from "mongoose";
import secrets from "@workspace/secrets"
export const DBConnection = () => {
    mongoose.connect(secrets.MONGODB_URL as string).then(() => {
        console.log('database connected successfully!')
    }).catch((error:any) => {
        console.log(error)
        console.log("database connection failed!")
    })
}