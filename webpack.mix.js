const mix = require('laravel-mix')
const path = require('path')
const webpack = require('webpack')

require('vuetifyjs-mix-extension')

let chunkFilename = 'js/chunks/[name].js?v=[hash]'

mix.options({
    enableCssModules: true,
    processCssUrls: false
})

mix.webpackConfig({
    output: {
        chunkFilename: chunkFilename,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@root': path.resolve(
                __dirname
            ),

            '@js': path.resolve(
                __dirname,
                'resources/js'
            ),

            '@components': path.resolve(
                __dirname,
                'resources/js/components'
            ),

            'ziggy': path.resolve("vendor/tightenco/ziggy/dist"),
        }
    },
})


mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
    .vuetify('vuetify-loader', 'resources/scss/override.scss')
    .vue()
    .version()
