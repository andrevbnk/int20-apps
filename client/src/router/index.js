import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Advert from "@/views/Advert";
import authService from "../services/auth/authService";
Vue.use(Router);

const routes = [
    {
        component: () => import('../components/guard/UserDataProvider'),
        path: '',
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/About.vue'),
                // meta: {
                //     authRequired: true
                // }
            },
            {
                path: '/animal/:id',
                name: 'animal',
                component: () => import('@/views/AnimalInfo.vue'),

            },
            {
                path: '/find',
                name: 'findPet',
                component: () => import('@/views/FindPet.vue'),

            },
            {
                path: '/lost',
                name: 'lostPet',
                component: () => import('@/views/LostPet.vue'),

            },
            {
                path: '/notes',
                name: 'notesPet',
                component: () => import('@/views/NotesPet.vue'),

            },
            {
                path: '/login',
                name: 'login',
                component: () => import('@/views/LoginPage.vue'),
                meta: { guest: true }
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('@/views/RegisterPage.vue'),
                meta: { guest: true }
            },
            {
                path: '/add-advert',
                name: 'add-advert',
                component: Advert,
                // meta: { user: true }
            },
            {
                path: '/landing',
                naming: 'landing',
                component: () => import('../components/Landing/Landing.vue'),
                meta: {quest: true}
            },
            {
                path: '/donate',
                naming: 'donate',
                component: () => import('../components/Money/Donate.vue'),
                // meta: {user: true}
            },
            {
                path: '/sponsor',
                naming: 'sponsor',
                component: () => import('../components/Money/Sponsor.vue'),
                meta: {quest: true}
            }
        ]
    }
];


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const isGuestRoute = to.matched.some(record => record.meta.guest);
    const isUserRoute = to.matched.some(record => record.meta.user);

    if (isGuestRoute && authService.hasToken()) {
        next({ name: 'home' });
        return;
    }

    if (isUserRoute && !authService.hasToken()) {
        next({ name: 'login' });
        return;
    }

    if (isUserRoute && authService.hasToken()) {
        next({ path: to });
        return;
    }
    next({ path: to });
});

export default router;
