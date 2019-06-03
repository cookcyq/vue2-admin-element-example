<template>
  <div>
    <side-item :ps_sidebarItem="sideBarList"></side-item>
  </div>
</template>
<script>
import side_item from './tree_b.vue'
export default {
  data: function() {
    return {
      sideBarList: [
        { path: '/home', title: '主页' },
        {
          path: '/article-type',
          title: '文章分类',
          children: [
            { path: '/article-type/all-article', title__: '所有文章' },
            { path: '/article-type/complete', title__: '已审批' },
            { path: '/article-type/uncomplete', title__: '未审批' }
            // {
            //   path: '/article-type/recovery',
            //   title: '回收站',
            //   children: [
            //     { path: '/article-type/recovery/unclear', title: '未清理' }
            //   ]
            // }
          ]
        },
        { path: '/add-article', title: '添加文章' },
        { path: '/edit', title: '编辑资料' },
        { path: '/test-mock', title: '测试' }
      ]
      // test: [
      //   { path: '/home', title: '主页' },
      //   { path: '/article-type', title: '文章分类' },
      //   { path: '/add-article', title: '添加文章' },
      //   { path: '/edit', title: '编辑资料' },
      //   { path: '/test-mock', title: '测试' }
      // ]
    }
  },
  components: { 'side-item': side_item }
}
</script>
