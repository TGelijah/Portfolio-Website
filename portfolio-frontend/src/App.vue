<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="h-screen w-screen bg-gray-300 overflow-auto">
        <header class="mb-3">
            <div class="shadow-xl w-full h-1/6 bg-indigo-500">
                <nav class="flex justify-center py-3 space-x-8">
                    <RouterLink to="/">About</RouterLink>
                    <RouterLink to="/awards">Awards</RouterLink>
                    <RouterLink to="/projects">Projects</RouterLink>
                    <RouterLink to="/social">Social Handles</RouterLink>
                </nav>
            </div>
        </header>
        <body class="w-full">
            <RouterView />
        </body>
        <footer class="mt-3">
            <div class="flex justify-center w-full py-3 h-1/6 bg-indigo-500">
                <span>Built With Vue.Js & TailwindCSS</span>
            </div>
        </footer>
    </div>
</template>
