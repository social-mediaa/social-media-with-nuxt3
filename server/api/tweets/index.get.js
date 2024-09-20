import { getTweets } from "~/server/db/tweets"
import { tweetTransformer } from "~/server/transformers/tweet"

export default defineEventHandler(async(event)=>{
    const tweets = await getTweets({
        include:{
            author:true,
            mediaFiles:true
        }
    })
    return{
        tweets:tweets.map(tweetTransformer)
    }
})