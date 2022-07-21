<script setup>
import SummaryProfile from "@/components/SummaryProfile.vue";
import BasicInfo from "@/components/BasicInfo.vue";
</script>

<template>
    <div class="flex w-full h-full">
        <div class="p-5 w-1/2 h-full border-r-2 border-gray-50">
            <BasicInfo />
        </div>
        <div class="p-5 w-1/2 h-full">
            <SummaryProfile />
        </div>
    </div>
</template>
