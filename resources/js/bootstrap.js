import Vue from 'vue'

import Bugsnag from '@bugsnag/js'
window.bugsnag = Bugsnag

import { Ziggy } from './ziggy'
import route from 'ziggy'

window.route = route
window.Ziggy = Ziggy

Vue.mixin({
    methods: {
        route: (name, params, absolute) => route(name, params, absolute, Ziggy),
    },
});

import vueCookie from 'vue-cookie'
Vue.use(vueCookie)

Vue.use(require('vue-moment'))

import vuescroll from 'vuescroll'
Vue.use(vuescroll, {
    ops: {
        bar: {
            background: '#6C5DD3',
            onlyShowBarOnScroll: false,
            keepShow: true,
            minSize: 0.2
        },

        rail: {
            background: '#01a99a',
        }
    }
})

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.params = {};

window.axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        window.location.reload()
        return error.response
    }

    return Promise.reject(error);
});

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}