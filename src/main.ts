import Vue from 'vue'
import App from '@/App.vue'
import { router } from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App)
})

export { app }
