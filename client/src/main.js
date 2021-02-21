import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
