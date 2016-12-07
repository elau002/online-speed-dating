import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'; 
import AppTEST from './appController.js';
import login from './Views/loginController.js';
import video from './Views/videoController.js';
import signup from './Views/signupController.js';
import profile from './Views/profileController.js';
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('login', login);

var routes = [

  {
    path: '/',
    component: AppTEST
  },  
  {
  path: '/video',
    component: video
  },
  {
    path: '/signup',
    component: signup
  },
  {
    path: '/profile',
    component: profile,
    name: 'profile'
  }
];


const router = new VueRouter({
  routes
});



const app = new Vue({
  router
}).$mount('.app');

