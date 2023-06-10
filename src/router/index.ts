import { createRouter, createWebHistory } from 'vue-router'
import { useSessionGlobalState } from 'composable/useGlobalStates'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'signin',
            component: () => import('views/SignInView.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import('views/SignUpView.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            redirect: '',
            meta: { requiresAuth: true }
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
                    meta: { requiresAuth: true }
                }
            ]
        },

        {
            path: '/profile',
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('views/ProfileView.vue')
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: () => import('views/ProfileSettingsView.vue')
                }
            ]
        },

        {
            path: '/dashboard',
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('views/DashBoardView.vue')
                }
            ]
        },

        {
            path: '/tasks',
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/tasks',
                    name: 'tasks',
                    component: () => import('views/TasksView.vue')
                }
            ]
        }
    ]
})

router.beforeEach((to) => {
    const { requiresAuth } = to.meta

    if (requiresAuth && !useSessionGlobalState().value) return { name: 'signin' }

    if (!requiresAuth && useSessionGlobalState().value) return { name: 'profile' }

    if (to.name === 'reset') {
        const token = String(to.query?.token)
        if (token.length < 110) return { name: 'signin' }
    }

    if (to.name === 'logout') {
        useSessionGlobalState().value = null
        return { name: 'signin' }
    }
})

export default router
