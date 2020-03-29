/*eslint no-console:0 */

const Paths = require('./paths')
const webpack = require('webpack')
const myLocalIP = require('my-local-ip')
const WebpackDevServer = require('webpack-dev-server')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')

const port = 23000

const config = {
  mode: 'development',
  entry: {
    examples: [
      // activate HMR for React
      'react-hot-loader/patch',

      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack-dev-server/client?http://0.0.0.0:' + port,

      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      // the entry point of our app
      Paths.entryPath,
    ],
  },
  output: {
    path: Paths.buildPath,
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    stats: { colors: true },
    publicPath: '/',
    noInfo: false,
    lazy: false,
    port: port,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(js|jsx)$/,
        include: [Paths.srcPath, Paths.examplesPath],
        exclude: /(node_modules|bower_components|lib)/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Sketch',
      description:
        'Sketch Element for React based applications, backed-up by fabricjs as its core',
      keywords: ['react', 'canvas', 'sketch', 'fabricjs', 'fabric.js'],
      template: Paths.templatePath,
      inject: 'body',
      filename: 'index.html',
      chunks: ['examples'],
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:' + port }),
  ],
}

new WebpackDevServer(webpack(config), config.devServer).listen(
  port,
  '0.0.0.0',
  function(err) {
    err && console.log(err)
    console.log('Serving from http://' + myLocalIP() + ':' + port)
  }
)
