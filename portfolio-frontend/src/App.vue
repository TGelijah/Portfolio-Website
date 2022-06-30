<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div
        class="overflow-auto w-screen h-screen bg-cover bg-fixed bg-[url('./assets/bg.jpg')] p-5 bg-blend-overlay bg-gray-700 text-slate-50"
    >
        <div class="w-full h-full rounded-xl shadow-lg test">
            <header class="w-full h-[8%] select-none">
                <nav class="flex p-1 w-full h-full uppercase">
                    <div
                        class="w-[50%] flex justify-center font-semibold tracking-wide text-[23px] h-full"
                    >
                        <RouterLink to="/" class="hover:text-indigo-400"
                            >Glorious E<span class="tracking-[-5px]">li</span>
                            jah</RouterLink
                        >
                    </div>
                    <div
                        class="space-x-10 flex justify-center font-bold w-[50%] text-base pt-1 h-full tracking-wider"
                    >
                        <RouterLink to="/skills" class="hover:text-indigo-400"
                            >Skills</RouterLink
                        >
                        <RouterLink to="/awards" class="hover:text-indigo-400"
                            >Awards</RouterLink
                        >
                        <RouterLink to="/projects" class="hover:text-indigo-400"
                            >Projects</RouterLink
                        >
                        <RouterLink to="/social" class="hover:text-indigo-400"
                            >Social</RouterLink
                        >
                    </div>
                </nav>
            </header>
            <body class="w-full h-[84%] text-center py-2">
                <RouterView />
            </body>
            <footer class="w-full select-none h-[8%]">
                <div class="flex justify-center py-3 text-base tracking-wide">
                    <span>Built With Vue.Js & Designed With TailwindCSS</span>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>
.test {
    background-image: linear-gradient(
        to right,
        rgba(228, 228, 228, 0.25) -26.48%,
        rgba(228, 228, 228, 0.15) 73.52%
    );
}
</style>
