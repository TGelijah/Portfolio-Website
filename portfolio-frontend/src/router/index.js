import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AwardsView from "../views/AwardsView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import SocialsView from "../views/SocialsView.vue";
import SkillsView from "../views/SkillsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/skills",
            name: "skills",
            component: SkillsView,
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
