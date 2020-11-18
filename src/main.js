import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const myApp = createApp(App);
myApp.use(router);
myApp.mount('#app');
