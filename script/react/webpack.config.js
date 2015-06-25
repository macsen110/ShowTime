module.exports = {
  entry: './RouteHandle.js',
  output: {
    path: __dirname,
    filename: 'webpack_RouterHandle.js'

  },

  module: {
      loaders: [
          // {
          //     //tell webpack to use jsx-loader for all *.jsx files
          //     test: /\.js$/,
          //     loader: 'jsx-loader?insertPragma=React.DOM&harmony=true'
          // },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
        ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }


};