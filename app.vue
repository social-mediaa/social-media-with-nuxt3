<template>
  <div :class="{ 'dark': darkmode }">
    <div class="bg-white dark:bg-dim-900">
      <LoadingPage v-if="isAuthLoading" />
      <!-- //Our App -->
      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

          <!-- left sidebar *******-->
          <div class="hidden  md:block xs:col-span-1 xl:col-span-2 ">
            <div class="sticky top-0">
              <SidebarLeft @on-tweet="handleOpenTweetModal" />
            </div>
          </div>

          <!-- //Main content ******* -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6">
            <router-view />

          </main>

          <!-- right sidebar *******-->
          <div class="col-span-12 hidden md:block md:col-span-3 xl:col-span-4 ">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>

        </div>
      </div>

      <!-- <AuthPaage v-else/> -->
      <AuthPage v-else />

      <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
      <!-- {{ replyTweet }} -->
        <TweetForm :user="user" @onSuccess="handleFormsuccess" :replyTo="replyTweet" showReply/>
      </UIModal>

    </div>
  </div>
</template>

<script setup>
const darkmode = ref(false)
const { useAuthToken, initAuth, useAuthLoaing } = useAuth()
const isAuthLoading = useAuthLoaing()
const { closePostTweetModal, usePostTweetModal, openPostTweetModal,useReplyTweet } = useTweets()
const user = useAuthToken()

const postTweetModal = usePostTweetModal()
// BY DEFAULT IS FALSE 👆

const emitter =useEmitter()
const replyTweet = useReplyTweet()

emitter.$on('replyTweet',(tweet)=>{
  openPostTweetModal(tweet)
})


onBeforeMount(() => {
  initAuth()
})

function handleFormsuccess(tweet) {
  closePostTweetModal()
  navigateTo({
    path:`/status/${tweet.id}`
  })
}

function handleModalClose() {
  closePostTweetModal()
}

function handleOpenTweetModal() {
  openPostTweetModal(null)
  // NULL >>>> OPEN FROM SIDE BAR HAS NO REPLY
}
</script>
