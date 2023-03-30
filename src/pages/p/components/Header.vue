<template>
 <div class="main">
    <div class="bg-blue-accent-2 ">

      <v-container class="d-flex align-center justify-center ">
        <div>
      <image src="../../../public/favicon.ico" />
    </div>
     <div>
       <h1 class="text-center font-bold text-yellow-300">QŨY TÍN DỤNG NHÂN DÂN XÃ LIÊN THÀNH</h1>
       <h4 class="text-center">Cầu Thông - Xã Liên Thành - Yên Thành - phone 097.1989.288</h4>   
      </div>
      <v-btn class="bg-red">NỘP HỒ SƠ VAY TRỰC TUYẾN</v-btn>
    </v-container> 
  </div>

    <div class="bg-blue-accent-2 d-flex justify-space-between align-center">
      <div>TIME</div>
      <div class="animate-bounce delay-75">Cảm ơn quý khách đã ghé thăm website của chúng tôi </div>
      <div clas="d-flex">
        <v-input placeholder="Email"/>
        <v-input placeholder="Mật khẩu"/>
        <v-btn>Đăng Nhập</v-btn>
      </div>
    </div>
    <div class="bg-red-lighten-5">
      <v-container >
        <div>

          <v-text-field placeholder="Nhập từ khóa tìm kiếm..." width="100px" />
          <v-btn type="submit" class="mt-2">Tìm kiếm</v-btn>
        </div>
        <div>
          <v-btn>Cho vay vốn</v-btn>
          <v-btn>Gửi tiếc kiệm</v-btn>
          <v-btn>Dịch vụ khác</v-btn>
        </div>
      </v-container>
    </div>
    </div>
</template>
<script>
   export default {
     name: 'HeaderUser',
     data() {
       return {
         count: 0
       }
     },
     methods:{

       setTralet(){
      
       }
     },
   
   }
   </script>
  <style  scoped>
  </style>