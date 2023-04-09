<template>
  <v-sheet width="300" class="mx-auto">

  <v-form ref="form">
    <v-row>
      <v-col  
      cols="12"
      sm="12">
    <v-text-field
      v-model="title"
      label="group"
    ></v-text-field>
        </v-col>
     </v-row> 


    <div class="d-flex flex-column">


 

      <v-btn
        color="warning"
        class="mt-4"
        @click="resetValidation"
      >
        Tạo
      </v-btn>
    </div>
  </v-form>
  <v-form ref="form">
    <v-row>
      <v-col  
      cols="13"
      sm="12">
    <v-text-field
      v-model="title"
      label="group"
    ></v-text-field>
        </v-col>
     </v-row> 


    <div class="d-flex flex-column">


 

      <v-btn
        color="warning"
        class="mt-4"
        @click="resetValidation"
      >
        Tìm kiếm
      </v-btn>
    </div>
  </v-form>
</v-sheet>
</template>
<script>
export default {
  name: "GroupPost",
};
</script>

