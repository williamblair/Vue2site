import Vue from 'vue';
import App from './App.vue';

// bj added Vue-Router for single-page application
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// components for router to use
import Hello from './components/Hello.vue';
import About from './components/About.vue';

// define our routes
const routes = [
  // root/home
  { path: '/', component: Hello },
  // test about page
  { path: '/about', component: About }
];

// create a router instance and pass the `routes` option
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
});

// bulma scss
require('./assets/sass/main.scss');


// bj replaced with Vue router example
/*new Vue({
  el: '#app',
  render: h => h(App)
});*/

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},

  // pass in the Vue router instance
  router
}).$mount('#app');
