<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div
        class="overflow-auto w-screen h-screen bg-cover bg-fixed bg-[url('./assets/bg.jpg')] p-3 space-y-2 bg-blend-overlay bg-gray-600 text-slate-100"
    >
        <header class="w-full h-[8%] test select-none shadow-xl rounded-md">
            <nav
                class="flex justify-center py-3 space-x-10 text-base tracking-wider uppercase"
            >
                <RouterLink to="/">About</RouterLink>
                <RouterLink to="/awards">Awards</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/social">Social Handles</RouterLink>
            </nav>
        </header>
        <body class="w-full test h-[84%] py-2 rounded-md">
            <RouterView />
        </body>
        <footer class="w-full test select-none h-[8%] shadow-xl rounded-md">
            <div class="flex justify-center py-3 text-base tracking-wide">
                <span>Built With Vue.Js & Designed With TailwindCSS</span>
            </div>
        </footer>
    </div>
</template>

<style>
.test {
    background-image: linear-gradient(
        to left,
        rgba(228, 228, 228, 0.1) -26.48%,
        rgba(228, 228, 228, 0.27) 73.52%
    );
}
</style>
