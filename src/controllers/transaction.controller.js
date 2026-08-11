import { Transaction } from '../models/transaction.model.js'

// Create transaction
const createTransaction = async (req, res) => {
    try{
        const { title, type, amount, category, description } = req.body
        if(!title || !type || !amount || !category){
            return res.status(400).json({
                message: "All fields should not be empty"
            })
        }

        const transaction = await Transaction.create({ title, type, amount, category, description })
        return res.status(201).json({
            message: "Transaction is successfully recorded"
        })

    } catch(error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

// Get all transactions 
const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find()
        res.status(200).json(transactions)

    } catch(error){
        res.status(500).json({ message: "Internal server error", error })
    }
}

// Get transaction by ID
const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params

        if(!id){
            return res.status(404).json({ message: "Transaction is required" })
        }

        const transaction = await Transaction.findById(id)

        if(!transaction){
            return res.status(404).json({ message: "Transaction is not found" })
        }

        return res.status(200).json({transaction})
    } catch(error){
        res.status(500).json({ message: "Internal server error", error })
    }
}

export { createTransaction, getTransactions, getTransactionById }