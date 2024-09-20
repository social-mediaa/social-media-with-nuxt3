import { mediaFileTransformer } from "./mediaFiles"
import { userTranformer } from "./user"
import human from 'human-time'


export const tweetTransformer = ((tweet)=>{
    return{
        id:tweet.id,
        text:tweet.text,
        mediaFiles:!!tweet.mediaFiles? tweet.mediaFiles.map(mediaFileTransformer): [],
        author:!!tweet.author ? userTranformer(tweet.author):null,
        replies:!!tweet.replies? tweet.replies.map(tweetTransformer): [],
        replyTo:!!tweet.replyTo? tweetTransformer(tweet.replyTo):null,
        repliesCount :!!tweet.replies? tweet.replies.length : 0,
        postedAtHuman:human(tweet.createdAt)
    }
})