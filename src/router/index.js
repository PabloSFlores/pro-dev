import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    //La ruta base
    {
        path: '/',
        redirect: '/home'
    },
    //Las rutas asociadas a los componentes
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view')
            },
        },
        //Los componentes que se renderizan en router-view
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../components/Home.vue')
            },
            {
                path: '/main',
                name: 'main',
                component: () => import('../components/Main.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../components/About.vue')
            },
            {
                path: '/rent-space',
                name: 'rent-space',
                component: () => import('../components/Rent.vue')
            },
            {
                path: '/space-info',
                name: 'space-info',
                component: () => import('../components/SpaceInfo.vue')
            },
            {
                path: '/space-catalogue',
                name: 'space-catalogue',
                component: () => import('../components/SpaceCatalogue.vue')
            },
            {
                path: '/space-offer',
                name: 'space-offer',
                component: () => import('../components/SpaceOffer.vue')
            },
            {
                path: '/space-details',
                name: 'space-details',
                component: () => import('../components/SpaceDetails.vue')
            },
        ],
    },
]

const router = new VueRouter({ routes, })
export default router;