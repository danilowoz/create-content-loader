const Paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin')
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin')

const config = {
  entry: {
    examples: Paths.entryPath,
  },
  output: {
    path: Paths.buildPath,
    filename: 'index.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: {
    hints: false,
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        include: [Paths.examplesPath],
        exclude: /base\.html$/,
      },
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
    new UglifyJsPlugin(),
    new OccurrenceOrderPlugin(),
    new AggressiveMergingPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'React Sketch',
      description:
        'Sketch Element for React based applications, backed-up by fabricjs as its core',
      keywords: ['react', 'canvas', 'sketch', 'fabricjs', 'fabric.js'],
      template: Paths.templatePath,
      filename: 'index.html',
      chunks: ['examples'],
      inject: 'body',
    }),
  ],
}

module.exports = config
