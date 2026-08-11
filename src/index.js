import connectDB from "./config/database.js"
import app from "./app.js"
import 'dotenv/config.js'

const startServer = async () => {
    try {
        await connectDB()

        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.log(`MongoDB connection failed: `, error)
    }
}

startServer()