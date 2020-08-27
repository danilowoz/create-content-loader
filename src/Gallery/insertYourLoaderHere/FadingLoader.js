import React from 'react'
import ContentLoader from 'react-content-loader'

const FadedLoader = props => {
  return (
    <ContentLoader
      width={400}
      height={1600}
      speed={2}
      viewBox="0 0 400 1600"
      backgroundColor="#f3f3f3"
      foregroundColor="#dcdbdb"
      {...props}
    >
      <rect x="90" y="16" rx="5" ry="5" width="300" height="15" />
      <rect x="129" y="39" rx="5" ry="5" width="220" height="9" />
      <rect x="26" y="10" rx="0" ry="0" width="50" height="45" />
    </ContentLoader>
  )
}

FadedLoader.metadata = {
  name: 'Nikhil Anand', // My name
  github: 'anandnkhl', // Github username
  description: 'Loader that fades downwards', // Little tagline
  filename: 'FadedLoader', // filename of your loader
}

export default FadedLoader