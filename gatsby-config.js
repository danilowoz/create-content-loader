module.exports = {
  pathPrefix: '/create-content-loader',
  siteMetadata: {
    title: `Create Content Loader`,
    description: `It's a SVG component to create placeholder loading, like Facebook cards loading or also known as skeleton UI.`,
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
        background_color: `#1c2022`,
        theme_color: `#1c2022`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-111272895-1',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
