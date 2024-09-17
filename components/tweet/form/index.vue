<template>
    <div>
        user::{{ user }}
       <TweetFormInput :user="props.user"/>
    </div>
</template>

<script setup>
const props = defineProps({
    user:{
        type:Object,
        Required:true
    }
})
</script>