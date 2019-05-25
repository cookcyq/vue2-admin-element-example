<template>
  <div class="show-all">
    <!-- 一开始如果没有数据的话不能使用data.ength来判断显示数据，
    如果请求数据比较慢，界面会有提示 没有数据 el-tbale内置的标签, empty-text = ' ' 可以去掉文字
    Loading会没有效果，因为判断成立后 Loading早就被响应设置为fales了-->
    <el-table :data="data" style="width: 100%" stripe empty-text=" ">
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="name" label="作者" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="id" label="编号"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import request from '@/utils/request.js'
export default {
  data: function() {
    return {
      data: []
    }
  },
  created: function() {
    this.getAll()
  },
  methods: {
    getAll: function() {
      request('/a')
        .then(res => {
          this.data = res.data.data
        })
        .catch(err => {
          console.log('响应报错了 + ' + err)
        })
    }
  }
}
</script>

