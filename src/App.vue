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

  @font-face {
    font-family: 'Brandon-Light-Italic';
    src: url('assets/font/Brandon_thin_it.otf');
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
    border: 2px solid #888;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col {
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    -ms-flex-positive: 1;
        flex-grow: 1;
    max-width: 100%;
  }

  @media (min-width: 576px) {
    .col-sm-2 {
      -ms-flex: 0 0 16.666667%;
          flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-sm-3 {
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-sm-5 {
      -ms-flex: 0 0 41.666667%;
          flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-sm-6 {
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-12 {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 768px) {
    .col-md-2 {
      -ms-flex: 0 0 16.666667%;
          flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-6 {
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-12 {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
      max-width: 100%;
    }
    .col-md-20p {
      -ms-flex: 0 0 20%;
          flex: 0 0 20%;
      max-width: 20%;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      -ms-flex-preferred-size: 0;
          flex-basis: 0;
      -ms-flex-positive: 1;
          flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-2 {
      -ms-flex: 0 0 16.666667%;
          flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-lg-3 {
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-6 {
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-12 {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 1200px) {
    .col-xl-2 {
      -ms-flex: 0 0 16.666667%;
          flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-xl-3 {
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-xl-6 {
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-12 {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .vue-map-container .vue-map {
    border-radius: 20px;
  }
</style>
