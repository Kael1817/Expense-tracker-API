import express from 'express'

const app = express()

app.use(express.json())

// routes import 
import transactionRoutes from './routes/transaction.route.js'

// routes declaration 
app.use('/api', transactionRoutes)

export default app