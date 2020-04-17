// router.js 看，只写通用的页面是不是很清爽
import Vue from 'vue';
import Router from 'vue-router';
// import routeMap from '@/router/component.js';

const Login = () => import('@/views/Login.vue');
const Forbidden = () => import('@/views/403.vue');
const Dashboard = () => import('@/views/Dashboard.vue');
const NotFound = () => import('@/views/404.vue');
const Home = () => import('@/views/Home.vue');
const demo1 = () => import('@/views/demo1.vue');
const demo2 = () => import('@/views/demo2.vue');
const demo3 = () => import('@/views/demo3.vue');
const demo4 = () => import('@/views/demo4.vue');
const demo5 = () => import('@/views/demo5.vue');
const demo6 = () => import('@/views/demo6.vue');
const demo7 = () => import('@/views/demo7.vue');
const demo8 = () => import('@/views/demo8.vue');
const demo9 = () => import('@/views/demo9.vue');
const demo10 = () => import('@/views/demo10.vue');

Vue.use(Router);

// 模拟通过接口返回的数据 false为有这个权限，true则没有这个权限，false可以不写‘"/splashAdverse":false,’删除也行，直接写true的即可
let menuDatas = {
    "errno": 0,
    "errmsg": "获取权限成功",
    "result": {
        "/gyspz": true,
        "/gyszh/accountedit": true,
        "/gyszh/invitationcode": true,
        "/gyszh/accountregister": true,
        "/gyszh/invitationcodeview": true,
    }
}

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
let menulists = [];
let router = new Router({
    mode: 'hash'
});

const formatRoutes = function (routes, routeData) {

    routes && routeData.forEach(route => {
        if (route.path == "/home") {
            let menus = digui(routes, route.children);
            route.children = menulists = menus;
        }

    });
    return routeData;
};
function digui(routes, child) {
    if (child.length) {
        for (var i = 0; i < child.length; i++) {
            var item = child[i];
            if (routes[item.path]) {
                child.splice(i, 1);
                i--;
                continue;
            }
            if (item.children && item.children.length) {
                digui(routes, item.children);
            }
        }
    }
    return child;
}
// 通过登录接口返回权限数据 menuDatas ，然后和home中权限组件进行对比
const menuData = menuDatas.result;
// localStorage.setItem('menudata', JSON.stringify(menuData));
const routeData = formatRoutes(menuData, antRouters);
// router.addRoutes([routeData]);
// var getRouter=antRouters.concat([routeData]);
router.options.routes = routeData;
router.addRoutes(routeData);
console.log(router);
export { router, menulists }