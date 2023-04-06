<template>
  <v-sheet width="300" class="mx-auto">

  <v-form ref="form">
    <v-row>
      <v-col  
      cols="12"
      sm="4">
    <v-text-field
      v-model="title"
      label="title"
    ></v-text-field>
        </v-col>
     </v-row> 

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <div class="d-flex flex-column">
      <v-btn
        color="success"
        class="mt-4"
        block
        @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mt-4"
        block
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        class="mt-4"
        block
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </div>
  </v-form>
  
</v-sheet>
</template>
<script>
export default {
  name: "SanPham",
};
</script>

