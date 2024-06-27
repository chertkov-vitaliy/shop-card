<script setup>
const props = defineProps(['key', 'price', 'rate', 'options'])
</script>


<template>
    <div class="lg:w-[23rem] bg-white w-full border-2 lg:border-r-0 border-gray-200 p-5 rounded-2xl">
        <div class="pb-3 mb-4 border-b border-gray-200">
            <div class="text-xs text-slate-800 mb-2">{{ props.rate }}</div>
            <h2 class="text-5xl m-0 font-normal">{{ props.price }} ₽</h2>
        </div>
        <div v-for="item in props.options">
            <div class="flex items-center mb-2">
                <svg width="24" height="24" fill="none" class="text-green-500 mr-1" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75">
                    </path>
                </svg>{{ item }}
            </div>
        </div>
        <div class="mt-auto w-full">
            <button
                class="bg-white rounded-xl cursor-pointer text-white py-2 border-none w-full flex items-center px-3">
                Get Free
                <svg class="ml-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M19 12H4.75"></path>
                </svg>
            </button>
            <div class="text-xs mt-3 text-slate-600 line-height-2">Literally you probably haven't heard of them jean
                shorts.</div>
        </div>
    </div>
</template>