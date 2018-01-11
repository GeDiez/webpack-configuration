const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const manifest = require('./modules-manifest.json');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'webapp/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'javascript/bundle.js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
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
          use: {
            loader: 'css-loader',
            options: { minimize: true },
          },
        }),
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      filename: 'index.html',
      template: './assets/index-production.html',
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new webpack.DllReferencePlugin({
      manifest,
    }),
    //evitar modulos duplicados cuando tienes mas de un entry point
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),*/
  ],
};
