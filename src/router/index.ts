import { createRouter, createWebHistory } from 'vue-router'
import SessionStorage from 'utils/session.storage'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            children: [
                {
                    path: '',
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
                    component: () => import('views/PasswordUpdateView.vue'),
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/profile',
            meta: {
                requiresAuth: true
            },
            children: [
                { path: '', name: 'profile', component: () => import('views/ProfileView.vue') }
            ]
        }
    ]
})

router.beforeEach((to) => {
    const { requiresAuth } = to.meta

    if (to.name === 'reset') {
        const token = String(to.query?.token)
        if (token.length < 110) return { name: 'signin' }
    }

    if (requiresAuth && !SessionStorage.getToken()) return { name: 'signin' }

    if (!requiresAuth && SessionStorage.getToken()) return { name: 'profile' }
})

export default router
