// router.js 看，只写通用的页面是不是很清爽
import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('@/views/Login.vue');
const Forbidden = () => import('@/views/403.vue');
const Dashboard = () => import('@/views/Dashboard.vue');
const NotFound = () => import('@/views/404.vue');

Vue.use(Router);

const antRouters = [{
    path: '/',
    redirect: '/dashboard'
}, {
    path: '/login',
    component: Login
}, {
    path: '/403',
    component: Forbidden
}, {
    path: '/404',
    component: NotFound
},
{
    path: '/dashboard',
    component: Dashboard,
}
]
let router = new Router({
    mode: 'hash',
    routes:antRouters
});

export default router