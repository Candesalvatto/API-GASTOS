import mongoose from "mongoose";

export const expensesDB = async():Promise<void> =>{
    try{
        await mongoose.connect("mongodb+srv://entreganucba:apigastos@api-gastos.onjeema.mongodb.net/")
        console.log('BD conectada')
    }
    catch(error){
        console.log(error)
        throw new Error ('No se esta conectando a la BD')
    }
}