import './bootstrap';
import { createApp } from 'vue'; // Import from Vue 3
import Bienvenue from './components/bienvenue.vue';
import ChatMessage from './components/ChatMessage.vue';
import ChatLog from './components/ChatLog.vue';
import ChatComposer from './components/ChatComposer.vue';

// Create the Vue 3 app instance
const app = createApp({
    data() {
        return {
            messages: [
                {
                    message: "Hey!",
                    user: "John Doe"
                },
                {
                    message: "Hello!",
                    user: "Jane Doe"
                },
            ]
        }
    },
    methods: {
        addMessage() {
            console.log('message added!')
        }
    }
});

// Register the Bienvenue component globally
app.component('bienvenue', Bienvenue);
app.component('chat-message', ChatMessage);
app.component('chat-log', ChatLog);
app.component('chat-composer', ChatComposer);

// Mount the app to the DOM element with id 'app'
app.mount('#app');

// Vue.component('bienvenue', require('./components/bienvenue.vue'));

// const app = new Vue({
//     el: '#app'
// });