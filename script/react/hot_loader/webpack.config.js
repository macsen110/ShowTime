var path = require('path');
var webpack = require('webpack');
module.exports = {

  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './main'
  ],
  output: {
    publicPath: '/script/react/hot_loader/build/',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot'],
      include: path.join(__dirname) 
    }]
  }
};