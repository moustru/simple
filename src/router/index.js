import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('./../pages/index.vue').default
        },
        {
            path: '/account',
            name: 'account',
            component: require('./../pages/account.vue').default
        },
        {
            path: '/project',
            name: 'project',
            component: require('./../pages/project.vue').default
        }
    ]
})