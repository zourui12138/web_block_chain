'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');

// 获取绝对路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    // webpack入口文件
    entry: {
        app: './src/main.js'
    },
    // webpack输出路径和命名规则
    output: {
        // webpack输出的目标文件夹路径（例如：/dist）
        path: config.build.assetsRoot,
        filename: '[name].js',
        // webpack编译输出的发布路径（例如'//cdn.xxx.com/app/'）
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    // 模块resolve的规则
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        // 别名，方便引用模块，例如有了别名之后，
        // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '~': resolve('src')
        }
    },
    // 不同类型模块的处理规则
    module: {
        rules: [
            {// 对所有.vue文件使用vue-loader进行编译
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {// 对src文件夹下的.js文件使用babel-loader将es6+的代码转成es5
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {// 对图片资源文件使用url-loader
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // 小于10K的图片转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到静态资源文件夹
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {// 对多媒体资源文件使用url-loader
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // 小于10K的资源转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的资源转移到静态资源文件夹
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {// 对字体资源文件使用url-loader
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // 小于10K的资源转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的资源转移到静态资源文件夹
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    // 增加一个plugins
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
