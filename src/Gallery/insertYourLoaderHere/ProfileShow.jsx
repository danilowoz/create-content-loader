import React from 'react'
import ContentLoader from 'react-content-loader'

const ProfileShow = props => (
  <ContentLoader
    speed={2}
    width={300}
    height={170}
    viewBox="0 0 400 170"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="248" cy="59" r="49" />
    <circle cx="263" cy="66" r="8" />
    <rect x="175" y="120" rx="0" ry="0" width="156" height="8" />
    <rect x="204" y="137" rx="0" ry="0" width="100" height="8" />
    <rect x="248" y="128" rx="0" ry="0" width="0" height="1" />
    <rect x="247" y="126" rx="0" ry="0" width="1" height="8" />
    <rect x="252" y="166" rx="0" ry="0" width="1" height="0" />
  </ContentLoader>
)

ProfileShow.metadata = {
  name: 'Dhruvit Galoriya', // My name
  github: 'dhruvgaloriya', // Github username
  description: 'Show Profile Page', // Little tagline
  filename: 'ProfileShow', // filename of your loader
}

export default ProfileShow
