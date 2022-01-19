import Vue from 'vue';

import vuetify from './plugins/vuetify'

import App from './app.vue'

/*
var app = new Vue({

    el: '#app',

    components: {
    },

    data: {
        message: 'Hello Vue!'
    },

    created: function () {
        console.log('Vue app created');
    },
})
*/
new Vue({
    vuetify,
    render: (h) => h(App)
}).$mount('#app')