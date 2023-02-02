import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Reserve from "@/pages/Reserve.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: Home,
            },
            {
                path: '/login',
                component: Login,
            },
            {
                path: '/register',
                component: Register,
            },
            {
                path: '/reserve',
                component: Reserve,
            }
        ]
    }
)

export default router;