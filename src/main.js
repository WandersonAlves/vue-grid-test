import Vue from 'vue';
import App from './App.vue';

// ES build is more efficient by reducing unneeded components with tree-shaking.
// (Needs Webpack 2 or Rollup)
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueResource from 'vue-resource-2';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(ClientTable, {}, false, undefined);

new Vue({
  el: '#app',
  render: h => h(App)
})
