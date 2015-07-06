module.exports = {
  entry: './grap_dev.js',
  output: {
    path: __dirname,
    filename: 'graphql.js'

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