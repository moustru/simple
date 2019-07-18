import axios from 'axios';

const state = {
    account: {},
    share: null
}

const getters = {}

const mutations = {
    SET_ACCOUNT_INFO(state, payload) {
        state.account = payload;
    },

    SET_SHARE_LINK(state, payload) {
        state.share = `http://localhost:9000/project/share/${payload}`;
    }
}

const actions = {
    async GET_ACCOUNT_INFO({ commit }, payload) {
        let res = await axios.get(`/${payload}/account`)
        commit('SET_ACCOUNT_INFO', res.data)

        return new Promise(resolve => {
            resolve(res);
        })
    },

    async ADD_PROJECT({}, payload) {
        await axios.post(`/${payload.id}/account/add-project`, payload.data)
        return new Promise(resolve => {
            resolve();
        })
    },

    async DELETE_PROJECT({}, payload) {
        await axios.post(`/${payload.id}/account/delete-project`, { 
            projectId: payload.projectId 
        })

        return new Promise(resolve => {
            resolve();
        })
    },

    async GET_SHARE_LINK({ commit }, payload) {
        let res = await axios.get(`project/${payload}/share`)
        commit('SET_SHARE_LINK', res.data.link)

        return new Promise(resolve => {
            resolve();
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}