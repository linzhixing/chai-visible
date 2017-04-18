var webpack = require("webpack");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/lib',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
             presets: ["es2015", "stage-0"],
             cacheDirectory: true
          }
        }
      }
    ]
  }
}
