const path = require('path')

const root = path.resolve(__dirname, '../')

module.exports = {
  root: root,
  srcPath: path.join(root, 'src'),
  buildPath: path.join(root, 'build'),
  outputPath: path.join(root, 'dist'),
  examplesPath: path.join(root, 'examples'),
  entryPath: path.join(root, 'examples', 'run.jsx'),
  templatePath: path.join(root, 'examples', 'base.html'),
}
