require('./bootstrap')

import '../scss/app.scss'

import Vue from 'vue'

import {get, debounce} from 'lodash'

let lodash = {
    get: get,
    debounce: debounce,
}

Vue.prototype._ = lodash
window._ = Vue.prototype._

import vueCookie from 'vue-cookie'
Vue.use(vueCookie)

import VoerroTagsInput from '@voerro/vue-tagsinput'
Vue.component('tags-input', VoerroTagsInput)

import VueLazyYoutubeVideo from "vue-lazy-youtube-video"
Vue.component('lazy-youtube-video', VueLazyYoutubeVideo)

import Welcome from "./components/Welcome.vue";
Vue.component('welcome', Welcome)

import List from './components/article/List.vue';
Vue.component('article-list', List)

import vuescroll from 'vuescroll'
Vue.use(vuescroll, {
    ops: {
        bar: {
            background: '#6C5DD3',
            onlyShowBarOnScroll: false,
            keepShow: true,
        },

        rail: {
            background: '#01a99a',
        }
    }
})

import { createPinia, PiniaVuePlugin, mapStores } from 'pinia'
Vue.use(PiniaVuePlugin)

const pinia = createPinia()
import { useAppStore } from "./Stores/app"

import Vuetify from '@js/Plugins/vuetify/script'
import router from './routes';

let webApp = new Vue({
    el: "#app",
    router,
    vuetify: Vuetify,
    pinia,

    data() {
        return {
            deviceID: null,
        }
    },

    computed: {
        ...mapStores(useAppStore),
    },

    mixins: window.mixins,
})