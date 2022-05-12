<script setup>
import SummaryProfile from "@/components/SummaryProfile.vue";
import BasicInfo from "@/components/BasicInfo.vue";
</script>

<template>
    <div class="flex">
        <div class="w-1/2 h-full flex flex-col justify-center items-center p-4">
            <h1 class="pb-1">Basic Info</h1>
            <hr class="w-1/2 border-t-2 border-gray-500 pb-6" />
            <BasicInfo />
        </div>
        <div
            class="w-1/2 h-full border-l-2 border-gray-500 text-justify flex flex-col justify-center items-center p-4"
        >
            <h3 class="pb-1">Profile Summary</h3>
            <hr class="w-1/2 border-t-2 border-gray-500 pb-6" />
            <SummaryProfile />
        </div>
    </div>
</template>
