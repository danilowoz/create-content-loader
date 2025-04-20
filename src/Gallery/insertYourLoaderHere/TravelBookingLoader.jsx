import React from 'react'
import ContentLoader from 'react-content-loader'

const TravelBookingLoader = props => {
  return (
    <ContentLoader
      viewBox="0 0 800 400"
      height={400}
      width={800}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="800" height="50" />
      <rect x="20" y="70" rx="3" ry="3" width="100" height="20" />
      <rect x="130" y="70" rx="3" ry="3" width="100" height="20" />
      <rect x="240" y="70" rx="3" ry="3" width="100" height="20" />
      <rect x="350" y="70" rx="3" ry="3" width="100" height="20" />
      <rect x="20" y="110" rx="5" ry="5" width="760" height="80" />
      <circle cx="50" cy="125" r="15" />
      <rect x="80" y="120" rx="3" ry="3" width="120" height="10" />
      <rect x="220" y="120" rx="3" ry="3" width="50" height="15" />
      <rect x="280" y="120" rx="3" ry="3" width="150" height="10" />
      <rect x="450" y="120" rx="3" ry="3" width="50" height="15" />
      <rect x="510" y="120" rx="3" ry="3" width="150" height="10" />
      <rect x="680" y="120" rx="3" ry="3" width="80" height="20" />
      <rect x="220" y="150" rx="3" ry="3" width="280" height="10" />
      <rect x="520" y="150" rx="3" ry="3" width="80" height="10" />
      <rect x="680" y="150" rx="3" ry="3" width="80" height="20" />
      <rect x="20" y="210" rx="5" ry="5" width="760" height="80" />
      <circle cx="50" cy="225" r="15" />
      <rect x="80" y="220" rx="3" ry="3" width="120" height="10" />
      <rect x="220" y="220" rx="3" ry="3" width="50" height="15" />
      <rect x="280" y="220" rx="3" ry="3" width="150" height="10" />
      <rect x="450" y="220" rx="3" ry="3" width="50" height="15" />
      <rect x="510" y="220" rx="3" ry="3" width="150" height="10" />
      <rect x="680" y="220" rx="3" ry="3" width="80" height="20" />
      <rect x="220" y="250" rx="3" ry="3" width="280" height="10" />
      <rect x="520" y="250" rx="3" ry="3" width="80" height="10" />
      <rect x="680" y="250" rx="3" ry="3" width="80" height="20" />
      <rect x="20" y="310" rx="5" ry="5" width="760" height="80" />
      <circle cx="50" cy="325" r="15" />
      <rect x="80" y="320" rx="3" ry="3" width="120" height="10" />
      <rect x="220" y="320" rx="3" ry="3" width="50" height="15" />
      <rect x="280" y="320" rx="3" ry="3" width="150" height="10" />
      <rect x="450" y="320" rx="3" ry="3" width="50" height="15" />
      <rect x="510" y="320" rx="3" ry="3" width="150" height="10" />
      <rect x="680" y="320" rx="3" ry="3" width="80" height="20" />
      <rect x="220" y="350" rx="3" ry="3" width="280" height="10" />
      <rect x="520" y="350" rx="3" ry="3" width="80" height="10" />
      <rect x="680" y="350" rx="3" ry="3" width="80" height="20" />
    </ContentLoader>
  )
}

TravelBookingLoader.metadata = {
  name: 'Viral Vaghela',
  github: 'codebyviral',
  description:
    'A loader for travel booking websites showing flight search results',
  filename: 'TravelBookingLoader',
}

export default TravelBookingLoader
