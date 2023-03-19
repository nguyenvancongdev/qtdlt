import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import CKEditor from '@ckeditor/ckeditor5-vue';
import Vuex from 'vuex'
import './index.css'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(Vuex)
  .use(CKEditor)
  .mount('#app')
