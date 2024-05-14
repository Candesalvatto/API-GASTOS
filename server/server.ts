import { Express } from "express";
import { expensesDB } from "../database/config";
import { expensesRoutes } from "../routes/expenses";
import { userRoutes } from "../routes/user";
import express from 'express';

export class Server {

    app:Express

    constructor() {
        this.app = express();
        this.conectaraDB();
        this.middlewares();
        this.routes()
        
    }

async conectaraDB():Promise<void>{
    await expensesDB()
}
middlewares() :void { 
    this.app.use(express.json())
}
routes():void { 
    this.app.use("/users",userRoutes);
    this.app.use("/expenses",expensesRoutes);
}

listen():void { 
    this.app.listen(8080, () => {
      console.log("Servidor iniciado en puerto 8080")
    })
}
}