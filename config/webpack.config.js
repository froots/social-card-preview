import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'

const basePath = path.join(__dirname, '..', 'app')

export default ({
  plugins = [],
  resolve = {},
  devtool = 'eval'
}) => {
  return {
    entry: {
      app: path.join(basePath, 'index.js')
    },

    output: {
      path: path.join(basePath, '..', 'assets'),
      publicPath: '/',
      filename: '[name].js'
    },

    devtool,

    plugins: [
      new HtmlPlugin({
        title: 'Social cards preview',
        template: path.join(basePath, 'index.html')
      })
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
