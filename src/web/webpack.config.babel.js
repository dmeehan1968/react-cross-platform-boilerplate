import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {

  entry: path.resolve(__dirname, 'index.js'),

  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '../../dist')
  },

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, '../../dist')
  },

  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        filename: 'index.html'
      })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [ 'env', 'react' ],
            sourceMaps: true
          }
        }
      }
    ]
  },

  resolve: {
       alias: {
           "react-native": "react-native-web"
       }
   }
}
