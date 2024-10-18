<template>
    <div class="flex flex-col">

        <!-- {{ search }} -->

        <!-- Search bar -->
        <div class="relative mt-2 flex">
            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <SearchIcon @click="handleSearch" />
                </div>
            </div>
            <input v-model="search" type="text"
                class="flex items-center  pl-12 text-sm text-black font-normal dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
                placeholder="Search post">

            <div class="checkbox-wrapper-54 ml-1" @click.prevent="handleToggleDarkMode2">
                <label class="switch " >
                    <input type="checkbox">
                    <span class="slider border border-blue-300"></span>
                </label>
            </div>
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
        <SidebarRightPreviewCard title="who to follow">

            <SidebarRightPreviewCardItem v-for="item in whoToFollowItems">

                <div class="flex flex-row justify-between items-center p-1">
                    <div class="flex flex-row ">
                        <img class="w-10 h-10 rounded-full" :src="item.image" :alt="item.name">

                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold to-gray-900 dark:text-white">{{ item.name }}</h1>
                            <p class="text-xs to-gray-400">{{ item.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button
                            class="px-4 py-2 bg-black text-white rounded-full font-bold text-xs dark:text-black dark:bg-white">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>

        </SidebarRightPreviewCard>

        <footer>
            <ul class="mx-2 my-1 text-xs text-gray-500 ">
                <li class="inline-block mx-2 ">
                    <a href="#" class="hover:underline" @click.prevent="handleToggleDarkMode">Dark Mode</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class="hover:underline">Cookie Policy</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class="hover:underline">Accessability</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class="hover:underline">Ads info</a>
                </li>
                <li class="inline-block mx-2 ">
                    <a href="#" class="hover:underline">More</a>
                </li>
                <li class="inline-block mx-2 ">
                    @ David 2024
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import { SearchIcon } from '@heroicons/vue/solid';
const search = ref('')
const emitter = useEmitter()


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
        name: 'Bahlool Ramesh',
        handle: "@BhlRmsh",
        image: "https://picsum.photos/200/200"
    },
    {
        name: 'Bahlool Ramesh',
        handle: "@BhlRmsh",
        image: "https://picsum.photos/200/200"
    },
    {
        name: 'Bahlool Ramesh',
        handle: "@BhlRmsh",
        image: "https://picsum.photos/200/200"
    },

])

function handleSearch() {
    useRouter().push({
        path: '/search',
        query: {
            q: search.value
        }
    })
}

function handleToggleDarkMode() {
    emitter.$emit('toggleDarkMode')
}

function handleToggleDarkMode2(){
    console.log('ggggggggggggg');
}
</script>

<style scoped>
.checkbox-wrapper-54 input[type="checkbox"] {
      visibility: hidden;
      display: none;
    }
  
    .checkbox-wrapper-54 *,
    .checkbox-wrapper-54 ::after,
    .checkbox-wrapper-54 ::before {
      box-sizing: border-box;
    }
  
    /* The switch - the box around the slider */
    .checkbox-wrapper-54 .switch {
      --width-of-switch: 3.5em;
      --height-of-switch: 2em;
      /* size of sliding icon -- sun and moon */
      --size-of-icon: 1.4em;
      /* it is like a inline-padding of switch */
      --slider-offset: 0.3em;
      position: relative;
      width: var(--width-of-switch);
      height: var(--height-of-switch);
      display: inline-block;
    }
  
    /* The slider */
    .checkbox-wrapper-54 .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f4f4f5;
      transition: .4s;
      border-radius: 30px;
    }
  
    .checkbox-wrapper-54 .slider:before {
      position: absolute;
      content: "";
      height: var(--size-of-icon,1.4em);
      width: var(--size-of-icon,1.4em);
      border-radius: 20px;
      left: var(--slider-offset,0.3em);
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(40deg,#00a2ff,#e8f713b9 70%);
      ;
     transition: .4s;
    }
  
    .checkbox-wrapper-54 input:checked + .slider {
      background-color: #303136;
    }
  
    .checkbox-wrapper-54 input:checked + .slider:before {
      left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
      background: #303136;
      /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
      box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
    }
</style>