module.exports = {
  entry: './react_1.4.js',
  output: {
    path: __dirname,
    filename: 'demo.js'

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