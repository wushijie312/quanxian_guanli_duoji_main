// components.js 所有的页面资源  
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

let menus= {
    path: '/home',
    component: Home,
    children: [
        // 供应商配置管理
        {
            path: '/gyspz',
            component: demo7,
            redirect: {
                name: 'gyssortmanage'
            },
            meta: {
                title: '供应商商品配置管理',
                breadcrumb: [
                    [{
                        name: '供应商商品配置管理'
                    }],
                    [{
                        name: 'Supplier commodity configuration management'
                    }]
                ]
            },
            children: [{
                path: '/gyspz/gyssortmanage',
                name: 'gyssortmanage',
                component: demo8,
                meta: {
                    title: '商品分类',
                    breadcrumb: [
                        [{
                            name: '供应商商品配置管理'
                        }, {
                            name: '商品分类'
                        }],
                        [{
                            name: 'Supplier commodity configuration management'
                        }, {
                            name: 'Sort management'
                        }]
                    ]
                },
            }, {
                path: '/gyspz/gysbrandmanage',
                component: demo9,
                meta: {
                    title: '商品品牌',
                    breadcrumb: [
                        [{
                            name: '供应商商品配置管理'
                        }, {
                            name: '商品品牌'
                        }],
                        [{
                            name: 'Supplier commodity configuration management'
                        }, {
                            name: 'Brand management'
                        }]
                    ]
                },
            }, {
                path: '/gyspz/gysspecmanage',
                component: demo10,
                meta: {
                    title: '商品规格',
                    breadcrumb: [
                        [{
                            name: '供应商商品配置管理'
                        }, {
                            name: '商品规格'
                        }],
                        [{
                            name: 'Supplier commodity configuration management'
                        }, {
                            name: 'Specification management'
                        }]
                    ]
                },
            }]
        },// 供应商账户管理
        {
            path: '/gyszh',
            component: demo1,
            redirect: {
                name: 'accountlist'
            },
            meta: {
                title: '供应商账户管理',
                breadcrumb: [
                    [{
                        name: '供应商账户管理'
                    }],
                    [{
                        name: 'Supplier account management'
                    }]
                ]
            },
            children: [{
                path: '/gyszh/accountlist',
                component: demo2,
                meta: {
                    title: '账户列表',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '账户列表'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Account list'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/accountedit',
                name: 'accountedit',
                component: demo3,
                meta: {
                    title: '账户编辑',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '账户列表',
                            path: '/gyszh/accountlist'
                        }, {
                            name: '账户编辑'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Account list',
                            path: '/gyszh/accountlist'
                        }, {
                            name: 'Account edit'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/accountregister',
                component: demo4,
                meta: {
                    title: '账户注册',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '账户注册'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Account registration'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/invitationcode',
                component: demo5,
                meta: {
                    title: '邀请码管理',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '邀请码管理'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Invitation code'
                        }]
                    ]
                },
            },
            {
                path: '/gyszh/invitationcodeview',
                component: demo6,
                meta: {
                    title: '管理邀请码',
                    breadcrumb: [
                        [{
                            name: '供应商账户管理'
                        }, {
                            name: '邀请码管理',
                            path: '/gyszh/invitationcode'
                        }, {
                            name: '管理邀请码'
                        }],
                        [{
                            name: 'Supplier account management'
                        }, {
                            name: 'Invitation code',
                            path: '/gyszh/invitationcode'
                        }, {
                            name: 'Invitation code'
                        }]
                    ]
                },
            },
            ]
        },
    ],
};
export default {
    menus
};