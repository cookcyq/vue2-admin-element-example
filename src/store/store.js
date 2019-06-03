import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    setIsCollapse(state) {
      // 控制侧边栏展示和隐藏
      state.isCollapse = !state.isCollapse
    }
  },
  getters: {
    getIsCollapse(state) {
      return state.isCollapse
    }
  },
  actions: {}
})
