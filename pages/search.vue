<template>
    
    <div>
       <MainSection title="Search" :loading="loading" >
           <!-- {{ user }} -->
        <head>
            <Title>Search</Title>
        </head>
        

        <TweetListFeed :tweets="[]"/>
       </MainSection>
    </div>
</template>

<script setup>
const homeTweets = ref([])
const loading = ref(false)
const {getTweets} = useTweets()


onBeforeMount(async()=>{
    loading.value=true
    try {
        
        const {tweets} = await getTweets({
            
        })
        homeTweets.value = tweets
    } catch (error) {
        console.log(error);
    }finally{
        loading.value = false
    }
})


</script>
