const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'webapp/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    open: true,
    port: 9000,
    contentBase: path.resolve(__dirname, 'build')
  },
  watch : true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        }
      },
      {
        test: /(\.css)$/,
        loader: ['style-loder', 'css-loader'],
      }
    ],
  }
}
