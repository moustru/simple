import axios from 'axios'
import router from '../router'
import API from '../config'

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('user-token')
    const url = config.url.replace(`${API.DOMAIN}`, '')
    config.baseURL = API.DOMAIN

    if ((token !== null && url !== '/auth') || (token !== null && url !== '/reg')) {
        config.headers.Authorization = 'Bearer ' + token
        config.headers.Accept = 'application/json'
    } else if ((token === null && url !== '/auth') || (token === null && url !== '/reg')) {
        router.push('/')
    }

    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    let status = error.status

    if (status === 401) {
        router.push('/')
        removeAuthorization()
    }

    return Promise.reject(error)
})

function removeAuthorization () {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-id')
}