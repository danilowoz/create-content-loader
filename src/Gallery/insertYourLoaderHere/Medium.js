import React from 'react'
import ContentLoader from 'react-content-loader'

const Medium = () => (
  <ContentLoader
    height={475}
    width={660}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="25" cy="112" r="15" />
    <rect x="10" y="18" rx="0" ry="0" width="464" height="9" />
    <rect x="497" y="10" rx="0" ry="0" width="144" height="144" />
    <rect x="10" y="41" rx="0" ry="0" width="464" height="9" />
    <rect x="10" y="65" rx="0" ry="0" width="364" height="9" />
    <rect x="50" y="98" rx="0" ry="0" width="115" height="9" />
    <rect x="50" y="115" rx="0" ry="0" width="115" height="10" />
  </ContentLoader>
)

Medium.metadata = {
  name: 'DaniloWoz',
  github: 'danilowoz',
  description: 'Medium',
  filename: 'Medium',
}

export default Medium
