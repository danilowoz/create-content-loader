import React from 'react'
import ContentLoader from 'react-content-loader'

const InstaStories = props => {
  return (
    <ContentLoader
      height={475}
      width={400}
      speed={2}
      primaryColor="#c32aa3"
      secondaryColor="#dd2a7b"
      {...props}
    >
      <circle cx="15" cy="30" r="13" />

      <rect x="35" y="25" rx="4" ry="4" width="60" height="5" />
      <rect x="0" y="50" rx="5" ry="5" width="100" height="470" />
    </ContentLoader>
  )
}

InstaStories.metadata = {
  name: 'LuisaBFS',
  github: 'luisabfs',
  description: 'Insta Stories',
  filename: InstaStories,
}

export default InstaStories
