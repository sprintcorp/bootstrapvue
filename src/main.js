import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import BootstrapVue from 'bootstrap-vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { LayoutPlugin,ModalPlugin,CardPlugin,VBScrollspyPlugin,TablePlugin } from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuelidate from 'vuelidate';

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue,LayoutPlugin,ModalPlugin,CardPlugin,VBScrollspyPlugin,TablePlugin,Vuelidate);
Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
