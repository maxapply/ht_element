import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: () =>
        import ('@/views/Main.vue'),
    children: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/Home')
        },
        {
            path: '/user',
            name: 'user',
            component: () =>
                import ('@/views/User')
        },
        {
            path: '/mall',
            name: 'mall',
            component: () =>
                import ('@/views/Mall')
        },
        {
            path: '/pageOne',
            name: 'pageOne',
            component: () =>
                import ('@/views/other/pageOne')
        },
        {
            path: '/pageTwo',
            name: 'pageTwo',
            component: () =>
                import ('@/views/other/pageTwo')
        }
    ]
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('@/views/login.vue')
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router