var path = require('path');
process.env.NODE_ENV = 'production'
module.exports = {
  entry: {
    'tree_shaking': './src/tree_shaking.js',
    'async_await': './src/async_await.js'
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader"
      }
    ]
  }
}