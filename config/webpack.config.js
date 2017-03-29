import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const basePath = path.join(__dirname, '..', 'app')
const assetsPath = path.join(__dirname, '..', 'assets')

export default ({
  plugins = [],
  resolve = {},
  devtool = 'eval'
}) => {
  return {
    context: basePath,

    entry: {
      popup: path.join(basePath, 'popup', 'index.js')
    },

    output: {
      path: assetsPath,
      publicPath: '/',
      filename: '[name].js'
    },

    devtool,

    plugins: [
      new HtmlPlugin({
        title: 'Social cards preview',
        template: path.join(basePath, 'popup', 'index.html')
      }),

      new CopyWebpackPlugin([
        { from: 'manifest.json' },
        { from: 'content/index.js', to: 'content.js' },
        { from: 'background/index.js', to: 'background.js' }
      ])
    ].concat(plugins),

    resolve: Object.assign({}, {
      modules: [
        'node_modules',
        'app'
      ]
    }, resolve),

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
            basePath
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },

    devServer: {
      noInfo: true,
      port: 8080,
      contentBase: path.join(basePath, 'assets')
    }
  }
}
