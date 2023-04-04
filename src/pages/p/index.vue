<template>
    <header-user />
    <div>
      <menu-user />
     </div>
    <router-view></router-view>
    <footer-user/>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 import MenuUser from '@/pages/p/components/MenuUser';
 import HeaderUser from './components/HeaderUser.vue';
 import FooterUser from './components/FooterUser.vue';


 
 export default defineComponent({
   name: 'UserHello',
   components: {
     MenuUser,
     FooterUser,
     HeaderUser
   },
 });
 </script>