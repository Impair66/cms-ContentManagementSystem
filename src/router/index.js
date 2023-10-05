import { createRouter, createWebHistory } from "vue-router";
 
const routes = [
  {                    //每一个链接都是一个对象
    path: '/',         //链接路径
    redirect: '/login'
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/login/loginpanel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory
  routes,
});

export default router