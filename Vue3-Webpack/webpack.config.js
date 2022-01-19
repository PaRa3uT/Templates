const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: './src/app.js',

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    output: {
        filename: '[name].[contenthash].js',
        clean: true
    },

    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader',}
        ]
    }
}