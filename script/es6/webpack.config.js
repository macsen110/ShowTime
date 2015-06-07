module.exports = {
  entry: './import.js',
  output: {
    path: __dirname,
    filename: 'im.js'

  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }


};