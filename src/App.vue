<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
