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
const {getTweets} = useTweets()
const searchQuery = useRoute().query.q

onBeforeMount(async()=>{
    console.log('🤭',searchQuery);
    loading.value=true
    try {
        
        const {tweets} = await getTweets({
            query:searchQuery
        })
        searchTweets.value = tweets
    } catch (error) {
        console.log(error);
    }finally{
        loading.value = false
    }
})


</script>
