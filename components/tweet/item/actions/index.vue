<template>
    <div class="flex justify-around items-center w-full">
        <TweetItemActionsIcon color="blue" :size="size" @on-click="emits('onCommentClick')">
            <!-- OR  v-slot:icon="{slotIcon} >>>>> :class="slotIcon.classes"👇 -->
            <template v-slot:icon="{classes}">
                <ChatIcon :class="classes"/>
            </template>
            <template v-slot:default>
                {{ props.tweet.repliesCount }}
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color="green" :size="size" >
            <template v-slot:icon="{classes}">
                <RefreshIcon :class="classes"/>
            </template>
            <template v-if="showStats" v-slot:default>
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color="red" :size="size">
            <template v-slot:icon="{classes}">
                <HeartIcon :class="classes"/>
            </template>
            <template v-if="showStats" v-slot:default >
                {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>
        <TweetItemActionsIcon color="blue" :size="size">
            <template v-slot:icon="{classes}">
                <UploadIcon :class="classes"/>
            </template>
            <template v-if="showStats" v-slot:default >
                    {{ generateRandomNumber() }}
            </template>
        </TweetItemActionsIcon>
    </div>
</template>
<script setup>
import { ChatIcon,RefreshIcon,HeartIcon,UploadIcon } from '@heroicons/vue/outline';
const emits = defineEmits('onCommentClick')
const props = defineProps({
    tweet:{
        type:Object,
        Required:true
    },
    compact:{
        type:Boolean,
        Required:false
    },
})

function generateRandomNumber (){
    return Math.floor(Math.random()*100)
}

const showStats = computed(()=>props.compact)
const size = computed(()=>props.compact? 5: 8 )
</script>