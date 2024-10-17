<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-1 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>
        <!-- space-y-1👇 -->
        <div class="">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Bookmarks
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:name>
                    Lists
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>

            <SidebarLeftTab active>
                <template v-slot:icon>
                    <DotsCircleHorizontalIcon />
                </template>
                <template v-slot:name>
                    More
                </template>
            </SidebarLeftTab>

            <div class="hidden xl:block" @click="emits('onTweet')">
            <UIButton liquid size="lg">
                <span class="font-bold">
                    Tweet
                </span>
            </UIButton>
        </div>
        <div class="block xl:hidden" @click="emits('onTweet')">
            <UIButton>
               <div class="w-6 h-6 font-bold">
                <PencilIcon />
               </div>
            </UIButton>
        </div>

        </div>

        <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800" :class="defaultTransition"
        @click="emits('onLogout')">
            <!-- img ::{{ props.user.value }} -->
            <div class="flex flex-row ">
                <img :src="props.user.profileImage" class="w-10 h-10 rounded-full" alt="">
                <div class="flex-col hidden xl:block ml-2 ">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        name :{{ user.name }}
                    </h1>
                    <p class="text-sm text-gray-400">
                        handle:{{ user.handle }}
                    </p>
                </div>
            </div>
            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                    <ChevronDownIcon/>
                </div>
            </div>
        </div>

       
    </div>

</template>

<script setup>
const emits = defineEmits(['onTweet','onLogout'])

import { HomeIcon } from "@heroicons/vue/solid"

import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon,PencilIcon,ChevronDownIcon } from "@heroicons/vue/outline"

const { defaultTransition } = useTailwindConfig()

const props = defineProps({
    user:{
        type:Object,
        Required:true
    }
})

</script>