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
      >
        Tìm kiếm
      </v-btn>
      <v-btn
        color="primary"
        class="mt-2"
        @click="getAllss()"
      >
        Get all
      </v-btn>
      <v-btn
        color="primary"
        class="mt-2"
        @click="updateone()"
      >
        updateone
      </v-btn>
      <v-btn
        color="primary"
        class="mt-2"
        @click="updateid()"
      >
        updatewidthid
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

  
import {getAllgroup} from './group-post.controller'
import {createNotId} from '@/controller/index'
import {createWithId} from '@/controller/index'

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
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
      ],
    }),
    methods: {
      getAllss(){
        console.log('100')
        getAllgroup()
     
    
       },
       updateone(){
         let a = {
           ird:"hanh",
           nm: 'tinh yeu'
         }
         
       
         createNotId(a)
       },
        updateid(){
          createWithId()
        }
      }
};
</script>

