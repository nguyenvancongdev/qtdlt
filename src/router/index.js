
import HelloWorld from '@/components/HelloWorld'
// import AboutToi from '@/components/About'
import UserScreen from '@/views/user/index'
import NotFound from '@/views/404/index'
import LoginAdmin from '@/views/login/index'

import * as VueRouter from 'vue-router'


  const routes = [ 
    {
      path: '/user', 
      component: UserScreen, 
      children: [
        {
          path: 'posts',
          component: HelloWorld,
        },
      ],
    },
    {
      path: '/admin', 
      component: UserScreen, 
      children: [
        {
          path: 'posts',
          component: HelloWorld, name: 'toi'
        },
      ],
    },
    {
      path: '/login', component: LoginAdmin,
    },
    {path: '/', redirect: '/user/posts', name:'home'},
    { path: '/:pathMatch(.*)*',  redirect: '/404' },
    { path: '/404',name: 'NotFound', component: NotFound },
    
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router