<template>
  <!-- 我们根据路由的title和icon来展示相应的侧边栏 -->

  <div v-if="!routers.hidden">
    <!-- 只要chidlren的长度为1 或者 0 都是根路由 -->
    <template
      v-if="(isChlidren(routers.children, routers) && !temp.children) || temp.noshowChildren"
    >
      <el-menu-item v-if="temp.meta" :index="reslovePath(temp.path)">
        <!-- 这里需要进行判断当前的路由是否有icon -->
        <i v-if="temp.meta.icon" class="el-icon-document"></i>
        <span slot="title">{{ temp.meta.title }}</span>
      </el-menu-item>
    </template>
    <!-- 剩下都是有子路由了， 有子路由继续进行递归调用当前的组件-->
    <el-submenu v-else :index="reslovePath(temp.path)">
      <template slot="title">
        <i v-if="temp.meta.icon" class="el-icon-document"></i>
        <span v-if="routers.meta" slot="title">{{ routers.meta.title }}</span>
      </template>

      <!-- 传递reslovePath(item.path)每次将已经计算好的路径重新放到base-path中，以此类推，达到累加路径的作用。
      然后就可以通过base-path重新 + 当前的参数item.path即可。
        如果只是重新传入item.path， 就会导致前面base-path的值被新传递的值欸覆盖住了。
      -->
      <render-item
        v-for="item in temp.children"
        :routers="item"
        :key="item.path"
        :base-path="reslovePath(item.path)"
      ></render-item>
    </el-submenu>
  </div>
</template>
<script>
import path from 'path'
export default {
  name: 'render-item',
  data: function() {
    return {
      temp: null,
      abpath: null
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
        this.temp = item
      })
      if (children.length === 1) {
        // 只有一个children，则当前也是根路由
        return true
      } else if (children.length === 0) {
        // 没有children了，则当前也是根路由，然后将当前的根路由放在temp中，不然的话 temp拿到的只是router.children的内容
        this.temp = { ...routers, path: '', noshowChildren: true }
      } else {
        // 剩下都是有children的，将剩下的children重新给temp交给它去重新递归
        this.temp = routers
      }
    },

    reslovePath(childpath) {
      return path.resolve(this.basePath, childpath)
    }
  }
}
</script>

 