<template>
  <!-- 递归当前的组件 -->
  <div v-if="!routers.hidden">
    <!-- 确保当前路由再也没有子路由 -->
    <template
      v-if="(isChlidren(routers.children, routers) && !onlyRouter.children) || onlyRouter.noshowChildren"
    >
      <el-menu-item v-if="onlyRouter.meta" :index="reslovePath(onlyRouter.path)">
        <i v-if="onlyRouter.meta.icon" :class="onlyRouter.meta.icon"></i>
        <span slot="title">{{ onlyRouter.meta.title }}</span>
      </el-menu-item>
    </template>

    <!-- 说明该路由还有子路由 -->
    <el-submenu v-else :index="reslovePath(routers.path)">
      <template slot="title">
        <i v-if="routers.meta.icon" :class="routers.meta.icon"></i>
        <span v-if="routers.meta" slot="title">{{ routers.meta.title }}</span>
      </template>

      <!-- 继续递归当前路由的子路由继续走上面的步骤 -->
      <side-item
        v-for="item in routers.children"
        :routers="item"
        :key="item.path"
        :base-path="reslovePath(item.path)"
      ></side-item>
    </el-submenu>
  </div>
</template>
<script>
import path from 'path'
export default {
  name: 'side-item',
  data: function() {
    return {
      onlyRouter: null
    }
  },
  props: {
    routers: {
      type: Object
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    isChlidren(children = [], routers) {
      children.map(item => {
        this.onlyRouter = item
      })
      if (children.length === 1) {
        return true
      } else if (children.length === 0) {
        this.onlyRouter = { ...routers, path: '', noshowChildren: true }
        return true
      }
      return false
    },

    reslovePath(childpath) {
      return path.resolve(this.basePath, childpath)
    }
  }
}
</script>

