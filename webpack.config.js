const path = require('path');

const config = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          } 
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}

module.exports = config;