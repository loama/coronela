<template>
  <div class="home">

    <div class="header">
      <div class="texture"></div>
      <div class="logo"></div>
    </div>

    <ul class="navbar" v-bind:class="{ scrolled: navbarBackground}">
      <li :class="{active:scrollPos == 0}">
        <a @click="$scrollTo(0)">reservaciones</a>
      </li>
      |
      <li :class="{active:scrollPos == 1}">
        <a @click="$scrollTo(1)">menús</a>
      </li>
      |
      <li :class="{active:scrollPos == 2}">
        <a @click="$scrollTo(2)">ubicación</a>
      </li>
      |
      <li :class="{active:scrollPos == 3}">
        <a @click="$scrollTo(3)">prensa</a>
      </li>
      |
      <li :class="{active:scrollPos == 4}">
        <a @click="$scrollTo(4)">eventos</a>
      </li>
      |
      <li :class="{active:scrollPos == 5}">
        <a @click="$scrollTo(5)">contacto</a>
      </li>
    </ul>

    <carousel :perPage="1" :autoplay="true" paginationColor="transparent" paginationActiveColor="#1c449c" :loop="true" :autoplayTimeout="5000" :paginationSize="13">
      <slide>
        <img src="../assets/slider/slider_1.png" class="carousel-img">
      </slide>
      <slide>
        <img src="../assets/slider/slider_2.png" class="carousel-img">
      </slide>
      <slide>
        <img src="../assets/slider/slider_3.png" class="carousel-img">
      </slide>
    </carousel>

    <div v-scroll-spy="scrollPos">
      <div class="section reservations" style="height:1000px">
        <h1>· &nbsp RESERVACIONES &nbsp ·</h1>
        <p class="detail">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.</p>
        <div class="button"> reserva aquí </div>
      </div>
      <div class="section" style="height:1200px">
        <h1>Header 2</h1>
        <p>Content</p>
      </div>
    </div>

  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    name: 'Home',
    data () {
      return {
        navbarBackground: false,
        scrollPos: 0
      }
    },
    components: {
      Carousel,
      Slide
    },
    methods: {
      handleScroll () {
        if (window.scrollY < 200) {
          this.navbarBackground = false
        } else {
          this.navbarBackground = true
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%;
    max-width: 1280px;
    margin: 8px auto;
    box-shadow: 0 -1px 4px #888;
    background: #FAFAFA;
    border-radius: 8px;
  }

  .header .texture {
    background-image: url('../assets/header/texture_header.png');
    background-repeat: repeat-x;
    height: 187px;
  }

  .header .logo {
    background-image: url('../assets/header/logo_coronela.png');
    width: 268px;
    height: 123px;
    background-size: contain;
    position: absolute;
    top: 32px;
    left: calc(50% - 134px);
  }

  .carousel-img {
    width: 100%;
  }

  ul.navbar {
    position: absolute;
    z-index: 900;
    list-style: none;
    width: 100%;
    max-width: 1280px;
    top: 196px;
    color: white;
    font-size: 16px;
    transition: padding 0.3s;
    padding: 0;
  }

  ul.scrolled {
    position: fixed;
    top: 0;
    background: #fafafa;
    color: #1c449c;
    margin-top: 0;
    padding: 48px 0 24px 0;
  }

  li {
    display: inline;
    margin: 0 30px;
    cursor: pointer;
  }

  li.active {
    font-family: 'Brandon-Bold';
  }

  .section {
    padding-top: 100px;
  }

  h1 {
    text-transform: uppercase;
    font-family: 'Brandon';
    font-size: 16px;
  }

  p.detail {
    max-width: 500px;
    margin: 0 auto;
    color: #A4A4A4;
    font-size: 14px;
  }

  .button {
    width: 98px;
    height: 28px;
    border-radius: 8px;
    border: 1px solid #1c449c;
    color: #1c449c;
    font-family: 'Brandon-Bold';
    font-size: 15px;
    padding-top: 4px;
    cursor: pointer;
  }

  .reservations .button {
    margin: 54px auto;
  }

  .reservations .button:hover {
    color: white;
    background: #1c449c;
  }

</style>
