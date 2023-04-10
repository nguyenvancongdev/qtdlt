// Styles
import 'vuetify/styles'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import { VDataTable } from 'vuetify/labs/VDataTable'
import * as labs from 'vuetify/labs/components'
// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify({
  
components: {
  ...labs,
  },
})
