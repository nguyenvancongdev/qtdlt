<template>
    <div class="bg-blue-accent-2">

      <v-container class="d-flex align-center justify-center ">
        <div>
      <image src="../../../public/favicon.ico" />
    </div>
     <div>
       <h1 class="text-center color-yellow">QŨY TÍN DỤNG NHÂN DÂN XÃ LIÊN THÀNH</h1>
       <h4 class="text-center">Cầu Thông - Xã Liên Thành - Yên Thành - phone 097.1989.288</h4>   
      </div>
      <v-btn class="bg-red">NỘP HỒ SƠ VAY TRỰC TUYẾN</v-btn>
    </v-container> 
  </div>

    <div class="bg-blue-accent-2 d-flex justify-space-between align-center">
      <div>TIME</div>
      <div>Cảm ơn quý khách đã ghé thăm website của chúng tôi </div>
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
    <v-container>
      <div class="d-flex justify-space-between ">
        <div>
        <div>
          <div>Danh mục dịch vụ</div>
          <div>Trang chủ</div>
          <div>Giới thiệu</div>
          <div>Tầm nhìn chiến lược</div>
          <div>Tin tức - sự kiện</div>
          <div>Sản phẩm & Dịch vụ</div>
          <div>Khách hàng Cá Nhân</div>
          <div>Khách hàng Doanh Nghiệp</div>
          <div>Chương trình khuyến mãi</div>
          <div>Biểu phí dịch vụ</div>
          <div>Biểu mẫu - Tài liệu</div>
          <div>Tuyển dụng</div>
          <div>Hỏi - Đáp</div>
          <div>Liên hệ - Góp ý</div>
        </div>
        <div>
          <div>Tiếc kiệm ưu đãi lãi suất 0,2% năm</div>
          <div>Tiếc kiệm rút gốc linh hoạt</div>
          <div>Sản phẩm tiền gửi “Tiết kiệm lĩnh lãi định kỳ - sinh lời định kỳ” </div>
          <div>Tiết kiệm trả lãi đầu kỳ</div>
          <div>Tiền gửi tiết kiệm bằng Đồng Việt Nam</div>
          <div>Tiết kiệm trả lãi cuối kỳ</div>
        </div>
        <div>
          <div>Sản phẩm cho vay</div>
          <div>Cho vay trả góp xây nhà, sửa nhà cửa</div>
          <div>Cho vay cầm cố giấy tờ có giá</div>
          <div>Cho Vay cầm cố cổ phiếu</div>
          <div>Cho vay tín chấp: "Chợ và Phố Chợ"</div>
          <div>Cho vay mua xe ô tô thế chấp bằng chính xe mua</div>
          <div>Cho vay tín chấp dành cho Công Chức</div>
        </div>
        <div>
          <div>Liên kết</div>
          <div>Hiệp hội GTDND Việt Nam</div>
          <div>Liên minh hợp tác xã Việt Nam</div>
        </div>
        </div>
        <div>Các bài đăng</div>
        <div>
          <div>
            Giới thiệu về quỹ tín dụng Liên Thành
          </div>
          <div>
            LÃI SUẤT TIỀN GỬI
            Áp dụng từ ngày 21/11/2022
          </div>
        </div>
      </div>
    </v-container>
    <div class="bg-blue-accent-2">

      <v-container>
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <div>Trang chủ</div>
            <div>Giới thiệu</div>
            <div>Điều khoản thỏa thuận</div>
            <div>Chính sách bảo mật</div>
            <div>Liên hệ</div>
            <div>Sơ đồ trang</div>
          </div>
          <div>Email nội bộ</div>
        </div>
        <div>
            QUỸ TÍN DỤNG NHÂN DÂN XÃ LIÊN THÀNH - GIÁ TRỊ MỚI
        </div>
        <div>
            Trụ sở: Cầu Thông - xã Liên Thành - Yên Thành - Nghệ An
        </div>
        <div>
          <v-input
          :messages="['Messages']"
          append-icon="mdi-close"
          prepend-icon="mdi-phone"
        >  097.1989.288
        </v-input>
        </div>
    
      </v-container>
    </div>
   </template>


   <script>
   export default {
     name: 'MenuUser',
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
   
 
 
   