import React from 'react'
import ContentLoader from 'react-content-loader'

const HeaderLoader = props => {
  return (
    <ContentLoader
      height={400}
      width={400}
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
      {...props}
    >
        <rect x="0" y="20" rx="0" ry="0" width="280" height="100" /> 
        <circle cx="140" cy="120" r="50" />
        <rect x="290" y="20" rx="0" ry="0" width="100" height="50" /> 
        <rect x="290" y="75" rx="0" ry="0" width="70" height="5" />
        <rect x="290" y="85" rx="0" ry="0" width="40" height="6" />
    </ContentLoader>
  )
}

HeaderLoader.metadata = {
  name: 'Jose Romero', // My name
  github: 'JosenRomero', // Github username
  description: 'Simple Header', // Little tagline
  filename: 'HeaderLoader', // filename of your loader
}

export default HeaderLoader