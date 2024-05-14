import { Router } from "express";
import { createExpense, getExpenses, getExpensesByUser } from '../controllers/expenses';

export const expensesRoutes = Router()

expensesRoutes.post('/', createExpense)
expensesRoutes.get('/', getExpenses)
expensesRoutes.get('/:user', getExpensesByUser)
