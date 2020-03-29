import React from 'react'
import Helmet from 'react-helmet'

const SEO = () => {
  const currentTitle = 'Creator of React Content Loader'
  const metaDescription =
    "It's a SVG component to create placeholder loading, like Facebook cards loading or also known as skeleton UI."
  const siteUrl = 'https://danilowoz.com/create-content-loader/'
  const author = '@danilowoz'
  const keywords = [
    'react',
    'react-native',
    'skeleton',
    'placeholder',
    'loader',
    'loading',
    'content',
    'svg',
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={currentTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:site_name`,
          content: currentTitle,
        },
        {
          property: `og:title`,
          content: currentTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: 'https://danilowoz.com/create-content-loader/share.png',
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: 'https://danilowoz.com/create-content-loader/share.png',
        },
        {
          name: `twitter:site`,
          content: author,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: currentTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  )
}

export default SEO
