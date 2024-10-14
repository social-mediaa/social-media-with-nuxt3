import {prisma} from "../db/index"

export const createRefreshToken = (refreshToken)=>{
    console.log('refreshToken🌹',refreshToken);
    return prisma.refreshToken.create({
        data : refreshToken
    })
}

export const getRefreshTokenByToken = (token)=>{
    return prisma.refreshToken.findUnique({
        where:{
            token
        }
    })
}

export const removeRefreshToken = (token)=>{
    return prisma.refreshToken.delete({
        where:{
            token:token
        }
    })
}