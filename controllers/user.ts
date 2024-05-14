import { Request, Response, response } from "express";
import { User, IUser } from "../models/users";

export const getUsers = async({}, res:Response) =>{

    const users = await User.find()

    res.json({users})
    console.log("Usuarios enviados")
}

export const getUserByUsername = async(req: Request, res: Response) =>{
    const {userName} = req.params
    const user:IUser | null = await User.findOne({userName:userName})
    if (user) {
        res.json({ user });
    } else {
        console.log("Usuario no encontrado")
        res.status(404).json({ msg: "Usuario no encontrado" });


    }
}

export const createUser = async (req:Request, res:Response) =>{

    const userData: IUser = req.body
    const {userName, password} = userData

    if (!userName || !password ) {
        res.json({
            msg:"Revisar Datos Ingresados"
        })
        return
    }

    const userEnDB = await User.findOne({userName:userName})

    if(userEnDB){
        res.json({
            msg: "Usuario existente"
        })
        return
    }

    const user = new User(
        {
            userName, password
        }
    )
    await user.save()
    res.json({
        msg: "Usuario creado con exito",
        user
    })
}