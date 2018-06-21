var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
const DEV = 'development'

const NODE_ENV = process.env.NODE_ENV || DEV

const __DEV__ = NODE_ENV === DEV

const sourceMap = __DEV__
const minimize = !sourceMap

var config = {
  entry: APP_DIR + '/index.js',
  mode: 'none',
  node: {
    fs: "empty"
 },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.json', '.scss', '.less', '.css'],
    unsafeCache: true,
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react/cjs/react.development.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom/cjs/react-dom.development.js')
    },
  },
  
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [
            [
              '@babel/env',
              {
                modules: false,
              },
            ],
          ],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('./src/client/app/index.html'),
    }),
  ]
}
module.exports = config;
