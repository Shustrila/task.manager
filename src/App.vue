<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Header: () => import('./components/Header.vue')
  }
}

</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
