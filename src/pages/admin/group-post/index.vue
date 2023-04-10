<template>
  <v-sheet width="500" class="mx-auto">

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
        color="primary"
        class="mt-2"
        @click="resetValidation"
      >
        Tìm kiếm
      </v-btn>
      <v-btn
        color="primary"
        class="mt-2"
        @click="getAll"
      >
        Get all
      </v-btn>
    </div>
  </v-form>

  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    item-value="name"
    show-select
    class="elevation-1"
  ></v-data-table>
  


</v-sheet>
</template>
<script>
// import {getAll} from '@/controller/index'
export default {
  name: "GroupPost",
  data: () => ({
      selected: [],
      itemsPerPage: 5,
      headers: [
        {
          title: 'Group',
          align: 'start',
          key: 'name',
          sortable: false,
        },  
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    }),
    methods: {
      getAll(){

        let a = 'kjj'
        console.log('99',a)
       }
      }
};
</script>

