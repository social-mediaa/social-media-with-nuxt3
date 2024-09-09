<template>
    <nuxt-link to="#" class="flex justify-center p-3 rounded-full w-min text-black hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">
        <div class="h-6 w-6 text-dark">
            <slot name="icon"></slot>
        </div>
        <!-- textClasses::{{textClasses  }} -->
        <div class="ml-4 text-xl hidden xl:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>

<script setup>
const {defaultTransition} = useTailwindConfig()
const props = defineProps({
    active:{
        type:Boolean,
        default:false
    }
})
const textClasses = computed(()=>props.active? 'font-semibold' : 'normal')
</script>