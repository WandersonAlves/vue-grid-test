import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource-2';
import vueForm from 'vue-form';

vueForm.config.classes.input.invalid = 'form-control-danger';
vueForm.config.classes.input.valid = 'form-control-success';

Vue.use(VueResource);
Vue.use(vueForm);

new Vue({
  el: '#app',
  render: h => h(App)
})
