import mongoose from 'mongoose'
import 'dotenv/config.js'

const connectDB = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected successfully: ${connectDB.connection.MONGODB_URI}`)
    
    } catch (error) {
        console.log(`MongoDB connection failed: `, error)
        process.exit(1)   
    }
}

export default connectDB;