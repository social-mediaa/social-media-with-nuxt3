import { userTranformer } from "~/server/transformers/user"

export default defineEventHandler(async(event)=>{

    return{
        user : userTranformer(event.context.auth?.user)
    }
})