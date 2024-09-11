import { getUserByUsername } from "~/server/db/users"
import bcrypt from "bcrypt"
import { generateTokens } from "~/server/utils/jwt"
import { userTranformer } from "~/server/transformers/user"


export default defineEventHandler (async (event)=>{
    const body = await useBody(event)

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


    // Generate Tokens
    // Access Token 
    // Refresh Token
    const {accessToken,refreshToken} = generateTokens()


    // Save it inside the DB

    //Add http only cookie

    return{
        access_token : accessToken,
        user:userTranformer
        // doesThePasswordMatch
    }
})