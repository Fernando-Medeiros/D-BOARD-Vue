import { createRouter, createWebHistory } from 'vue-router'
import HomeView from 'views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: 'signin',
                    name: 'signin',
                    component: () => import('views/SignInView.vue')
                },
                {
                    path: 'signup',
                    name: 'signup',
                    component: () => import('views/SignUpView.vue')
                }
            ]
        },
        {
            path: '/password',
            children: [
                {
                    path: 'recover',
                    name: 'recover',
                    component: () => import('views/PasswordRecoverView.vue')
                },
                {
                    path: 'reset',
                    name: 'reset',
                    component: () => import('views/PasswordResetView.vue')
                },
                {
                    path: 'update',
                    name: 'update',
                    component: () => import('views/PasswordUpdateView.vue')
                }
            ]
        }
    ]
})

export default router
