<template>
  <el-col :span="1" style="text-align: left;font-size: 25px;color: #776b6b;">
    <i class="el-icon-s-fold" @click="changeCollapse"></i>
  </el-col>
</template>

<script>
export default {
  methods: {
    changeCollapse() {
      // 触发store改变Collapse
      this.$store.commit('setIsCollapse')
    }
  }
}
</script>

