<template>
    
    <div>
       <MainSection title="Home" :loading="loading" :user="user">
        
        <!-- {{ user }} -->

        <TweetForm/>
        
       </MainSection>
    </div>
</template>

<script setup>
const loading = ref(false)
const {useAuthUser} = useAuth()
const user = useAuthUser()
console.log("🚀 ~ userrrrrrrrrrr:", user)
</script>
