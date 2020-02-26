module.exports = {
  siteMetadata: {
    title: `Create Content Loader`,
    description: `Tool to create your own SVG-Powered component to easily create placeholder loadings (like Facebook cards loading)`,
    author: `@danilowoz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Create Content Loader`,
        short_name: `Create Content Loader`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#eee`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
