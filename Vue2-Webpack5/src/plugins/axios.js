import axios from 'axios';
import Vue from 'vue';


const instance = create_instance();


function create_instance() {
    return axios.create();
}


function request_interceptor(config) {
    return config;
}


function response_interceptor(config) {
    return config;
}


instance.interceptors.request.use(config => {
    return request_interceptor(config);
},
error => {
    return Promise.reject(error);
});


instance.interceptors.response.use(response => {
    return response_interceptor(response);
},
error => {
    return Promise.reject(error);
});


export default {
    install () {
        Vue.prototype.$app_axios = instance;
    }
}