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
        use: {
          loader: 'babel-loader',
          options: {
            // https://github.com/necolas/react-native-web/blob/master/website/guides/getting-started.md
            plugins: [ 'react-native-web' ],
            presets: [ 'react-native' ],
            cacheDirectory: true,
            // Don't use root babel config
            babelrc: false,
            // Enable source maps
            sourceMaps: true
          }
        }
      }
    ]
  }
}
