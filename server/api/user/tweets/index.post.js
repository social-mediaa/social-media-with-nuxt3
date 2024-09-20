import formidable from "formidable"
import { createTweet } from "~/server/db/tweets"
import { tweetTransformer } from "~/server/transformers/tweet"
import { createMediaFile } from "~/server/db/mediaFiles"
import { uploadToCloudinary } from "../../../utils/cloudinary"


export default defineEventHandler(async(event)=>{

    const form = formidable({})
    console.log("🚀 ~ defineEventHandler ~ formmmmmmm:", form)

    const response = await new Promise((resolve,reject)=>{
        form.parse(event.req,(err,fields,files)=>{
            if (err) {
                reject(err)
            }
            resolve({fields,files})
        })
    })

   

    const {fields, files } = response
    const userId = event.context?.auth?.user?.id

    const tweetData = {
        text :fields.text.join(),
        // TEST it 👆👆👆👆👆👆
        authorId:userId
    }
    // const files2 = files.image[0]
    

    const tweet = await createTweet(tweetData)

    const filePromises = Object.keys(files).map(async key =>{

        const file = files[key][0]
        const cloudinaryResource = await uploadToCloudinary(file.filepath)
        console.log("🚀 ~ filePromises ~ response:", response)

        return createMediaFile({
            url:cloudinaryResource.secure_url,
            providerPublicId:cloudinaryResource.public_id,
            userId:userId,
            tweetId:tweet.id
        })
    })

    await Promise.all(filePromises)
    return{
        tweet:tweetTransformer(tweet)
        
    }
  
})