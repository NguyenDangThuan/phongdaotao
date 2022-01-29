const mix = require('laravel-mix');
const config = require('./webpack.config.js');
const path = require('path');
require('laravel-mix-purgecss');
require('laravel-mix-merge-manifest');

mix
    .js('resources/js/app.js', 'public/js')
    .extract(['vue', 'vuex', 'vue-router', 'axios', 'element-ui', 'nprogress'])
    .webpackConfig(config)
    .mergeManifest()
    .vue({version: 2})
    .css('resources/js/styles/app.css', 'public/css')
    .purgeCss({
        safelist: {
            standard: [/-active$/, /-enter$/, /-leave-to$/, /show$/, /^el-/],
        },
    })
    .mergeManifest();

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps().webpackConfig({
        devtool: 'eval-cheap-source-map', // Fastest for development
    });
}