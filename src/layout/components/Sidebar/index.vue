<template>
  <!-- 这里加上witdh后侧边栏收缩宽度才会正常，否则隐藏的时候整个页面并不会跟随着移动过去 -->
  <el-aside width>
    <el-scrollbar style="height:100%">
      <el-menu
        style="text-align:left;height:100%"
        class="el-menu-vertical-demo"
        :collapse="this.$store.getters.getIsCollapse"
        background-color="#304156"
        text-color="rgb(191, 203, 217)"
        active-text-color="rgb(64, 158, 255)"
        :router="true"
        :default-active="$route.path"
      >
        <side-item
          v-for="router in routes"
          :key="router.path"
          :routers="router"
          :base-path="router.path"
        ></side-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
import sideItem from './Item.vue'
export default {
  components: { sideItem },
  data: function() {
    return {
      router: null
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>
