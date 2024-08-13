import './bootstrap';
// import { createApp } from 'vue';
// import App from "./App.vue";

// createApp(App).mount("#app");

require('./bootstrap');

Vue.component('welcome', require('./components/bienvenue.vue'));

const app = new Vue({
    el: '#app'
});