import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/layout/css/login1.css'

import App from '@/App.vue'
import router from '@/router/router.js'
import store from '@/store/store.js'
// import axios from 'axios'
// Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
