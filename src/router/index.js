
import * as VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserScreen from '@/pages/p/index'
import NotFound from '@/pages/404/index'
import LoginAdmin from '@/pages/login/index'


import AdminTai from "@/pages/admin";

// views for Admin layout

import DashBoard from "@/pages/admin/Dashboard";
import TienGui from "@/pages/admin/san-pham/tien-gui";
import ChoVay from "@/pages/admin/san-pham/cho-vay";

// views for Auth layout


// views without layouts



  const routes = [ 
    {path: '/', component: UserScreen},

    {
      path: '/p', 
      component: UserScreen, 
      children: [
        {
          path: 'post',
          component: HelloWorld,
          name: 'admin-hello'
        },
      ],
    },
    { path: '/404',name: 'NotFound', component: NotFound },
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: AdminTai,
      children: [
        {
          path: "/admin/dashboard",
          component: DashBoard,
        },
        {
          path: "/admin/san-pham/tien-gui",
          component: TienGui,
        },
        {
          path: "/admin/san-pham/cho-vay",
          component: ChoVay,
        },
      ],
    },
    {
      path: '/login', component: LoginAdmin,
    },
    { path: '/:pathMatch(.*)*',  redirect: '/404' },
    

    
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router