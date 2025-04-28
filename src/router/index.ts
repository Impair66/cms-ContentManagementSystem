import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    children: [
      {
        path: "login",
        component: () => import("@/views/login/loginpanel.vue"),
        name: "登录面板",
        meta: { title: "登录面板" },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/loginpanel.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_CONTEXT_PATH), // createWebHashHistory
  routes,
  // 刷新时，滚动条位置还原
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
