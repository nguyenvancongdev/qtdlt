
import HelloWorld from '@/components/HelloWorld'
// import AboutToi from '@/components/About'
import UserScreen from '@/views/user/index'
import NotFound from '@/views/404/index'
import LoginAdmin from '@/views/login/index'

import * as VueRouter from 'vue-router'

import AdminTai from "@/layouts/Admin.vue";
import AuthTai from "@/layouts/Auth.vue";

// views for Admin layout

import DashboardTai from "@/views/admin/Dashboard.vue";
import SettingsTai from "@/views/admin/Settings.vue";
import TablesTai from "@/views/admin/Tables.vue";
import MapsTai from "@/views/admin/Maps.vue";

// views for Auth layout

import LoginTai from "@/views/auth/LoginTai.vue";
import RegisterTai from "@/views/auth/RegisterTai.vue";

// views without layouts

import LandingTai from "@/views/Landing.vue";
import ProfileTai from "@/views/Profile.vue";
import IndexTai from "@/views/Index.vue";

  const routes = [ 
    {path: '/', redirect: '/user/post', name:'home'},

    {
      path: '/user', 
      component: UserScreen, 
      children: [
        {
          path: 'post',
          component: HelloWorld,
        },
      ],
    },
    {
      path: '/admins', 
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
    { path: '/:pathMatch(.*)*',  redirect: '/404' },
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
    {
      path: "/auth",
      redirect: "/auth/login",
      component: AuthTai,
      children: [
        {
          path: "/auth/login",
          component: LoginTai,
        },
        {
          path: "/auth/register",
          component: RegisterTai,
        },
      ],
    },
    {
      path: "/landing",
      component: LandingTai,
    },
    {
      path: "/profile",
      component: ProfileTai,
    },
    {
      path: "/",
      component: IndexTai,
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
    
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router