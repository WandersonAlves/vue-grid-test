import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource-2';
import vueForm from 'vue-form';

Vue.use(VueResource);
Vue.use(vueForm);

new Vue({
  el: '#app',
  render: h => h(App)
})
