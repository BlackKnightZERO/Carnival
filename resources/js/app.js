require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import store from './store/loggedInUser'

import ElaLayout from './layouts/ElaLayout.vue'

const app = createApp({
    components: {
        ElaLayout
    }
})
app.use(router)
app.use(createPinia())
app.mount('#app')
