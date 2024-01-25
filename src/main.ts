import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { makeServer } from './server';

if (import.meta.env.MODE === 'development') {
  console.log('Starting MirageJS server');
  makeServer();
}

const app = createApp(App);

app.use(router);

app.config.errorHandler = (err) => {
  console.log(err);
};

app.mount('#app');
