import { Transaction } from '../models/transaction.model.js'

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


export { createTransaction }