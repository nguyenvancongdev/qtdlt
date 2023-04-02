
import * as VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserScreen from '@/pages/p/index'
import NotFound from '@/pages/404/index'
import LoginAdmin from '@/pages/login/index'


import AdminTai from "@/pages/admin";

// views for Admin layout

import DashboardTai from "@/pages/admin/components/Dashboard.vue";
import SettingsTai from "@/pages/admin/components/Settings.vue";
import TablesTai from "@/pages/admin/components/Tables.vue";
import MapsTai from "@/pages/admin/components/Maps.vue";

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
    {
      path: '/login', component: LoginAdmin,
    },
    { path: '/404',name: 'NotFound', component: NotFound },
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: AdminTai,
      children: [
        {
          path: "/admin/dashboard",
          component: DashboardTai,
        },
        {
          path: "/admin/settings",
          component: SettingsTai,
        },
        {
          path: "/admin/tables",
          component: TablesTai,
        },
        {
          path: "/admin/maps",
          component: MapsTai,
        },
      ],
    },
    { path: '/:pathMatch(.*)*',  redirect: '/404' },


    
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router