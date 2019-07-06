import './index.html';
import './assets/scss/app.scss';
import './app';
require.context('./static/', true, /\.(ttf|woff|woff2|svg|png|jpe?g)$/);

import Vue from 'vue/dist/vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

new Vue({
    el: '#main',
    store,
    router,
    data: {},
    components: {
        App
    }
})