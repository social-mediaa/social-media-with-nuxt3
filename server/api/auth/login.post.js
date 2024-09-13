import { getUserByUsername } from "~/server/db/users"
import bcrypt from "bcrypt"
import { generateTokens , sendRefreshToken } from "~/server/utils/jwt"
import { userTranformer } from "~/server/transformers/user"
import { createRefreshToken } from "~/server/db/refreshTokens"
import { sendError } from "h3"


export default defineEventHandler (async (event)=>{
    const body = await readBody(event)

    const {username,password} = body

    if(!username || !password){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:"invalid params"
        }))
    }

    // IS the user registered✔✔
    const user = await getUserByUsername(username)
    if(!user){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:"Username pr Password is invalid"
        }))
    }

    // Compare Passwords
    const doesThePasswordMatch = await bcrypt.compare(password , user.password)

    if(!doesThePasswordMatch){
        return sendError(event , createError({
            statusCode:400,
            statusMessage:"Username pr Password is invalid"
        }))
    }

    // Generate Tokens
    // Access Token 
    // Refresh Token
    const {accessToken,refreshToken} = generateTokens()


    // Save it inside DB
    await createRefreshToken({
        token : refreshToken,
        userId:user.id
    })

    //Add http only cookie
    sendRefreshToken(event,refreshToken)

    return{
        access_token : accessToken,
        user:userTranformer(user)
        // doesThePasswordMatch
    }
})