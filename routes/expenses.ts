import { Router } from "express";
import { createExpense, getExpenses, getExpensesByUser, deleteExpense } from '../controllers/expenses';

export const expensesRoutes = Router()

expensesRoutes.post('/', createExpense)
expensesRoutes.get('/', getExpenses)
expensesRoutes.get('/:user', getExpensesByUser)
expensesRoutes.get('/:tipo', deleteExpense)
