import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: r => require.ensure([], () => r(require('../pages/index/index.vue')), 'index')
    }
  ]
})