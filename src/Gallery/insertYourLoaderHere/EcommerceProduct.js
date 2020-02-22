import React from 'react'
import ContentLoader from 'react-content-loader'

const EcommerceProduct = () => (
  <ContentLoader viewBox="0 0 400 400" height={400} width={400} speed={2}>
    <rect x="30" y="45" rx="4" ry="4" width="80" height="6" />
    <rect x="30" y="55" rx="4" ry="4" width="80" height="6" />
    <rect x="30" y="65" rx="4" ry="4" width="80" height="6" />
    <rect x="30" y="75" rx="4" ry="4" width="80" height="6" />
    <rect x="30" y="85" rx="4" ry="4" width="80" height="6" />
    <rect x="30" y="95" rx="4" ry="4" width="80" height="6" />
    <rect x="150" y="43" rx="0" ry="0" width="60" height="50" />
    <rect x="250" y="43" rx="0" ry="0" width="60" height="50" />
    <rect x="350" y="43" rx="0" ry="0" width="60" height="50" />
    <rect x="150" y="130" rx="2" ry="2" width="60" height="50" />
    <rect x="250" y="130" rx="2" ry="2" width="60" height="50" />
    <rect x="350" y="130" rx="2" ry="2" width="60" height="50" />
  </ContentLoader>
)

EcommerceProduct.metadata = {
  name: 'Muhammd Bilal',
  github: 'bilalbutt044',
  description: 'Ecommerce products and category',
  filename: 'EcommerceProduct',
}

export default EcommerceProduct
