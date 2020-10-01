import React from 'react'
import ContentLoader from 'react-content-loader'

const GithubProfile = props => {
  return (
    <ContentLoader
      height={300}
      width={450}
      speed={2}
      viewBox="0 0 450 300"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <circle cx="75" cy="75" r="70" />
      <rect x="160" y="15" rx="3" ry="3" width="50" height="15" />
      <rect x="215" y="15" rx="3" ry="3" width="50" height="15" />
      <rect x="270" y="15" rx="3" ry="3" width="50" height="15" />
      <rect x="325" y="15" rx="3" ry="3" width="50" height="15" />

      <rect x="160" y="35" rx="3" ry="3" width="290" height="1" />

      <rect x="160" y="45" rx="3" ry="3" width="35" height="8" />
      <rect x="380" y="45" rx="3" ry="3" width="70" height="8" />

      <rect x="160" y="60" rx="3" ry="3" width="140" height="50" />
      <rect x="310" y="60" rx="3" ry="3" width="140" height="50" />
      <rect x="160" y="120" rx="3" ry="3" width="140" height="50" />
      <rect x="310" y="120" rx="3" ry="3" width="140" height="50" />
      <rect x="160" y="180" rx="3" ry="3" width="140" height="50" />
      <rect x="310" y="180" rx="3" ry="3" width="140" height="50" />

      <rect x="5" y="150" rx="3" ry="3" width="130" height="15" />
      <rect x="5" y="170" rx="3" ry="3" width="70" height="10" />
      <rect x="10" y="190" rx="3" ry="3" width="115" height="15" />
      <rect x="10" y="210" rx="3" ry="3" width="35" height="8" />
      <rect x="50" y="210" rx="3" ry="3" width="35" height="8" />
      <rect x="90" y="210" rx="3" ry="3" width="35" height="8" />
    </ContentLoader>
  )
}

GithubProfile.metadata = {
  name: 'Nikhil Anand', // My name
  github: 'anandnkhl', // Github username
  description: 'Latest Github Profile', // Little tagline
  filename: 'GithubProfile', // filename of your loaderr
}

export default GithubProfile
