import { Router } from 'express'
import { createTransaction, getTransactions ,getTransactionById, updateTransaction } from "../controllers/transaction.controller.js";

const router = Router()

router.post('/transactions', createTransaction)
router.get('/transactions', getTransactions)
router.get('/transactions/:id', getTransactionById)
router.patch('/transactions/:id', updateTransaction)

export default router