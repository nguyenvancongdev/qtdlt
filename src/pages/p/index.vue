<template>
    <div>
      <menu-user />
     </div>
    <router-view></router-view>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 import MenuUser from '@/pages/p/components/MenuUser';
 
 export default defineComponent({
   name: 'UserHello',
   components: {
     MenuUser,
   },
 });
 </script>