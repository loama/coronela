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

    <hr class="header-line">

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

    <div class="carousel-text">
      Coronela es un restaurante de comida mexicana contemporánea que se inspira en los platillos típicos del centro del país.
      <br>Ubicada en la histórica colonia Tabacalera de la Ciudad de México, la terraza de Coronela tiene una vista privilegiada a la Plaza de la República y al Monumento a la Revolución.
      <br>Nuestro equipo crea menús que exploran los sabores y tradiciones mexicanas echando mano de ingredientes en temporada.
      <br>Martes a sábado de 8 a 22 horas.
    </div>

    <div class="watermark"></div>

    <div v-scroll-spy="scrollPos">

      <div class="section reservations">
        <h1 v-if="this.language === 'spanish'">· &nbsp Reservaciones &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Reservations &nbsp ·</h1>
        <p class="detail">Aceptamos reservaciones con hasta 30 días de anticipación, desde una persona hasta grupos grandes. </p>

        <div class="row">
          <div v-if="this.language === 'spanish'" class="button"> reserva aquí </div>
          <div v-if="this.language === 'english'" class="button"> reserve here </div>
          <div v-if="this.language === 'spanish'" class="button"> llámanos </div>
          <div v-if="this.language === 'english'" class="button"> call us </div>
        </div>

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
          <div class="row menus" v-if="this.language === 'spanish'">
            <div class="col col-md-4">
              <h2>BREAKFASTS</h2>
              <p> - <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a. </p>
            </div>
            <div class="col col-md-4">
              <h2>MEALS</h2>
              <p> - <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a. </p>
            </div>
            <div class="col col-md-4">
              <h2>TODAY SPECIALS</h2>
              <p> - <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a. </p>
            </div>
          </div>
        </div>
        <hr>
      </div>

      <div class="section location">
        <h1 v-if="this.language === 'spanish'">· &nbsp Ubicación &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Location &nbsp ·</h1>

        <p class="detail">Valentín Gómez Farías #2, Colonia Tabacalera, Delegación Cuauhtémoc, Ciudad de México, México</p>

        <gmap-map
          :center="{lat:19.436181, lng:-99.155800}"
          :zoom="16"
          style="width: 760px; height: 358px; margin: 50px auto; max-width: calc(100% - 64px)"
          :options="{styles: mapStyles, mapTypeControl: false, scrollwheel: false}"
          >
          <gmap-marker
            :position="{lat:19.436181, lng:-99.155800}"
            :icon="markerIcon"
          ></gmap-marker>
        </gmap-map>

        <p v-if="this.language === 'spanish'" class="subdetail">
          En la Plaza de la República &nbsp&nbsp · &nbsp&nbsp No contamos con valet parking &nbsp&nbsp · &nbsp&nbsp Estacionamientos por la zona </p>
        </p>
        <p v-if="this.language === 'english'">
          En la Plaza de la República &nbsp&nbsp · &nbsp&nbsp No contamos con valet parking &nbsp&nbsp · &nbsp&nbsp Estacionamientos por la zona
        </p>
        <hr>
      </div>

      <div class="section press">
        <h1 v-if="this.language === 'spanish'">· &nbsp Prensa &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Press &nbsp ·</h1>

        <div class="row" v-if="this.language === 'spanish'">
          <div class="col col-md-4">
            <h2>TRIP ADVISOR</h2>
            <p> - <br> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a." </p>
          </div>
          <div class="col col-md-4">
            <h2>TIME OUT</h2>
            <p> - <br> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a." </p>
          </div>
          <div class="col col-md-4">
            <h2>HUFFINGTON POST</h2>
            <p> - <br> "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a." </p>
          </div>
        </div>

        <hr class="press-kit">

        <h3> KIT DE PRENSA </h3>
        <p class="press-kit" v-if="this.language === 'spanish'"> Para mayor información, escríbenos un correo o descarga nuestro kit de prensa. </p>
        <p class="press-kit" v-if="this.language === 'english'"> For additional information, please write us an email or download our presskit. </p>

        <div v-if="this.language === 'spanish'" class="button"> descargar </div>
        <div v-if="this.language === 'english'" class="button"> download </div>

        <hr>
      </div>

      <div class="section events">

        <h1 v-if="this.language === 'spanish'">· &nbsp Eventos &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Events &nbsp ·</h1>

        <p v-if="this.language === 'spanish'"> Coronela ofrece experiencias privadas en la terraza. Nuestros eventos se adaptan a tus necesidades y posibilidades para que tu experiencia sea única.
                                               Para más información sobre las diferentes opciones de alimentos, bebidas y características, por favor contáctanos y te atenderemos a la brevedad. </p>
        <p v-if="this.language === 'english'"> Coronela offers different private dining experiences in our rooftop, all suitable for parties of up to 80 seated guests. Our events can adapt to your needs and possibilities in order to provide a unique experience.
                                               For more information about hosting an event with us, please contact the using the button below. </p>

        <div v-if="this.language === 'spanish'" class="button"> conoce más </div>
        <div v-if="this.language === 'english'" class="button"> see more </div>

        <hr>
      </div>

      <div class="section contact">
        <h1 v-if="this.language === 'spanish'">· &nbsp Contacto &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Contact &nbsp ·</h1>

        <div class="row">

          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_telefono.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_telefono.svg">
          </div>
          <div class="col-4 col-sm-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_fb_messenger.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_fb_messenger.svg">
          </div>
          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_correo.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_correo.svg">
          </div>
          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_facebook.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_facebook.svg">
          </div>
          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_instagram.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_instagram.svg">
          </div>

          <div class="col-md-20p"></div>

          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_yelp.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_yelp.svg">
          </div>
          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_foursquare.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_foursquare.svg">
          </div>
          <div class="col-4 col-md-20p">
            <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_tripadvisor.svg">
            <img class="main" src="../assets/contacto/iconos_rede/azules/icono_tripadvisor.svg">
          </div>

        </div>

        <img class="rubrica" src="../assets/contacto/rubrica.svg">
        <p class="footer"><a>Facturación</a> &nbsp &nbsp | &nbsp &nbsp Derechos reservados ©, 2017.</p>
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

  .header-line {
    position: absolute;
    left: 0;
    margin: 0;
    border: 1px solid #1c449c;
    width: 100vw;
    z-index: 500;
  }

  .VueCarousel {
    position: relative;
    z-index: 400;
  }

  .VueCarousel, .VueCarousel-inner, .VueCarousel-slide , .VueCarousel-slide img {
    min-height: 338px;
    width: 1280px;
  }

  .carousel-img {
    width: 100%;
  }

  .carousel-text {
    position: absolute;
    top: 400px;
    right: calc(50% - 600px);
    z-index: 401;
    color: white;
    width: 400px;
    text-align: left;
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
    margin-left: 0px;
  }

  ul.scrolled {
    position: fixed;
    top: 0;
    background: #fafafa;
    color: #1c449c;
    margin-top: 0;
    padding: 36px 0 24px 0;
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
    letter-spacing: 1.9px;
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
    margin: 54px auto;
  }

  .button:hover {
    color: white;
    background: #1c449c;
  }

  .reservations h1 {
    margin-bottom: 24px;
    color: #4f4f4f;
  }

  .reservations .button {
    display: inline;
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
    background-size: cover;
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
    color: #000;
    font-weight: 300;
    font-family: 'Brandon-Light-Italic';
  }

  .menus hr {
    margin-top: 56px;
  }

  .location .detail {
    margin-top: 22px;
    font-size: 14px;
    width: 322px;
    font-family: 'Brandon-Light-Italic';
    color: #000;
  }

  .location .subdetail {
    color: #4f4f4f;
    font-weight: 200;
    font-size: 15px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 15px;
    color: #4f4f4f;
    font-weight: 200;
  }

  .press .col p {
    padding: 0 32px;
    margin-top: -12px;
    font-size: 15px;
    color: #4f4f4f;
    font-family: 'Brandon-Light-Italic';
  }

  p.press-kit {
    margin: 0 auto;
    width: 376px;
    font-size: 15px;
    font-family: 'Brandon-Light-Italic';
  }

  hr.press-kit {
    margin: 42px auto;
    width: 42px;
  }

  .events p {
    width: 499px;
    margin: 0 auto;
    font-size: 15px;
    font-family: 'Brandon-Light-Italic';
  }

  .contact {
    padding-top: 40px;
  }

  .contact h1 {
    padding-bottom: 22px;
  }

  .contact img {
    height: 32px;
  }

  .contact .col-md-20p {
    position: relative;
    height: 70px;
  }

  .contact .hover, .contact .main {
    cursor: pointer;
  }

  .contact .hover {
    display: none;
  }

  .contact .col-md-20p:hover .hover {
    display: inline;
  }

  .contact .col-md-20p:hover .main {
    display: none;
  }

  .footer {
   font-size: 12px;
   color: #4f4f4f;
  }

  .footer a:hover {
    color: #1c449c;
    cursor: pointer;
  }

  .contact .rubrica {
    margin-top: 16px;
    width: 108px;
    height: 59px;
  }

  @media screen and (max-width:1280px) {
    .carousel-text {
      right: 40px;
    }

    .VueCarousel {
      margin-left: calc(50% - 635px);
      min-width: 100vw;
    }
  }

  @media screen and (max-width:992px) {
    .carousel-text {
      top: 280px;
    }
  }

  @media screen and (max-width:768px) {
    .carousel-text {
      top: 480px;
      color: black;
      width: calc(100% - 64px);
      right: 32px;
    }

    .reservations {
      padding-top: 200px;
    }

    .lang {
      right: -20px;
    }

    .watermark {
      width: 75px;
	    height: 136px;
    }

    .contact .rubrica {
      margin-top: 16px;
      width: 71px;
      height: 39px;
    }
  }
</style>
