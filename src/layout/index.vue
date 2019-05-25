<template>
  <div>
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color:#126399">
        <el-menu style="background-color:#126399;">
          <router-link
            :to="{name: 'index'}"
            tag="span"
            role="menuitem"
            aria-haspopup="true"
            class="el-submenu"
          >
            <div class="el-submenu__title" style="padding-left: 20px;">
              <i class="el-icon-s-home"></i>
              <span>主页</span>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" style="display: none;"></ul>
          </router-link>
          <el-submenu index="2">
            <template slot="title" to="/article-type">
              <i class="el-icon-reading"></i>
              <span>文章分类</span>
            </template>
            <li class="el-menu-item-group">
              <router-link index="1-1" tag="el-menu-item" :to="{name: 'all'}">所有文章</router-link>
              <router-link index="1-2" tag="el-menu-item" :to="{name: 'complete'}">已审批</router-link>
              <router-link index="1-3" tag="el-menu-item" :to="{name: 'uncomplete'}">未审批</router-link>
              <router-link index="1-4" tag="el-menu-item" :to="{name: 'delete'}">已删除</router-link>
              <el-submenu index="1-4">
                <template slot="title">回收站</template>
                <router-link index="1-5-1" tag="el-menu-item" :to="{name: 'unclear'}">未清理</router-link>
              </el-submenu>
            </li>
          </el-submenu>

          <router-link
            :to="{name: 'add-article'}"
            tag="span"
            role="menuitem"
            aria-haspopup="true"
            class="el-submenu"
          >
            <div class="el-submenu__title" style="padding-left: 20px;">
              <i class="el-icon-circle-plus"></i>
              <span>添加文章</span>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" style="display: none;"></ul>
          </router-link>

          <router-link
            :to="{name: 'edit'}"
            tag="li"
            role="menuitem"
            aria-haspopup="true"
            class="el-submenu"
          >
            <div class="el-submenu__title" style="padding-left: 20px;">
              <i class="el-icon-setting"></i>
              <span>编辑资料</span>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" style="display: none;"></ul>
          </router-link>

          <router-link
            to="/test-mock"
            tag="li"
            role="menuitem"
            aria-haspopup="true"
            class="el-submenu"
          >
            <div class="el-submenu__title" style="padding-left: 20px;">
              <i class="el-icon-setting"></i>
              <span>测试</span>
            </div>
            <ul role="menu" class="el-menu el-menu--inline" style="display: none;"></ul>
          </router-link>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-row type="flex" class="row-bg">
            <el-col :span="12" style="text-align:left;">
              <div>
                <span
                  v-for="(item, index) in $route.matched"
                  :key="index"
                  class="el-breadcrumb__item"
                >
                  <span
                    v-if="item.meta.isboo"
                    role="presentation"
                    class="el-breadcrumb__separator"
                  >/</span>
                  <span role="link" class="el-breadcrumb__inner is-link">{{ item.meta.title }}</span>
                </span>
                <div class="grid-content bg-purple"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <el-dropdown>
                <el-button>
                  个人用户
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>查看</el-dropdown-item>
                  <el-dropdown-item>新增</el-dropdown-item>
                  <router-link to="/getout" tag="li" tabindex="-1" class="el-dropdown-menu__item">退出</router-link>
                </el-dropdown-menu>
              </el-dropdown>
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </el-header>

        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>
<style lang='scss'>
body,
html {
  padding: 0px;
  margin: 0px;
}
.el-header {
  background-color: #f7fafc;
  color: #333;
  line-height: 60px;
}
.el-aside {
  background-color: #126399;
  .el-menu {
    text-align: left;
    margin: 0px;
    padding: 0px;
    .el-submenu__title {
      color: rgb(191, 203, 217);
    }
    .el-submenu__title:hover {
      background-color: #2c333a;
    }
    .el-menu--inline {
      background: #214265;
      .el-menu-item {
        color: rgb(191, 203, 217);
      }
      .el-menu-item:hover {
        background: red;
      }
    }
  }
}
</style>