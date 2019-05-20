<template>
  <div class="show-all">
    <el-table v-if="data.length > 1" :data="data" style="width: 100%">
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="name" label="作者" width="180"></el-table-column>
      <el-table-column prop="ctitle" label="标题"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="id" label="编号"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { all_article_get } from '../../../mock/user/index.js'
export default {
  data: function() {
    return {
      data: ''
    }
  },
  created: function() {
    this.getAll()
  },
  methods: {
    getAll: function() {
      all_article_get()
        .then(res => {
          this.data = res.data.data
          console.log(this.data)
        })
        .catch(error => {
          console.log('请求错误' + error)
        })
    }
  }
}
</script>

