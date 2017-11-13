<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    background: #FAFAFA;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }

  .VueCarousel-pagination {
    position: absolute;
    margin-top: -72px !important;
  }

  .VueCarousel-dot-inner {
    border: 1px solid white;
  }
</style>
