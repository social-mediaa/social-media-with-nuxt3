<template>
    <div class="flex flex-col">

        <!-- {{ search }} -->

        <!-- Search bar -->
        <div class="relative m-3">
            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <SearchIcon @click="handleSearch"/>
                </div>
            </div>
            <input v-model="search" type="text" class="flex items-center w-full pl-12 text-sm text-black font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9" placeholder="Search post">
        </div>

        <!-- //Preview Card (what`s happening)***** -->
        <SidebarRightPreviewCard title="what`s happening">

            <SidebarRightPreviewCardItem v-for="item in whatsHappeningItem">

                <div class="">
                    <h2 class="font-bold to-gray-800 text-md dark:text-white">{{ item.title }}</h2>
                    <p class="text-xs text-gray-400">{{ item.count }}</p>
                </div>

            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>

        <!-- //Preview Card (who to follow)***** -->
        <SidebarRightPreviewCard title="who to follow" >

            <SidebarRightPreviewCardItem v-for="item in whoToFollowItems">

                <div class="flex flex-row justify-between items-center p-2">
                    <div class="flex flex-row ">
                        <img class="w-10 h-10 rounded-full" :src="item.image" :alt="item.name">

                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold to-gray-900 dark:text-white">{{ item.name }}</h1>
                            <p class="text-xs to-gray-400">{{ item.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button class="px-4 py-2 bg-black text-white rounded-full font-bold text-xs dark:text-black dark:bg-white">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>
    </div>
</template>

<script setup>
import { SearchIcon } from '@heroicons/vue/solid';
const search = ref('')

const whatsHappeningItem = ref([
    {
        title: "SpaceX",
        count: "18.8k Tweets"
    },
    {
        title: "#codingIsFun",
        count: "8.8k Tweets"
    },
    {
        title: "#artforall",
        count: "1.8k Tweets"
    },
])

const whoToFollowItems = ref([
    {
        name:'Bahlool Ramesh',
        handle:"@BhlRmsh",
        image:"https://picsum.photos/200/200"
    },
    {
        name:'Bahlool Ramesh',
        handle:"@BhlRmsh",
        image:"https://picsum.photos/200/200"
    },
    {
        name:'Bahlool Ramesh',
        handle:"@BhlRmsh",
        image:"https://picsum.photos/200/200"
    },
   
])

function handleSearch(){
    useRouter().push({
        path:'/search',
        query:{
            q:search.value
        }
    })
}
</script>