import React from 'react'
import ContentLoader from 'react-content-loader'

const ThreeDots = () => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    speed={2}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)

ThreeDots.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
}

export default ThreeDots
