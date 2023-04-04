<template>
    <div>
      <sidebar class="bg-blueGray-100"/>
      <!-- <admin-navbar class="bg-blueGray-100" /> -->

      <div class="h-screen">

        <div class="flex flex-col justify-start min-h-full md:ml-64 bg-blueGray-100">
          <!-- <header-stats /> -->
          <div class="px-4 md:px-10 mx-auto grow">
            <div class="px-4 py-4">
              <router-view />
            </div> 
          </div>
          <footer-admin class="grow-0" />
        </div>
      </div> 
    </div>
  </template>
  <script>
  // import AdminNavbar from "./components/Navbars/AdminNavbar.vue";
  import Sidebar from "./components/Sidebar/SidebarTai.vue";
  // import HeaderStats from "./components/Headers/HeaderStats.vue";
  import FooterAdmin from "./components/Footers/FooterAdmin.vue";
  export default {
    name: "admin-layout",
    components: {
      // AdminNavbar,
      Sidebar,
      // HeaderStats,
      FooterAdmin,
    },
  };
  </script>
  