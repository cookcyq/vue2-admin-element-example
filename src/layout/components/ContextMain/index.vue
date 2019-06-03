<template>
  <!-- out-in需要加上，这样动画显示时才不会从下面抖一下在跑到上面去 -->
  <!-- 给每个组件动态加上key, 否则 Vue 为了效率只会替换相同标签内部的内容，
          而不会有组件过度效果 
          所以在transition要过度的组件有多个，那么最好给router-view加上一个key
          这样才不会造成有些组件切换时没有过度效果
  -->
  <transition name="fade-transform" mode="out-in">
    <router-view :key="key"></router-view>
  </transition>
</template>
<script>
export default {
  computed: {
    // 只要路由内容区域一切换就会出发key()这个函数
    // this.getHanberger()用来给面包屑动态更新内容
    // this.$route.fullPath 用来给<router-view 动态加上key>防止Vue就地复用导致过度效果没有
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
<style lang='scss'>
// 内容区域
.main {
  overflow-x: hidden;
}
</style>

