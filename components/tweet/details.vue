<template>
    <div>
        <TweetItem :tweet="props.tweet"/>
        <TweetForm placeholder="Tweet your reply"  :reply-to="props.tweet" :user="props.user" @onSuccess="handleFormSuccess"/>
        <TweetListFeed :tweets="replies"/>
        <!-- tzeeeeeeeeeeeetttttttttt ::{{ replies }} -->
    </div>
</template>

<script setup>
const props = defineProps({
    tweet:{
        type:Object,
        Required:true
    },
    user:{
        type:Object,
        Required:true
    }
})

const replies = computed(()=>props.tweet?.replies || [])
function handleFormSuccess(tweet){
    // console.log("🚀 ~ handleFormSuccess ~ tweet:🤣", tweet)
    // alert('entereddddddd')
    navigateTo({
        path:`/status/${tweet.id}`
    })
}
</script>