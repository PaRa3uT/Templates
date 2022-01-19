const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin({
    outputFormat: 'human',
    compareLoadersBuild: {
        filePath: './buildInfo.json'
    }
});

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        chunks: 'all'
    }
  },
  resolve: {
    alias: {
        //'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  plugins: [
    new VueLoaderPlugin(), //Plug in for parsing and converting. vue files
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: path.resolve(__dirname, 'src/index.html')
    }),
    //new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [{
        test: /\.vue$/, use: 'vue-loader',
    }, {
        // test: /\.css$/i, use: [MiniCssExtractPlugin.loader, css-loader, postcss-loader],
        test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    }]
  }
};