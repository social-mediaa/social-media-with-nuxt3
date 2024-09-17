import { prisma } from "../db/index";

export const createTweet = (tweetData)=>{
    return prisma.tweet.create({
        data:tweetData
    })
}