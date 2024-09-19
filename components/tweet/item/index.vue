<template>
    <div>
        
        <TweetItemHeader :tweet="props.tweet"/>
        <div class="ml-16">
            <p class="flex flex-shrink w-auto font-medium text-gray-800 dark:text-white">
                {{ props.tweet.text }}
            </p>

            <div v-for="image in tweet.mediaFiles" :key="image.id" class="flex my-3 mr-2 border-2 rounded-2xl" :class="tweeterBorderColor">
                <img :src="image.url" alt="" class="w-full rounded-2xl">
            </div>

            <div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

const {tweeterBorderColor}= useTailwindConfig()
const props = defineProps({
    tweet:{
        type:Object,
        Required:true
    }
})
</script>