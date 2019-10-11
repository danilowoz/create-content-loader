import React from 'react'
import ContentLoader from 'react-content-loader'
const Reddit = props => {
  return (
    <ContentLoader
      height={160}
      width={462}
      speed={2}
      primaryColor="#eef3ef"
      secondaryColor="#ec6052"
    >
      <rect x="90" y="16" rx="5" ry="5" width="321" height="15" />
      <rect x="129" y="39" rx="5" ry="5" width="220" height="9" />
      <rect x="26" y="10" rx="0" ry="0" width="50" height="45" />
      <rect x="13" y="54" rx="0" ry="0" width="0" height="0" />
      <rect x="13" y="50" rx="0" ry="0" width="0" height="0" />
    </ContentLoader>
  )
}

Reddit.metadata = {
  name: 'Sammy Baraka', // My name
  github: 'sbaraka', // Github username
  description: 'Reddit post', // Little tagline
  filename: 'Reddit', // filename of your loader
}

export default Reddit
