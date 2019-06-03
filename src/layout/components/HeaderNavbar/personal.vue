<template>
  <el-col :span="12" style="text-align: right; ">
    <el-dropdown>
      <el-button>
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          alt
        >
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
</template>
