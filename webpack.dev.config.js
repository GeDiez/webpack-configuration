const path = require('path');
const webpack = require('webpack');
const manifest = require('./modules-manifest.json');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'webapp/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'javascript/[name].js',
  },
  devServer: {
    open: true,
    port: 9000,
    contentBase: path.resolve(__dirname, 'build'),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          },
        },
      },
      {
        test: /(\.css)$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      filename: 'index.html',
      template: './assets/index.html',
    }),
    new webpack.DllReferencePlugin({
      manifest,
    }),
  ],
};
