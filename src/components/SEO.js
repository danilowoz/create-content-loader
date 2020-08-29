import React from 'react'
import Helmet from 'react-helmet'

const SEO = () => {
  const currentTitle = 'React Skeleton - Create Content Loader'
  const metaDescription =
    'Tool to easily create your animated skeleton components, replacing usual loading, giving a wireframe of your pages like placeholders for content and images.'
  const siteUrl = 'http://skeletonreact.com/'
  const author = '@danilowoz'
  const keywords = [
    'react',
    'react-native',
    'vue',
    'skeleton',
    'svg',
    'placeholder',
    'wireframe',
    'loader',
    'loading',
    'content',
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
