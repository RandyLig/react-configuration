// webpack.config.js
var webpack = require("webpack");
var path = require("path");
var fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
// var packCSS = new ExtractTextPlugin('./css/.css');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './dev/entry.js')], // 要打包的入口文件
    devtool: 'source-map',
    　　 // 调试时定位到编译前的代码位置，推荐安装react插件
    output: { //打包后的文件
        path: path.resolve(__dirname, "./dist/js/"), //表示使用绝对路径
        filename: "bundle.js" //输出文件名
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [ //用于加载一些静态文件夹（css样式，图片之类）  module.rules为2.x新增的接口，代替原先使用的module.loaders
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                loader: 'babel-loader',
                exclude: /node_modules/, //不进行转换的文件，可以提高打包速度
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015'],
                    plugins: [

                        ["import", { libraryName: "antd", style: "css" }] //按需加载

                    ]

                }
            }
        ]
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /^node_modules$/,
            //     loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
            // }, {
            //     test: /\.less$/,
            //     exclude: /^node_modules$/,
            //     loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
            // }, {
            //     test: /\.scss$/,
            //     exclude: /^node_modules$/,
            //     loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
            // }, {
            //     test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            //     exclude: /^node_modules$/,
            //     loader: 'file-loader?name=[name].[ext]'
            // }, {
            //     test: /\.(png|jpg|gif)$/,
            //     exclude: /^node_modules$/,
            //     loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            //         //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
            // }, {
            //     test: /\.jsx$/,
            //     exclude: /^node_modules$/,
            //     loaders: ['jsx', 'babel']
            // }
        
    },
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};