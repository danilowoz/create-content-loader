import React from 'react'
import ContentLoader from 'react-content-loader'

const GmailLoader = props => {
  return (
    <ContentLoader
      height={40}
      width={1060}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="40" rx="0" ry="0" width="75" height="10" />
      <rect x="10" y="60" rx="0" ry="0" width="75" height="10" />
      <rect x="10" y="100" rx="0" ry="0" width="75" height="10" />
      <rect x="10" y="80" rx="0" ry="0" width="75" height="10" />
      <rect x="10" y="120" rx="0" ry="0" width="75" height="10" />
      <rect x="110" y="40" rx="0" ry="0" width="370" height="125" />
      <rect x="275" y="63" rx="0" ry="0" width="72" height="4" />
      <rect x="430" y="5" rx="5" ry="5" width="75" height="20" />
      <rect x="110" y="10" rx="0" ry="0" width="200" height="15" />
      <rect x="10" y="5" rx="4" ry="4" width="75" height="20" />
      <circle cx="493" cy="54" r="2" />
      <circle cx="497" cy="47" r="7" />
      <circle cx="497" cy="77" r="7" />
      <circle cx="497" cy="107" r="7" />
    </ContentLoader>
  )
}

GmailLoader.metadata = {
  name: 'Caio Davi',
  github: 'caio-davi',
  description: 'Gmail Style',
  filename: 'Gmail',
}

export default GmailLoader
