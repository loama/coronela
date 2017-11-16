<template>
  <div class="home">

    <div class="header">
      <div class="texture"></div>
      <div class="logo"></div>
      <div class="lang">
        <span v-bind:class="{active: language === 'spanish'}" v-on:click="language='spanish'"> español &nbsp |</span>
        <span v-bind:class="{active: language === 'english'}" v-on:click="language='english'"> english </span>
      </div>
    </div>

    <ul class="navbar" v-bind:class="{ scrolled: navbarBackground}">
      <li :class="{active:scrollPos == 0}">
        <a v-if="this.language === 'spanish'" @click="$scrollTo(0)">reservaciones</a>
        <a v-if="this.language === 'english'" @click="$scrollTo(0)">reservations</a>
      </li>
      |
      <li :class="{active:scrollPos == 1}">
        <a v-if="this.language === 'spanish'" @click="$scrollTo(1)">menús</a>
        <a v-if="this.language === 'english'" @click="$scrollTo(1)">menus</a>
      </li>
      |
      <li :class="{active:scrollPos == 2}">
        <a v-if="this.language === 'spanish'" @click="$scrollTo(2)">ubicación</a>
        <a v-if="this.language === 'english'" @click="$scrollTo(2)">location</a>
      </li>
      |
      <li :class="{active:scrollPos == 3}">
        <a v-if="this.language === 'spanish'" @click="$scrollTo(3)">prensa</a>
        <a v-if="this.language === 'english'" @click="$scrollTo(3)">press</a>
      </li>
      |
      <li :class="{active:scrollPos == 4}">
        <a v-if="this.language === 'spanish'" @click="$scrollTo(4)">eventos</a>
        <a v-if="this.language === 'english'" @click="$scrollTo(4)">events</a>
      </li>
      |
      <li :class="{active:scrollPos == 5}">
        <a v-if="this.language === 'spanish'" @click="$scrollTo(5)">contacto</a>
        <a v-if="this.language === 'english'" @click="$scrollTo(5)">contact</a>
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

    <div class="watermark"></div>

    <div v-scroll-spy="scrollPos">

      <div class="section reservations">
        <h1 v-if="this.language === 'spanish'">· &nbsp Reservaciones &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Reservations &nbsp ·</h1>
        <p class="detail">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.</p>
        <div v-if="this.language === 'spanish'" class="button"> reserva aquí </div>
        <div v-if="this.language === 'english'" class="button"> reserve here </div>
        <hr>
      </div>

      <div class="section menus">
        <h1 v-if="this.language === 'spanish'">· &nbsp Menús &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Menus &nbsp ·</h1>

        <div class="row menus" v-if="this.language === 'spanish'">
          <div class="col col-md-4">
            <h2>DESAYUNOS</h2>
            <p> - <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a. </p>
          </div>
          <div class="col col-md-4">
            <h2>COMIDAS</h2>
            <p> - <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a. </p>
          </div>
          <div class="col col-md-4">
            <h2>ESPECIAL DEL DÍA</h2>
            <p> - <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a. </p>
          </div>
        </div>

        <div v-if="this.language === 'english'">

        </div>
        <hr>
      </div>

      <div class="section location">
        <h1 v-if="this.language === 'spanish'">· &nbsp Ubicación &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Location &nbsp ·</h1>

        <gmap-map
          :center="{lat:19.436181, lng:-99.155800}"
          :zoom="16"
          style="width: 700px; height: 300px; margin: 0 auto"
          :options="{styles: mapStyles, mapTypeControl: false}"
        >
          <gmap-marker
            :position="{lat:19.436181, lng:-99.155800}"
            :icon="markerIcon"
          ></gmap-marker>
        </gmap-map>
        <p v-if="this.language === 'spanish'">Contenido</p>
        <p v-if="this.language === 'english'">content</p>
        <hr>
      </div>

      <div class="section press">
        <h1>· &nbsp RESERVACIONES &nbsp ·</h1>
        <p>Content</p>
        <hr>
      </div>

      <div class="section events">
        <h1>· &nbsp RESERVACIONES &nbsp ·</h1>
        <p>Content</p>
        <hr>
      </div>

      <div class="section contact">
        <h1>· &nbsp RESERVACIONES &nbsp ·</h1>
        <p>Content</p>
        <hr>
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
        language: 'spanish',
        navbarBackground: false,
        scrollPos: 0,
        //eslint-disable-next-line
        mapStyles: [{"featureType":"all","stylers":[{"saturation":0},{"hue":"#e7ecf0"}]},{"featureType":"road","stylers":[{"saturation":-70}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"simplified"},{"saturation":-60}]}],
        markerIcon: '/static/pin.png'
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
    margin: 0 auto 8px auto;
    background: #FAFAFA;
  }

  .texture {
    background-image: url('../assets/header/texture_header.png');
    background-repeat: repeat-x;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 187px;
  }

  .header {
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

  .lang {
    position: absolute;
    top: 80px;
    right: -10px;
    transform: rotate(270deg);
    z-index: 2000;
    float: center;
    display: inline;
    font-size: 14px;
  }

  .lang span {
    margin-right: 8px;
    cursor: pointer;
  }

  .lang span.active {
    font-family: 'Brandon-Bold';
  }

  .VueCarousel {
    position: relative;
    z-index: 400;
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
    padding-top: 52px;
  }

  h1 {
    text-transform: uppercase;
    font-family: 'Brandon';
    font-size: 16px;
  }

  h2 {
    font-weight: 300;
    font-size: 15px;
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

  .reservations h1 {
    margin-bottom: 24px;
    color: #4f4f4f;
  }

  .section hr {
    width: 608px;
    max-width: calc(100% - 236px);
    margin: 0 auto;
  }

  .watermark {
    position: fixed;
    top: 300px;
    right: 0;
    width: 168px;
    height: 264px;
    background-image: url('../assets/sello/sello_coronela.png');
    z-index: 200;
  }

  .row {
    max-width: 607px;
    margin: 0 auto;
  }

  .menus h1 {
    margin-bottom: 12px;
    color: #4f4f4f;
  }

  .menus h2 {
    margin-top: 16px;
  }

  .menus .col p {
    padding-left: 32px;
    padding-right: 32px;
    line-height: 28px;
    margin-top: -10px;
    color: #4f4f4f;
    font-weight: 200;
  }

  .menus hr {
    margin-top: 56px;
  }
</style>
