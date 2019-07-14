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
            path: '/:id/account',
            name: 'account',
            component: require('./../pages/account.vue').default
        },
        {
            path: '/project/:projectId',
            name: 'project',
            component: require('./../pages/project.vue').default
        },
        {
            path: '/error',
            name: 'error',
            component: require('./../pages/error.vue').default
        },
        {
            path: '/project/share/:shareLink',
            name: 'confirm',
            component: require('./../pages/confirm.vue').default
        }
    ]
})