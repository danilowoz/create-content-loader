import React from 'react'
import ContentLoader from 'react-content-loader'

const DevtoCard = () => (
  <ContentLoader viewBox="0 0 400 475" height={475} width={400} speed={2}>
    <circle cx="30" cy="258" r="30" />
    <rect x="75" y="233" rx="4" ry="4" width="100" height="13" />
    <rect x="75" y="260" rx="4" ry="4" width="50" height="8" />
    <rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
    <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
  </ContentLoader>
)

DevtoCard.metadata = {
  name: 'RoyalBhati',
  github: 'royalbhati',
  description: 'Dev.to card',
  filename: 'DevtoCard',
}

export default DevtoCard
