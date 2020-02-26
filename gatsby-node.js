exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
      canvas: 'empty',
    },
  })
}
