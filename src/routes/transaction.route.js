import { Router } from 'express'
import { createTransaction, getTransactions ,getTransactionById } from "../controllers/transaction.controller.js";

const router = Router()

router.post('/transactions', createTransaction)
router.get('/transactions', getTransactions)
router.get('/transactions/:id', getTransactionById)

export default router