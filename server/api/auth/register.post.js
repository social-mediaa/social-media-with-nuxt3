import { sendError } from "h3"

export default defineEventHandler(async (event)=>{
    const body = await useBody()
    const {userName, email, password, repeatPassword, name} = body
})

if(!userName || !email || !password || !repeatPassword || !name){
    return sendError(event , createError({
        statusCode:400,
        statusMessage:"invalid params"
    }))
    console.log('object');
}

return{
    body:body
}