<template>
  <div>
    <button @click="btn">发起请求</button>
    <button @click="getenv">获取环境</button>
    <button @click="getRouterInfo">获取路由信息</button>
  </div>
</template>

<script>
import axios from '@/utils/request.js'
export default {
  created: function() {},
  methods: {
    btn: function() {
      axios('/a').then(res => {
        console.log(res)
      })
    },
    getenv: function() {},
    getRouterInfo: function() {
      console.log(this.$route)
    }
  }
}
</script>