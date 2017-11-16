// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import Scrollspy from 'vue2-scrollspy'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueCarousel)
Vue.use(Scrollspy)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCsiKvpv0CHNAvy61WEyG5-LrZK6lOICbw'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
