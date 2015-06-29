module.exports = {
  entry: './ui.js',
  output: {
    path: __dirname,
    filename: 'ui_trans.js'

  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }


};