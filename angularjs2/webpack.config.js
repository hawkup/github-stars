var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/polyfills',
    './src/bootstrap'
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};
