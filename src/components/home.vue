<template>
  <div class="home">

    <div class="fb-customerchat"
     page_id="347940995577109"
     minimized="true">
    </div>

    <div class="header">
      <div class="texture"></div>
      <div class="logo"></div>
      <div class="lang">
        <span v-bind:class="{active: language === 'spanish'}" v-on:click="language='spanish'"> español &nbsp |</span>
        <span v-bind:class="{active: language === 'english'}" v-on:click="language='english'"> english </span>
      </div>

      <div class="billing">
        <p v-if="this.language === 'spanish'"><a href="#">Facturación</a></p>
        <p v-if="this.language === 'english'"><a href="#">Billing</a></p>
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

    <carousel :perPage="1" :autoplay="true" paginationColor="transparent" paginationActiveColor="#1c449c" :loop="true" :autoplayTimeout="8000" :paginationSize="13">
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

    <div class="vignette"></div>

    <div v-if="this.language === 'spanish'" class="carousel-text">
      Coronela es un restaurante de exquisita comida mexicana que se inspira en los platillos típicos del centro del país.
      <br><br>Ubicada en la histórica colonia Tabacalera de la Ciudad de México, la terraza de Coronela tiene una vista privilegiada a la Plaza de la República y al Monumento a la Revolución.
      <br><br>Nuestro equipo crea menús que exploran los sabores y tradiciones mexicanas echando mano de ingredientes en temporada.
      <br><br>Lunes a viernes de 8 a.m. a 17 p.m. <br>
              Sábado de 9 a.m. a 13 p.m.
    </div>

    <div v-if="this.language === 'english'" class="carousel-text">
      Coronela is a restaurant serving exquisite Mexican food inspired by the typical dishes of the center region of the country.
      <br><br>
      At the heart of the historic Tabacalera neighborhood in Mexico City, Coronela's terrace has a privileged view of the Plaza de la República and the Monumento a la Revolución.
      <br><br>
      Our team designs menus that explore Mexican flavors and traditions using seasonal ingredients.
      <br><br>
      Monday to Friday from 8 a.m. to 5 p.m.<br>
      Saturday 9 a.m. to 1 p.m.
    </div>

    <div class="watermark"></div>

    <div v-scroll-spy="scrollPos">

      <div class="section reservations">
        <h1 v-if="this.language === 'spanish'">· &nbsp Reservaciones &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Reservations &nbsp ·</h1>
        <p v-if="this.language === 'spanish'" class="detail">Aceptamos reservaciones con hasta 30 días de anticipación, desde una persona hasta grupos grandes. </p>
        <p v-if="this.language === 'english'"class="detail">Reservations accepted 30 days in advance. We hold half of our tables for walk-ins. For reservation requests, please call us or use the button below. </p>
        <div class="action">
          <div v-if="this.language === 'spanish'" class="button"> reserva aquí </div>
          <div v-if="this.language === 'english'" class="button"> reserve here </div>
          <div v-if="this.language === 'spanish'" class="or_call_us">o llámanos al <a href="tel:57051359">5705•1359</a></div>
          <div v-if="this.language === 'english'" class="or_call_us">or call us at <a href="tel:57051359">5705•1359</a></div>
        </div>

        <hr>
      </div>

      <div class="section menus">
        <h1 v-if="this.language === 'spanish'">· &nbsp Menús &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Menus &nbsp ·</h1>

        <div class="row menus" v-if="this.language === 'spanish'">
          <div class="col col-md-4">
            <h2>DESAYUNOS</h2>
            <p> - <br>Complementa tu desayuno con un amplio menú de bollería y mermeladas artesanales. </p>
          </div>
          <div class="col col-md-4">
            <h2>COMIDAS Y CENAS</h2>
            <p> - <br> El menú respeta la cocina tradicional pero introduce la audacia de lo contemporáneo y elementos de modernidad culinaria. </p>
          </div>
          <div class="col col-md-4">
            <h2>ESPECIAL DE LA SEMANA</h2>
            <p> - <br> Cada semana preparamos especiales con ingredientes locales y de temporada que se suman a nuestra oferta. </p>
          </div>
       </div>

       <div class="row menus" v-if="this.language === 'english'">
         <div class="col col-md-4">
            <h2>BREAKFASTS</h2>
            <p> - <br> Complement your breakfast with an extensive menu of homemade bread and jams. </p>
          </div>
          <div class="col col-md-4">
            <h2>LUNCH AND DINNER</h2>
            <p> - <br> The menu respects the traditional cuisine, while also introducing the audacity of contemporary elements. </p>
          </div>
          <div class="col col-md-4">
            <h2>WEEKLY SPECIALS</h2>
            <p> - <br> Each week we prepare specials with local and seasonal ingredients. </p>
          </div>
        </div>

        <hr>
      </div>

      <div class="section location">
        <h1 v-if="this.language === 'spanish'">· &nbsp Ubicación &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Location &nbsp ·</h1>

        <p v-if="this.language === 'spanish'" class="detail">Valentín Gómez Farías #2, Colonia Tabacalera, Delegación Cuauhtémoc, Ciudad de México, México</p>
        <p v-if="this.language === 'english'" class="detail">Valentín Gómez Farías #2, Tabacalera, Mexico City, Mexico</p>

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

        <hr class="press-kit">

        <p v-if="this.language === 'spanish'" class="subdetail">
          En la Plaza de la República &nbsp&nbsp · &nbsp&nbsp No contamos con valet parking &nbsp&nbsp · &nbsp&nbsp Estacionamientos por la zona
        </p>
        <p v-if="this.language === 'english'" class="subdetail">
          In Plaza de la República &nbsp&nbsp · &nbsp&nbsp No valet parking &nbsp&nbsp · &nbsp&nbsp Parking lots available in the area
        </p>

        <h3 v-if="this.language === 'spanish'"> TRANSPORTE PÚBLICO </h3>
        <h3 v-if="this.language === 'english'"> PUBLIC TRANSPORT </h3>

        <p v-if="this.language === 'spanish'" class="subdetail">
          Metrobús Línea 1 - Plaza de la República &nbsp&nbsp · &nbsp&nbsp
          Metrobús Línea 4 - Plaza de la República &nbsp&nbsp · &nbsp&nbsp
          Metrobús Línea 7 - Reforma &nbsp&nbsp · &nbsp&nbsp
          Metro Línea 2 - Revolución
        </p>
        <p v-if="this.language === 'english'" class="subdetail">
          Metrobus Line 1 - Plaza de la República &nbsp&nbsp · &nbsp&nbsp
          Metrobus Line 4 - Plaza de la República &nbsp&nbsp · &nbsp&nbsp
          Metrobus Line 7 - Reforma &nbsp&nbsp · &nbsp&nbsp
          Subway line 2 - Revolución
        </p>

        <hr>
      </div>

      <div class="section press">
        <h1 v-if="this.language === 'spanish'">· &nbsp Prensa &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Press &nbsp ·</h1>

        <div class="row" v-if="this.language === 'spanish'" style="display:none">
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

        <h3 v-if="this.language === 'spanish'"> KIT DE PRENSA </h3>
        <h3 v-if="this.language === 'english'"> PRESS KIT </h3>

        <p class="press-kit" v-if="this.language === 'spanish'"> Para mayor información, escríbenos un correo o descarga nuestro kit de prensa. </p>
        <p class="press-kit" v-if="this.language === 'english'"> For additional information, please write us an email or download our presskit. </p>

        <div class="action">
          <div v-if="this.language === 'spanish'" class="button"> descargar </div>
          <div v-if="this.language === 'english'" class="button"> download </div>
          <div v-if="this.language === 'spanish'" class="or_call_us">o escríbenos a <a href="mailto:info@coronela.mx">info@coronela.mx</a></div>
          <div v-if="this.language === 'english'" class="or_call_us">o email us at <a href="mailto:info@coronela.mx">info@coronela.mx</a></div>
        </div>

        <div class="spacer"></div>

        <!--o escríbenos a info@coronela.mx -->

        <hr>
      </div>

      <div class="section events">

        <h1 v-if="this.language === 'spanish'">· &nbsp Eventos &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Events &nbsp ·</h1>

        <p v-if="this.language === 'spanish'"> Coronela ofrece experiencias privadas en la terraza. Nuestros eventos se adaptan a tus necesidades y posibilidades para que tu experiencia sea única.
                                               Para más información sobre las diferentes opciones de alimentos, bebidas y características, por favor contáctanos y te atenderemos a la brevedad. </p>
        <p v-if="this.language === 'english'"> Coronela offers different private dining experiences in our rooftop, all suitable for parties of up to 80 seated guests. Our events can adapt to your needs and possibilities in order to provide a unique experience.
                                               For more information about hosting an event with us, please contact the using the button below. </p>

        <a href="mailto:eventos@coronela.mx" target="_blank">
          <div v-if="this.language === 'spanish'" class="button"> conoce más </div>
          <div v-if="this.language === 'english'" class="button"> see more </div>
        </a>

        <hr>
      </div>

      <div class="section contact">
        <h1 v-if="this.language === 'spanish'">· &nbsp Contacto &nbsp ·</h1>
        <h1 v-if="this.language === 'english'">· &nbsp Contact &nbsp ·</h1>

        <div class="row">

          <div class="col-4 col-md-20p">
            <a href="tel:57051359" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_telefono.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_telefono.svg">
            </a>
          </div>
          <div class="col-4 col-sm-4 col-md-20p">
            <a href="https://m.me/coronelacdmx/" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_fb_messenger.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_fb_messenger.svg">
            </a>
          </div>
          <div class="col-4 col-md-20p">
            <a href="mailto:info@coronela.mx" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_correo.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_correo.svg">
            </a>
          </div>
          <div class="col-4 col-md-20p">
            <a href="https://www.facebook.com/coronelacdmx/" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_facebook.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_facebook.svg">
            </a>
          </div>
          <div class="col-4 col-md-20p">
            <a href="https://www.instagram.com/coronelamx" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_instagram.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_instagram.svg">
            </a>
          </div>

          <div class="col-md-20p"></div>

          <div class="col-4 col-md-20p">
            <a href="https://www.yelp.com/biz/coronela-ciudad-de-m%C3%A9xico-2" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_yelp.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_yelp.svg">
            </a>
          </div>
          <div class="col-4 col-md-20p">
            <a href="https://es.foursquare.com/v/coronela/5a2eaf8a3c858d42ffcfeaa4" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_foursquare.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_foursquare.svg">
            </a>
          </div>
          <div class="col-4 col-md-20p">
            <a href="https://www.tripadvisor.com.mx/Restaurant_Review-g150800-d13226955-Reviews-Coronela-Mexico_City_Central_Mexico_and_Gulf_Coast.html" target="_blank">
              <img class="hover" src="../assets/contacto/iconos_rede/hover/icono_tripadvisor.svg">
              <img class="main" src="../assets/contacto/iconos_rede/azules/icono_tripadvisor.svg">
            </a>
          </div>

        </div>

        <img class="rubrica" src="../assets/contacto/rubrica.svg">

        <p v-if="this.language === 'spanish'" class="footer">Derechos reservados ©, 2017.</p>
        <p v-if="this.language === 'english'" class="footer">Copyright ©, 2017.</p>
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
      /* eslint-disable */
      window.fbAsyncInit = function() {
        FB.init({
          appId            : '1226500084116130',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.11'
        });
        console.log('done')
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
      /* eslint-enable */
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  a {
    color: #1c449c;
    text-decoration: none;
  }

  .home {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto 8px auto;
    background: #FAFAFA;
  }

  .texture {
    background-image: url('../assets/header/texture_header.svg');
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

  .billing {
    position: absolute;
    top: 64px;
    left: 0px;
    transform: rotate(270deg);
    font-size: 14px;
  }

  .billing a {
    color: #2c3e50;
    text-decoration: none;
  }

  .lang {
    position: absolute;
    top: 80px;
    right: -10px;
    transform: rotate(270deg);
    z-index: 2000;
    float: center;
    display: inline;
    font-size: 15px;
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
    text-shadow: 1px 1px 2px black;
  }

  .vignette {
    position: absolute;
    top: 188px;
    left: 0;
    width: 1280px;
    max-width: 100%;
    margin: 0 calc(50% - 640px);
    height: 610px;
    box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
    z-index: 401;
    pointer-events: none;
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
    font-size: 15px;
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

  .reservations {
    position: relative;
  }

  .reservations h1 {
    margin-bottom: 24px;
    color: #4f4f4f;
  }

  .reservations .action {
    height: 158px;
  }

  .reservations .button {
    position: absolute;
    top: 160px;;
    left: calc(50% - 140px);
  }

  .reservations .or_call_us {
    position: absolute;
    top: 218px;
    left: calc(50% - 30px);
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
    background-image: url('../assets/sello/sello_coronela.svg');
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
    font-family: 'Brandon';
    color: #a4a4a4;
  }

  .menus hr {
    margin-top: 56px;
  }

  .location .detail {
    margin-top: 22px;
    font-size: 15px;
    width: 322px;
    font-family: 'Brandon';
    color: #a4a4a4;
  }

  .location .subdetail {
    color: #a4a4a4;
    font-weight: 200;
    font-size: 15px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 15px;
    color: #4f4f4f;
    font-weight: 200;
  }

  .press {
    position: relative;
  }

  .press .col p {
    padding: 0 32px;
    margin-top: -12px;
    font-size: 15px;
    color: #a4a4a4;
    font-family: 'Brandon';
  }

  p.press-kit {
    margin: 0 auto;
    width: 376px;
    font-size: 15px;
    font-family: 'Brandon';
    color: #a4a4a4;
  }

  hr.press-kit {
    margin: 42px auto;
    width: 42px;
  }

  .press .action {
    position: absolute;
    height: 158px;
  }

  .press .button {
    position: absolute;
    top: 0;
    left: calc(50vw - 140px);
  }

  .press .or_call_us {
    position: absolute;
    top: 56px;
    left: calc(50vw - 30px);
    width: 400px;
    text-align: left;
  }

  .press .spacer {
    height: 180px;
  }

  .events p {
    max-width: 499px;
    margin: 0 auto;
    font-size: 15px;
    font-family: 'Brandon';
    color: #a4a4a4;
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

  @media screen and (min-width:1280px) {
    .press .button {
      left: 500px;
    }

    .press .or_call_us {
      left: 610px;
    }
  }

  @media screen and (max-width:1280px) {
    .carousel-text {
      right: 40px;
    }

    .VueCarousel {
      margin-left: calc(50% - 635px);
      min-width: 100vw;
    }

    .vignette {
      margin: 0;
    }
  }

  @media screen and (max-width:992px) {
  }

  @media screen and (max-width:768px) {
    .carousel-text {
      top: 832px;
      width: calc(100% - 64px);
      right: 32px;
      text-align: center;
      color: #000;
      font-family: 'Brandon-Light-Italic';
      text-shadow: none;
    }

    .reservations {
      padding-top: 292px;
    }

    .reservations .button {
      margin-top: 290px;
    }

    .reservations .or_call_us {
      margin-top: 236px;
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

  @media screen and (max-width:572px) {
    .reservations {
      padding-top: 400px;
    }

    .reservations .button {
      margin-top: 390px;
    }

    .reservations .or_call_us {
      margin-top: 336px;
    }

    ul.navbar li {
      width: calc(40vw - 40px);
      display: inline-block;
    }
  }

  @media screen and (max-width:320px) {
    .reservations {
      padding-top: 440px;
    }

    .reservations .button {
      margin-top: 440px;
    }

    .reservations .or_call_us {
      margin-top: 386px;
    }
  }
</style>
