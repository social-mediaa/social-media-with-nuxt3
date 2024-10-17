<template>
    <div>
        <!-- user::{{ user }} -->
        <div v-if="loading" class="flex justify-center items-center py-6">
            <UISpinner />
        </div>
        <div v-else>
            <TweetItem :tweet="props.replyTo" v-if="props.replyTo && props.showReply" hideActions/>
            <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit" :placeholder="props.placeholder"/>
        </div>
        <!-- replyTo::{{ replyTo }} -->
    </div>
</template>

<script setup>
const emits = defineEmits(['onSuccess'])
const loading = ref(false)
const { postTweet } = useTweets()
const props = defineProps({
    user: {
        type: Object,
        Required: true
    },
    placeholder:{
        type:String,
        default:'what`s happening ?'
    },
    replyTo:{
        type:Object,
        default:null
    },
    showReply:{
        type:Boolean,
        default:false
    }
})

async function handleFormSubmit(data) {
    console.log("🚀 ~ handleFormSubmit ~ dataaaaaaaaa😜:", data)
    loading.value = true
    try {
        const response = await postTweet({
            text: data.text,
            mediaFiles: data.mediaFiles,
            replyTo:props.replyTo?.id 
        })
        // alert(JSON.stringify(response))
        emits('onSuccess',response.tweet)
        const {SuccessToastify} = useToastify()
        SuccessToastify('Successfully Done')
    } catch (error) {
        console.log(error);
        const {ErrorToastify} = useToastify()
        ErrorToastify('Sth went wrong.try again')
    }finally{
        loading.value= false
    }
}
</script>