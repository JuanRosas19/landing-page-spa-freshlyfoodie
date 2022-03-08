import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/style/main.css'
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css'
createApp(App).use(router).mount('#app');
