import {getTweetById} from '~/server/db/tweets'

export default defineEventHandler(async(event)=>{
    const {id} = event.context.params
    const tweet = await getTweetById()
    return {
        'hi':tweet
    }
})