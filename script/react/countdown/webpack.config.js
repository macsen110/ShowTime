const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './dev',
  output: {
    path: __dirname,
    filename: 'bundle.js'

  },
  module: {
      loaders: [
          { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime&stage=0' }
        ]
  },
  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],
  plugins: [
    new ExtractTextPlugin("common.css", { allChunks: true }),
  ],

};