import { Request, Response } from "express";
import { Expenses, IExpense } from '../models/expenses';


export const getExpenses = async({}, res:Response) =>{

    const expenses = await Expenses.find()

    res.json({expenses})
    console.log("Gastos.... ")
}

export const getExpensesByUser = async(req: Request, res: Response) =>{
    const {user} = req.params
    const expense:IExpense[] | null = await Expenses.find({user:user})
res.json({expense})
}


export const createExpense = async(req: Request, res: Response) =>{
    const expensesData:IExpense = req.body

    const {tipo, total, user} = expensesData

    if (!tipo || !total ||!user){
        res.json({
            msg: "Faltan datos necesarios para almacenar los gastos"
        })
        return
    }

    const expensesEnDB = await Expenses.findOne({tipo: tipo})

    if(expensesEnDB){
        res.json({
            msg: "Ya se ha realizado un gasto aqui"
        })
        return
    }

    const expense= new Expenses(expensesData)
    await expense.save()

    res.json({
        msg: "El gasto quedo acentado"
    })
}
