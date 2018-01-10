const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const manifest = require('./modules-manifest.json');

module.exports = {
  entry: path.resolve(__dirname, 'webapp/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'javascript/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      },
      {
        test: /(\.css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DllReferencePlugin({
      manifest,
    }),
    //evitar modulos duplicados cuando tienes mas de un entry point
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),*/
  ],
};
