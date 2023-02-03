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
                meta :{
                }
            },
            {
                path: '/login',
                component: Login,
                meta :{
                    hideNavbar:true
                }
            },
            {
                path: '/register',
                component: Register,
                meta :{
                    hideNavbar:true
                }
            },
            {
                path: '/reserve',
                component: Reserve,
                meta :{
                }
            }
        ]
    }
)

export default router;