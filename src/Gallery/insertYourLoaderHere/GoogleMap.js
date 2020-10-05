import React from 'react'
import ContentLoader from 'react-content-loader'

const GoogleMap = props => {
  return (
    <ContentLoader
      viewBox="0 0 500 280"
      height={280}
      width={500}
      
      {...props}
    >
      <circle cx="70" cy="50" r="30" />
      <rect x="0" y="90" rx="0" ry="0" width="140" height="25" />
      <circle cx="230" cy="50" r="30" />
      <rect x="160" y="90" rx="0" ry="0" width="140" height="25" />
      <circle cx="390" cy="50" r="30" />
      <rect x="320" y="90" rx="0" ry="0" width="140" height="25" />
    </ContentLoader>
  )
}

GoogleMap.metadata = {
  name: 'Ali Daghighi', // My name
  github: 'alidaghighi', // Github username
  description: 'Google Map share location with contact', // Little tagline
  filename: 'GoogleMap', // filename of your loader
}

export default GoogleMap
