import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource-2';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.use(VueResource);
Vue.use(ClientTable, {}, false, undefined);

new Vue({
  el: '#app',
  render: h => h(App)
})
