import Vue from 'vue'
import App from '@/App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App)
})

export { app }
