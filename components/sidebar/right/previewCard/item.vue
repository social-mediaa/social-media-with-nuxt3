<template>
    <div class="p-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 border-b"  :class="wrapperClass">
        <slot></slot>
    </div>
</template>


<script setup>
const {defaultTransition,twitterBorderColor} = useTailwindConfig()
const wrapperClass = computed(()=>`${defaultTransition} ${twitterBorderColor}`)
</script>