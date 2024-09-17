import { userTranformer } from "~/server/transformers/user"

export default defineEventHandler(async(event)=>{
    console.log('get USERRRRRRRRR');
    return{
        user : userTranformer(event.context.auth?.user)
    }
})
