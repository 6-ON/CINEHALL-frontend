import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Reserve from "@/pages/Reserve.vue";
import Films from "@/pages/Films.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                name : 'home',
                path: '/',
                component: Home,
                meta: {
                    navbarFixed: 'fixed top-0'
                }
            },
            {
                name : 'login',
                path: '/login',
                component: Login,
                meta: {
                    hideNavbar: true
                }
            },
            {
                name : 'register',
                path: '/register',
                component: Register,
                meta: {
                    hideNavbar: true
                }
            },
            {
                name : 'films',
                path: '/films',
                component: Films,
                meta: {}
            },
            {
                name : 'reserve',
                path: '/reserve',
                component: Reserve,
                meta: {
                    navbarFixed: 'fixed top-0'

                }
            }
        ]
    }
)

export default router;