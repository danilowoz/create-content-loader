import React from 'react'
import ContentLoader from 'react-content-loader'

const CleanChat = props => {
  return (
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="12" rx="5" ry="5" width="220" height="10" />
      <rect x="0" y="29" rx="5" ry="5" width="220" height="10" />
      <rect x="179" y="76" rx="5" ry="5" width="220" height="10" />
      <rect x="179" y="58" rx="5" ry="5" width="220" height="10" />
      <rect x="0" y="104" rx="5" ry="5" width="220" height="10" />
      <rect x="0" y="122" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  )
}

CleanChat.metadata = {
  name: 'Pablo Maribondo',
  github: 'pablomaribondo',
  description: 'Clean Chat Loader',
  filename: 'CleanChat',
}

export default CleanChat
