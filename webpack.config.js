var path = require('path');

module.exports = {
  entry: {
    'bundle': './main.js',
  },

  output: {
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.json/, loader: 'json-loader'},
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015', 'react']} } // This is to enable the use of ES6   // Only run `.js` and `.jsx` files through Babel
    ]
  }, 
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
