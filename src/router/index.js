import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/example',
        component: () => import('../pages/Example.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router