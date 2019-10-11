import React from 'react'
import ContentLoader from 'react-content-loader'

const ForumPost = props => {
  return (
    <ContentLoader
      height={600}
      width={400}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="20" y="8" rx="0" ry="0" width="100" height="100" />
      <rect x="20" y="120" rx="0" ry="0" width="100" height="10" />
      <rect x="170" y="8" rx="0" ry="0" width="300" height="15" />
      <rect x="170" y="30" rx="0" ry="0" width="300" height="15" />
      <rect x="170" y="52" rx="0" ry="0" width="100" height="15" />
    </ContentLoader>
  )
}

ForumPost.metadata = {
  name: 'Aditi Tipnis', // My name
  github: 'adititipnis', // Github username
  description: 'Forum Post', // Little tagline
  filename: 'ForumPost', // filename of your loader
}

export default ForumPost
