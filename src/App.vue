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
    background: #EFEFEF;
    font-family: 'Brandon'
  }

  @font-face {
    font-family: 'Brandon';
    src: url('assets/font/Brandon_reg.otf');
  }

  @font-face {
    font-family: 'Brandon-Bold';
    src: url('assets/font/Brandon_bld.otf');
  }

  #app {
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
    border: 1px solid #888;
  }
</style>
