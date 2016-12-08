var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var path = require('path'); 




module.exports = {
  entry: './App/Client/app.js',
  output: {
    path: './compiled/transpiled',
    publicPath: 'compiled/transpiled',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  // plugins: [
  //   new webpackUglifyJsPlugin({
  //     cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
  //     debug: true,
  //     minimize: true,
  //     sourceMap: false,
  //     output: {
  //       comments: false
  //     },
  //     compressor: {
  //       warnings: false
  //     }
  //   })
  // ]
};