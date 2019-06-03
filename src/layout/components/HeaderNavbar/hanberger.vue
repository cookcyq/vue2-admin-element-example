<template>
  <el-col :span="11" style="text-align:left;">
    <el-breadcrumb separator="/">
      <!-- 判断面包屑当前点击的路由不能带有路由效果 只给一个简单的span -->
      <!-- 以及当跳转到首页时 首页变成普通文字，当离开首页时 首页回复路由按钮 -->
      <transition-group name="list-complete" mode="out-in">
        <el-breadcrumb-item class="list-complete-item" v-for="item in routes" :key="item.path">
          <span v-if="$route.path === '/home' || $route.path === item.path ">{{ item.meta.title }}</span>
          <router-link v-else :to="{path:item.path}">{{ item.meta.title }}</router-link>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </el-col>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.getHanberger()
    }
  },
  methods: {
    // 获取当前路由matched的数组0 ，也就是父路由
    // 然后在父路由前面通过concat这个方法来手动加上一个对象带有主页名称的数组
    // 这是由于主页跟当前的父路由是同一级别，所以matched才拿不到，需要我们手动添加
    // 最终返回出去
    getHanberger() {
      var matched = this.$route.matched.filter(item => {
        return item.meta && item.meta.title
      })
      if (matched[0].path === '/home') {
        return matched
      } else {
        return [{ path: '/home', meta: { title: '主页' } }].concat(matched)
      }
    }
  }
}
</script>

