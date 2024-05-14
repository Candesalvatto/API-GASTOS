import { Router } from "express";
import { getUsers, getUserByUsername, createUser } from '../controllers/user';

export const userRoutes = Router()

userRoutes.get('/', getUsers);
userRoutes.get('/:userName', getUserByUsername);
userRoutes.post('/', createUser)