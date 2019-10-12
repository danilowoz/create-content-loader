import React from 'react'
import ContentLoader from 'react-content-loader'

const UpworkJobLoader = props => {
  return (
    <ContentLoader 
        height={200}
        width={800}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
    >
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
  description: 'Upwork Job Loader',
  filename: 'UpworkJobLoader',
}

export default UpworkJobLoader
