<template>
  <div class="uncomplete">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="name" label="作者" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="withdraw" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          title: '这是一个标题',
          status: '未审批',
          id: '001',
          withdraw: '撤回'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          title: '这是一个标题',
          status: '已删除',
          id: '001',
          withdraw: '撤回'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          title: '这是一个标题',
          status: '未审批',
          id: '001',
          withdraw: '撤回'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          title: '这是一个标题',
          status: '通过',
          id: '001',
          withdraw: '撤回'
        }
      ]
    }
  }
}
</script>