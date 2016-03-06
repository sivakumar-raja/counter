var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel?presets[]=react,presets[]=es2015' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
