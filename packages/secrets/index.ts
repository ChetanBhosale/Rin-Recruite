import dotenv from 'dotenv'
dotenv.config()

const secrets = {
    MONGODB_URL : process.env.MONGODB_URL,
    AUTH_SECRET : process.env.AUTH_SECRET
}

export default secrets;
