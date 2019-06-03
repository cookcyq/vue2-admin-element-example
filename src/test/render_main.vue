<template>
  <el-menu
    class="el-menu-vertical-demo"
    style="text-align:left;overflow: auto;"
    background-color="#304156"
    text-color="rgb(191, 203, 217)"
    active-text-color="rgb(64, 158, 255)"
    :router="true"
    :default-active="$route.path"
  >
    <side-bar
      v-for="router in routes"
      :key="router.path"
      :routers="router"
      :base-path="router.path"
    ></side-bar>
  </el-menu>
</template>
<script>
import sideBar from './render_test.vue'
export default {
  data: function() {
    return {
      router: null
    }
  },
  computed: {
    routes() {
      // this.$router.options.routes.map(item => {
      //   console.log(item)
      // })
      // console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  components: { sideBar }
}
</script>
