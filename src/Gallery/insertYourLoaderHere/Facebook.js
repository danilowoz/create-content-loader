import React from 'react'
import ContentLoader from 'react-content-loader'

const FacebookStyle = () => (
  <ContentLoader height={130} width={400}>
    <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
    <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
    <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
    <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
    <circle cx="30" cy="30" r="30" />
  </ContentLoader>
)

FacebookStyle.metadata = {
  name: 'DaniloWoz',
  github: 'danilowoz',
  description: 'Facebook style',
  filename: 'Facebook',
}

export default FacebookStyle
