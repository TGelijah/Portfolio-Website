import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AwardsView from "../views/AwardsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SocialsView from "../views/SocialsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "about",
            component: HomeView,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView,
        },
        {
            path: "/awards",
            name: "awards",
            component: AwardsView,
        },
        {
            path: "/social",
            name: "social",
            component: SocialsView,
        },
    ],
});

export default router;
