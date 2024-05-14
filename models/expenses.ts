import { Model, model, ObjectId, Schema } from "mongoose";

export interface IExpense{
    total: number,
    tipo: string,
    user: ObjectId
}

export const ExpenseSchema = new Schema<IExpense>({
    total:{
        type: Number
    },
    tipo:{
        type: String
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const Expenses:Model<IExpense> = model<IExpense>("Expenses", ExpenseSchema)