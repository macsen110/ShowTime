const ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss      = require('precss');
var colorHwb = require("postcss-color-hwb");
var colorGray = require('postcss-color-gray');
var colorRebeccapurple = require("postcss-color-rebeccapurple");
module.exports = {
  entry: './dev',
  output: {
    path: __dirname,
    filename: 'bundle.js'

  },
  module: {
      loaders: [
          { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')},
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime'}
      ]
  },
  postcss: function () {
        return [
          autoprefixer,
          precss, 
          colorHwb,
          colorGray,
          colorRebeccapurple, 
          require('autoprefixer-core')
        ];
  },
  plugins: [
    new ExtractTextPlugin("test.css", { allChunks: true }),
  ]

};