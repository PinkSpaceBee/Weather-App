const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
};