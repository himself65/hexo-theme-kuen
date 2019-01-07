import Vue, { VueConstructor } from 'vue'
import VueAnalytics from 'vue-analytics'
import { VueRouter } from 'vue-router/types/router'

export const installGoogleAnalytics = {
  install (Vue: VueConstructor, { router, track_id }: { router: VueRouter, track_id: string }) {
    Vue.use(VueAnalytics, {
      id: track_id,
      router
    })
  }
}
