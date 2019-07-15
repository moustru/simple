import Vue from 'vue/dist/vue'
import Vuex from 'vuex'

import account from './account';
import project from './project';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account,
        project
    }
})