const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'webapp/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: '/(\.js|.jsx)$/',
        loader: 'babel',
        options: {
          presets: ['es2015', 'stage-2', 'react'],
        },
      }
    ],
  }
}