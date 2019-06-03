<template>
  <div>
    <ul>
      <!-- 5. 开始遍历传递过来的给porop的list数据 -->
      <li v-for="item in list" :key="item.title">
        {{ item.title }}
        <!-- 6. 通过name调用组件本身   在将children数据传递给list -->
        <tree-menus :list="item.children"></tree-menus>
      </li>
    </ul>测试
  </div>
</template>
 <style>
ul {
  padding-left: 20px !important;
}
</style>
<script>
export default {
  // 关键name，
  name: 'treeMenus',
  props: {
    // 定义prop来接受组件传递过来的值
    // 4. list 接受到了数据
    list: Array
    // 7. list接收到了clist传递过来的数据
  }
}
</script>
