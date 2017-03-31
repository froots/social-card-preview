import webpack from 'webpack'
import config from './webpack.config'

export default config({
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ]
})
