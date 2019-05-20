<template>
  <div class="home">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import { home } from '@/api/home.js'
export default {
  data: function() {
    return {
      title: ''
    }
  },
  created: function() {
    this.gethome()
  },
  methods: {
    gethome: function() {
      home()
        .then(res => {
          this.title = res.data.data.content
        })
        .catch(error => {
          console.log('请求错误' + error)
        })
    }
  }
}
</script>

