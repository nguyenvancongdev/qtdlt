<template>
    <v-form>
        <v-text-field
            prepend-icon="person"
                name="login"
                label="Login"
                type="text"
        ></v-text-field>
        <v-text-field
            id="password"
            prepend-icon="lock"
            name="password"
            label="Password"
            type="password"
        ></v-text-field>
        <v-btn>login</v-btn>
        <v-btn  @click="backtoHome()">Back to home</v-btn>
        <v-btn  @click="backtologin()">Back to home</v-btn>
    </v-form>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 
 export default defineComponent({
   name: 'LoginAdmin',
   data(){
    return {

    }
   },
   methods: {
    backtoHome(){
        this.$router.push({name: 'home'})
    },
    backtologin(){
        this.$router.push({name: 'home'})
    },

   }
 });
 </script>
 