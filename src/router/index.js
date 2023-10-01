 
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
    },
    {
      path:'/hi',
      children:[        
      ]
    }
  ]
})