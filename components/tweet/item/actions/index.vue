<template>
    <div class="flex justify-around items-center w-full">
        <TweetItemActionsIcon color="blue">
            <!-- OR  v-slot:icon="{slotIcon} >>>>> :class="slotIcon.classes"👇 -->
            <template v-slot:icon="{classes}">
                <ChatIcon :class="classes"/>
            </template>
            <template v-slot:default>
                {{ props.tweet.repliesCount }}
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color="green">
            <template v-slot:icon="{classes}">
                <RefreshIcon :class="classes"/>
            </template>
            <template v-slot:default>
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color="red">
            <template v-slot:icon="{classes}">
                <HeartIcon :class="classes"/>
            </template>
            <template v-slot:default>
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color="blue">
            <template v-slot:icon="{classes}">
                <UploadIcon :class="classes"/>
            </template>
            <template v-slot:default>
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>
    </div>
</template>
<script setup>
import { ChatIcon,RefreshIcon,HeartIcon,UploadIcon } from '@heroicons/vue/outline';

const props = defineProps({
    tweet:{
        type:Object,
        Required:true
    }
})

function generateRandomNumber (){
    return Math.floor(Math.random()*100)
}
</script>