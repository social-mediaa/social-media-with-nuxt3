import { removeRefreshToken } from "~/server/db/refreshTokens"

export default defineEventHandler(async (event)=>{
    try {
        const cookies =parseCookies(event)
        const refreshToken = cookies.refresh_token
        //REMOVE REFRESH TOKEN
        await removeRefreshToken(refreshToken)
    } catch (error) {}
    sendRefreshToken(event , null)
    return {message:'Done'}

})