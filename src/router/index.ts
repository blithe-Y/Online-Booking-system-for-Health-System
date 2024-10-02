import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/info',
            component: () => import('@/pages/info/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    scrollBehavior() {
        return{
            left:0,
            top:0
        }
    }
})

