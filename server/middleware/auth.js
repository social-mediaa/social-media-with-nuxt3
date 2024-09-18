import UrlPattern from "url-pattern"
import { decodeAccessToken } from "../utils/jwt"
import { getUserById } from "../db/users"


export default defineEventHandler(async(event)=>{
    console.log('22222222',parseCookies(event));
    const endPoints = [
        '/api/auth/user',
        '/api/user/tweets'
    ]
    const isHandleByThisMiddleware = endPoints.some(endPoint=>{
        const pattern = new UrlPattern (endPoint)
        console.log('2222222222222222222222222');
        
        return pattern.match(event.req.url) 
    })
console.log('33333333333333333333333');

    if(!isHandleByThisMiddleware){
        return
    }
    
    // const token = event.req.headers['authorization']?.split(' ')[1]
    const token = parseCookies(event).refresh_token

    
    const decoded = decodeAccessToken(token)
    
    console.log('55252525',decoded);
    if(!decoded){
        console.log("decoded😢😢😢");
        return sendError(event , createError({
            statusCode:401,
            statusMessage:"Unauthorized"
        }))
    }

    try {
        const userId = decoded.userId
        const user = await getUserById(userId) 
        console.log('99999999999999999999999');
        
        event.context.auth = {user}
    } catch (error) {
        return 'ddddddddddddddddddddddd'
    }
})