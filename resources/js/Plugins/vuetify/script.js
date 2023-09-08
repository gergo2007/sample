import Vue from 'vue'
import Vuetify, {
    VAlert,
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VBadge,
    VBtn,
    VCard,
    VCheckbox,
    VCol,
    VContainer,
    VDialog,
    VFooter,
    VForm,
    VIcon,
    VImg,
    VLabel,
    VList,
    VListItem,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VListItemTitle,
    VMain,
    VMenu,
    VNavigationDrawer,
    VProgressLinear,
    VRating,
    VResponsive,
    VRow,
    VSelect,
    VSnackbar,
    VSpacer,
    VTextField,
    VTextarea,
    VToolbar,
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    components: {
        VAlert,
        VApp,
        VAppBar,
        VAppBarNavIcon,
        VBadge,
        VBtn,
        VCard,
        VCheckbox,
        VCol,
        VContainer,
        VDialog,
        VFooter,
        VForm,
        VIcon,
        VImg,
        VLabel,
        VList,
        VListItem,
        VListItemContent,
        VListItemGroup,
        VListItemIcon,
        VListItemTitle,
        VMain,
        VMenu,
        VNavigationDrawer,
        VProgressLinear,
        VRating,
        VResponsive,
        VRow,
        VSelect,
        VSnackbar,
        VSpacer,
        VTextField,
        VTextarea,
        VToolbar,
    },
    directives: {
        Ripple,
    },
})

const opts = {
    icons: {
        iconfont: 'fa',
    },

    theme: {
        dark: true,

        themes: {
            dark: {
                primary: '#6C5DD3',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
                green: '#22B07D',
                yellow: '#FFC107',
                pwspecial: '#55FFDE',
                navy: '#302D48',
                lightgrey: '#DDDDDE',
                purpledark: '#5B4DB9',
                'wt-btn-secondary': '#3D3C41',
                'wt-green': '#38FFB8'
            },
        }
    },

}

export default new Vuetify(opts)
