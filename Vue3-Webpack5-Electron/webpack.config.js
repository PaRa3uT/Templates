const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'src/index.html')
        }),
    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    module: {
        rules: [{
            test: /\.vue$/, loader: 'vue-loader'
        }]
    }
};