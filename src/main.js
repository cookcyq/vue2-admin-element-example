import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/layout/css/login1.css'

import '../node_modules/nprogress/nprogress.css'

import App from '@/App.vue'

import router from '@/router/router.js'

import store from '@/store/store.js'

// 路由守卫来验证登陆权限, 以及退出
import { getCookie, removeCookie } from '@/utils/cookie.js'
router.beforeEach((to, from, next) => {
  if (to.path == '/getout') {
    removeCookie()
    next()
  }
  // 必须要有cookie 才能进去路由，同时有cookie后需要防止额外的跳转
  if (getCookie()) {
    if (to.path === '/login') {
      next('/sub-home')
    } else {
      next()
    }
  } else {
    // 当你直接next('/login')时，必须做一个判断，否则单纯这样设置会造成循环，
    // 因为next('/login')是一个跳转，并不是直接通过，每次跳转路由守卫都会进行判断的。
    // 所以当为'login'时，必须设置为next()表示通过， 不能重新设置next('/login')跳转
    if (to.path === '/login') {
      // 判断是否为/login，然后通过，不进行跳转
      next()
    } else {
      // 如果不为/login 将跳转到/login
      next('/login')
    }
  }
})

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
