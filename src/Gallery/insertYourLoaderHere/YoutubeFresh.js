import React from 'react'
import ContentLoader from 'react-content-loader'

const YoutubeFresh = props => (
  <ContentLoader
    viewBox="0 0 500 420"
    height={420}
    width={500}
    speed={2}
    {...props}
  >
    <rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
    <circle cx="35" cy="248" r="20" />
    <rect x="69" y="229" rx="2" ry="2" width="275" height="15" />
    <rect x="69" y="253" rx="2" ry="2" width="140" height="15" />
  </ContentLoader>
)

YoutubeFresh.metadata = {
  name: 'Costal Oktopus',
  github: 'coktopus', // Github username
  description: 'Youtube fresh',
  filename: 'YoutubeFresh', // filename of your loader
}

export default YoutubeFresh
