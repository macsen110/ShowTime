module.exports = {
  entry: './dev.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'

  },

  module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
        ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }


};