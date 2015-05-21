var fs = require('fs');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './hello.js',
  output: {
    path: __dirname,
    filename: 'hehe.js'

  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }


};