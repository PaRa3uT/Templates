const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const { VuetifyLoaderPlugin } = require('vuetify-loader');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './src/app.js',

    plugins: [
        new webpack.ProgressPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new VuetifyLoaderPlugin(),
    ],

    output: {
        filename: '[name].[contenthash].js',
        clean: true
    },

    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            // {test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
            // {test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', {
            //     loader: 'sass-loader',
            //     options: {
            //         implementation: require('sass'),
            //         sassOptions: {
            //             indentedSyntax: true // optional
            //         },
            //     },
            // }]}
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    optimization: {
        minimize: false,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    }

}