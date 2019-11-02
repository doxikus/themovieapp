const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Rules to load scss
      {
        // Some change here
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
  },
  // change line
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public')
  }
};