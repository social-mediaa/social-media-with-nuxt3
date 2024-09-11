import {prisma} from "../db/index"
import bcrypt from "bcrypt"


export const createUser = (userData)=>{
    const finallUserData = {
        ...userData,
        password:bcrypt.hashSync(userData.password, 10)
    }
    return prisma.user.create({
        data:finallUserData
    })
}


export const getUserByUsername = (username)=>{
    return prisma.user.findUnique({
        where:{
            username:username
        }
    })
}