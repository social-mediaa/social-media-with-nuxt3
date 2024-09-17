import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt"
import { getUserById } from "../db/users"


export default defineEventHandler(async(event)=>{
    const endPoints = [
        '/api/auth/user',
        '/api/user/tweets'
    ]
    const isHandleByThisMiddleware = endPoints.some(endPoint=>{
        const pattern = new UrlPattern (endPoint)
        return pattern.match(event.req.url) 
    })

    if(!isHandleByThisMiddleware){
        return
    }

    const token = event.req.headers['authorization']?.split(' ')[1]

    const decoded = decodeAccessToken(token)

    if(!decoded){
        return sendError(event , createError({
            statusCode:401,
            statusMessage:"Unauthorized"
        }))
    }

    try {
        const userId = decoded.userId
        const user = await getUserById(userId) 
        event.context.auth = {user}
    } catch (error) {
        return
    }
})