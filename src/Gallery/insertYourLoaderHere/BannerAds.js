import React from 'react'
import ContentLoader from 'react-content-loader'

const BannerAds = () => (
  <ContentLoader viewBox="0 0 250 320" height={250} width={320} speed={2}>
    <rect x="0" y="0" rx="3" ry="3" width="320" height="250" />
  </ContentLoader>
)

BannerAds.metadata = {
  name: 'Cristina Dias',
  github: 'crisgit',
  description: 'Simple Banner Ads for Phones and Tablets',
  filename: 'BannerAds',
}

export default BannerAds
