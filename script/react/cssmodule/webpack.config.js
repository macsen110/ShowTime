const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './dev',
  output: {
    path: __dirname,
    filename: 'bundle.js'

  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },          
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
        ]
  }

};