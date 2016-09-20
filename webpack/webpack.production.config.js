var webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var git_hash = require("git-rev-sync").short();
require("babel-polyfill");

var config = {
  debug: false,
  entry: [
    'babel-polyfill', './src/index'
  ],
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.html',
      hash: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(process.env.npm_package_version + '(' + git_hash + ')'),
      __DEV__: false,
      __LOG_LEVEL__: JSON.stringify(process.env.LOG_LEVEL || 'info'),
      __API_ROOT__: JSON.stringify(process.env.API_ROOT || 'http://api.example.com/')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};

module.exports = new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge(config);
