<template>
    <div>
        <MainSection title="Home" :loading="loading">
            this is my homePage
        </MainSection>
    </div>
</template>

<script setup>
const loading = ref(false)
</script>