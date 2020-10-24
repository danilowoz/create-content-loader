import React from 'react'
import ContentLoader from 'react-content-loader'

const UpworkJobLoader = props => {
  return (
    <ContentLoader viewBox="0 0 778 116" width={778} height={116} {...props}>
      <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
      <rect x="28" y="29" rx="0" ry="0" width="258" height="32" />
      <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
      <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
      <rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
    </ContentLoader>
  )
}

UpworkJobLoader.metadata = {
  name: 'Ahsan Ullah', // My name
  github: 'IamAhsanMani', // Github username
  description: 'Upwork Job',
  filename: 'UpworkJobLoader',
}

export default UpworkJobLoader
