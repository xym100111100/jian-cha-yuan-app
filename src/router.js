import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


let router = new Router({
    mode: "history",//1、hash哈希：有#号。2、history历史：没有#号
    base: process.env.BASE_URL, //自动获取根目录路径
    scrollBehavior: (to, from, position) => {
        if (position) {
            return position
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/main"),//路由懒加载解决首屏加载慢，性能优化
            meta: { keepAlive: false },
            redirect: "/index",
            children: [
                {
                    path: "index",
                    name: "index",
                    component: () => import("./views/home"),
                    meta: { keepAlive: true, title: "首页" }
                },
                {
                    path: "notice",
                    name: "notice",
                    component: () => import("./views/notice"),
                    meta: { keepAlive: false, title: "公告动态" }
                },
                {
                    path: "workbench",
                    name: "workbench",
                    component: () => import("./views/workbench"),
                    meta: { keepAlive: false, title: "工作台" }
                },
                {
                    path: "calendar",
                    name: "calendar",
                    component: () => import("./views/calendar"),
                    meta: { keepAlive: false, title: "日历" }
                },
                {
                    path: "my",
                    name: "my",
                    component: () => import("./views/user"),
                    meta: { keepAlive: false, title: "我的" }
                },
            ]
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/login"),
            meta: { keepAlive: false }
        },

    ]
});
router.beforeEach((to, from, next) => {
    next();
});
export default router;