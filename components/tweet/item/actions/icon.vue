<template>
    <div @click.stop.prevent="emits('onClick')" class="flex items-center text-gray-400 cursor-pointer group">
       
        <div :class="`p-2 group-hover:bg-${props.color}-100 group-hover:text-${props.color}-400 rounded-full dark:bg-opacity-20 ${defaultTransition}`">
            
            <slot name="icon" :classes="`w-${props.size} h-${props.size}`"/>
        </div>
        <span :class="`ml-1 group-hover:text-${props.color}-400`">
            <slot name="default"></slot>
        </span>
    </div>
</template>


<script setup>
 const {defaultTransition} = useTailwindConfig()
const emits = defineEmits(['onClick'])
 const props = defineProps({
    color:{
        type:String,
        Required:true
    },
    size:{
        type:Number,
        default:5
    }
 })
</script>