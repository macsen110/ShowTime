module.exports = {
  entry: './dev',
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
      extensions: ['','.js', '.jsx']
  }
};