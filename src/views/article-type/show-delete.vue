<template>
  <div class="delete">
    <el-table v-if="data.length > 1" :data="data" style="width: 100%">
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="name" label="作者" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="id" label="编号"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { response_result } from '@/utils/result.js'
export default {
  data() {
    return {
      data: []
    }
  },
  created: function() {
    response_result('delete', res => {
      this.data = res
    })
  }
}
</script>