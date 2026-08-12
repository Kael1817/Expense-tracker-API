import { Router } from 'express'
import { createTransaction, getTransactions ,getTransactionById, updateTransaction, deleteTransaction } from "../controllers/transaction.controller.js";

const router = Router()

router.post('/transactions', createTransaction)
router.get('/transactions', getTransactions)
router.get('/transactions/:id', getTransactionById)
router.patch('/transactions/:id', updateTransaction)
router.delete('/transactions/:id', deleteTransaction)

export default router