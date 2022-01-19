import Vue from 'vue';

import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import store from './store'
import router from './router'

import ComponentC from './component_c.vue'

var ComponentA = {
    methods: {},
    template: `<div><h3>Component A</h3></div>`
}

Vue.component('component-b', {
    methods: {},
    template: `<div><h3>Component B</h3></div>`
})

Vue.use(axios);

var app = new Vue({
    vuetify,
    store,
    router,

    el: '#app',

    components: {
        'component-a': ComponentA,
        // 'component-c': () => import('./component_c.vue'),
        'component-c': ComponentC,
        'sample-chart': () => import('./sample_higcharts.vue')
    },

    data: {
        message: 'Hello Vue!'
    },

    created: function () {
        console.log('Vue app created');
    }
})