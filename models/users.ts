import { Model, model, Schema } from "mongoose";

export interface IUser{
    userName: string,
    password: string,
}

export const UserSchema = new Schema<IUser>({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }

})

export const User:Model<IUser> = model<IUser>("User", UserSchema)