<template>
  <el-container style="height:100%;">
    <side-bar></side-bar>
    <el-container>
      <!-- 这里必须使用el-header包裹起来，如果在nav-bar包裹起来布局会错乱，， 不知道怎么回事 -->
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <context-main></context-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './components/Sidebar/index.vue'
import NavBar from './components/HeaderNavbar/index.vue'
import ContextMain from './components/ContextMain/index.vue'
export default {
  components: { SideBar, NavBar, ContextMain }
}
</script>
