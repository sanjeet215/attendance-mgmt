import 'core-js/stable'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import { router } from '../src/router/router';
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import Vuelidate from 'vuelidate'
//import Vuetify from 'vuetify/lib';
import vSelect from "vue-select";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Vuelidate)
//Vue.use(Vuetify)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuex);
Vue.prototype.$log = console.log.bind(console)
Vue.component("v-select", vSelect);


new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})

// export const store = new Vuex.Store({
//   modules: {
//       alert,
//       account,
//       users
//   }
// });
