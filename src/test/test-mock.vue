<template>
  <div class="testMck">
    <button @click="mock">请求mock</button>
  </div>
</template>

<script>
import { all_article_get } from '../../mock/user/index.js'
export default {
  data: function() {
    return {}
  },
  created: function() {},
  methods: {
    mock: function() {
      all_article_get()
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log('有错误' + error)
        })
    }
  }
}
</script>

