<template>
    <div class="border-x" :class="twitterBorderColor">
        <div class="sticky top-0 py-3 px-4 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ props.title }}</h2>
        </div>

        <div v-if="props.loading" class="flex justify-center items-center p-4 border-b" :class="twitterBorderColor">
            <UISpinner/> 
        </div>

        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const {twitterBorderColor} = useTailwindConfig()
const props = defineProps({
    title: {
        type: String,
        Required: true
    },
    loading: {
        type: Boolean,
        Required: true
    }
})
</script>