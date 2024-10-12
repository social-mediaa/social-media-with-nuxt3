<template>
    
    <div>
       <MainSection title="Search" :loading="loading" >
           <!-- {{ user }} -->
        <head>
            <Title>Search</Title>
        </head>
        

        <TweetListFeed :tweets="searchTweets"/>
       </MainSection>
    </div>
</template>

<script setup>
const searchTweets = ref([])
const loading = ref(false)
const {getTweets:getTweetsComposable} = useTweets()
// KNOW GETTWEETS AS GETTWEETSCOMPOSABLES 👆

const searchQuery = useRoute().query.q


watch (()=>useRoute().fullPath , ()=>getTweet())



onBeforeMount(()=>{
    getTweets()
})

async function getTweets(){
    console.log('🤭',searchQuery);
    loading.value=true
    try {
        const {tweets} = await getTweetsComposable({
            query:searchQuery
        })
        searchTweets.value = tweets
    } catch (error) {
        console.log(error);
    }finally{
        loading.value = false
    }
}


</script>
