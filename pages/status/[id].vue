<template>
    <div>
        <MainSection title="Tweet" :loading="loading">

            <head>
                <Title></Title>
            </head>

            <TweetDetails :tweet="tweet" :user="user"/>

        </MainSection>
    </div>
</template>

<script setup>

const loading = ref(false)
const tweet = ref(null)
const {getTweetById} = useTweets()
const {useAuthUser}=useAuth()
const user = useAuthUser()

watch (()=>useRoute().fullPath , ()=>getTweet())
// IF URL CHANGES, THE CONTENT MUST BE UPDATED👆

function getTweetIdFromRoute(){
    return useRoute().params.id
}

async function getTweet(){
    loading.value = true
    try {
        const response = await getTweetById(getTweetIdFromRoute())
        console.log('response:::',response);
        tweet.value = response.Tweet
    } catch (error) {
        console.log(error);
    }finally{
        loading.value = false
    }
}

onBeforeMount(()=>{
    getTweet()
})
</script>