import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  mode: 'history'
})

// export const router = new Router({
//   mode: 'hash',
//   routes: [
//     {
//       path: '/',
//       name: 'home-page',
//       component: () => {}
//     },
//     {
//       path: '/archives',
//       name: 'archives-page',
//       component: () => {}
//     },
//     {
//       path: '/categories',
//       name: 'categories-page',
//       component: () => {}
//     },
//     {
//       path: '/tags',
//       name: 'tags-page',
//       component: () => {}
//     },
//     {
//       path: '/related/:type/:slug',
//       name: 'related-posts-page',
//       component: () => {}
//     },
//     {
//       path: '/posts/:slug',
//       name: 'post-page',
//       component: () => {}
//     },
//     {
//       path: '/pages/*',
//       name: 'implicit-post-page',
//       component: () => {}
//     },
//     {
//       path: '/404',
//       name: '404',
//       component: () => {}
//     },
//     {
//       path: '/*',
//       redirect: { name: '404' }
//     }
//   ]
// })
