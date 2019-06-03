<template>
  <div>
    <button @click="btn">发起请求</button>
    <button @click="getRouterInfo">获取路由信息</button>
    <button @click="getVuex">获取VueX</button>
    <button>{{ $store.state.isCollapse }}</button>
    <div>{{ $aaa }}</div>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
  data: function() {
    return {
      arr: ''
    }
  },
  computed: {
    $aaa() {
      console.log('touch')
      return 1
    }
  },
  methods: {
    btn: function() {
      axios('/a').then(res => {
        console.log(res)
      })
    },
    getRouterInfo: function() {
      console.log(this.$route)
    },
    getVuex() {
      console.log(this.$store.getters.getIscollapse)
    }
  }
}
</script>

<style>
</style>
