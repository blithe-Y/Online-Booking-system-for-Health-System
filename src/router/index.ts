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
            component: () => import('@/pages/info/index.vue'),
            children:[
                {
                    path:'register',
                    component:() => import('@/pages/info/register/index.vue'),
                },
                {
                    path:'detail',
                    component:() => import('@/pages/info/detail/index.vue'),
                },
                {
                    path:'notice',
                    component:() => import('@/pages/info/notice/index.vue'),
                },
                {
                    path:'close',
                    component:() => import('@/pages/info/close/index.vue'),
                },
                {
                    path:'search',
                    component:() => import('@/pages/info/search/index.vue')
                }
            ]
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

