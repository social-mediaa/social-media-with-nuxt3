<template>
    <div>
        <!-- user::{{ user }} -->
        <div v-if="loading" class="flex justify-center items-center py-6">
            <UISpinner />
        </div>
        <div v-else>
            <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit" />
        </div>
    </div>
</template>

<script setup>
const loading = ref(false)
const { postTweet } = useTweets()
const props = defineProps({
    user: {
        type: Object,
        Required: true
    }
})

async function handleFormSubmit(data) {
    loading.value = true
    try {
        const response = await postTweet({
            text: data.text,
            mediaFiles: data.mediaFiles
        })
        alert(JSON.stringify(response))
    } catch (error) {
        console.log(error);
    }finally{
        loading.value= false
    }
}
</script>