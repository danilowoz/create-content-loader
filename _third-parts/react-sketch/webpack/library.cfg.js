const Paths = require('./paths')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin')
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin')
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')

function containsObject(obj, list) {
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true
    }
  }
  return false
}

const externals = []
const internals = ['fabric', 'canvas']

module.exports = {
  entry: {
    src: './src',
  },
  performance: {
    hints: false,
  },
  output: {
    path: Paths.outputPath,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [Paths.srcPath],
        exclude: /(node_modules|bower_components|lib)/,
        loaders: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ModuleConcatenationPlugin(),
    new NoEmitOnErrorsPlugin(),
    new OccurrenceOrderPlugin(),
    new AggressiveMergingPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
