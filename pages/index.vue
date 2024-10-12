<template>
    
    <div>
       <MainSection title="Home" :loading="loading" >
           <!-- {{ user }} -->
        <head>
            <Title>Home/Twitter</Title>
        </head>
        <div class="border-b" :class="twitterBorderColor">
            <TweetForm :user="user" @onSuccess="handleFormSuccess"/>
        </div>

        <TweetListFeed :tweets="homeTweets"/>
       </MainSection>
    </div>
</template>

<script setup>
const {twitterBorderColor} =useTailwindConfig()
const homeTweets = ref([])
const loading = ref(false)
const {getTweets} = useTweets()


const {useAuthUser} = useAuth()
const user = useAuthUser()
// console.log("🚀 ~ userrrrrrrrrrr:", user)



onBeforeMount(async()=>{
    loading.value=true
    try {
        
        const {tweets} = await getTweets()
        homeTweets.value = tweets
    } catch (error) {
        console.log(error);
    }finally{
        loading.value = false
    }
})

function handleFormSuccess(tweet){
    navigateTo({
        path:`/status/${tweet.id}`
    })
}
</script>
