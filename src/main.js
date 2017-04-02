import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource-2';

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
