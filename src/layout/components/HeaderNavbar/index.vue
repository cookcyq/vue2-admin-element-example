<template>
  <el-row type="flex" class="row-bg">
    <coll-apse></coll-apse>
    <hanberger></hanberger>
    <Personal></Personal>
  </el-row>
</template>

<script>
import CollApse from './collapse.vue'
import Hanberger from './hanberger.vue'
import Personal from './personal.vue'
export default {
  components: { CollApse, Hanberger, Personal }
}
</script>
