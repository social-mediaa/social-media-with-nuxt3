export default ()=>{
    const postTweet = (formData)=>{
        console.log('DATAAAAAAA',formData);
        const form = new FormData()
        form.append('text',formData.text)
        form.append('replyTo',formData.replyTo)

        formData.mediaFiles.forEach((mediaFile,index)=>{
            form.append("media_file_"+index , mediaFile)
        })
        return useFetchApi('/api/user/tweets',{
            method:'POST',
            body:form
        })
    }

    const getTweets = (params = {})=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const response = await useFetchApi('/api/tweets',{
                    method:'GET',
                    params
                })
                // console.log(response);
                resolve(response)
            } catch (error) {
                reject(error)                
            }
        })
    }

    const getTweetById = (tweetId)=>{
        return new Promise(async(resolve,reject)=>{
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`)
                resolve(response)
            } catch (error) {
               reject(error) 
            }
        })
    }


    const usePostTweetModal = ()=>useState('post_tweet_modal',()=>false)
    const useReplyTweet = ()=>useState('reply_tweet',()=>null)
    // HELPER METHOD****👇
    const closePostTweetModal = ()=>{
        const postTweetModal = usePostTweetModal()
        postTweetModal.value= false
    }

    const setReplyTo = (tweet)=>{
        const replyTweet = useReplyTweet()
        replyTweet.value = tweet
    }
    const openPostTweetModal = (tweet=null)=>{
        const postTweetModal = usePostTweetModal()
        postTweetModal.value= true
        setReplyTo(tweet)
    }
     // HELPER METHOD****👆

    return{
        postTweet,
        getTweets,
        getTweetById,
        closePostTweetModal,
        usePostTweetModal,
        openPostTweetModal,
        useReplyTweet
    }
}