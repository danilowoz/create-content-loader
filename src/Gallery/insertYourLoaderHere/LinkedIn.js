import React from 'react'
import ContentLoader from 'react-content-loader'

const LinkedInStyle = props => {
  return (
    <ContentLoader
      height={475}
      width={400}
      speed={2}
      primaryColor="#fcfafd"
      secondaryColor="#ecebeb"
      {...props}
    >
      <circle cx="56" cy="35" r="28" />
      <rect x="14" y="81" rx="4" ry="4" width="91" height="8" />
      <rect x="130" y="73" rx="5" ry="5" width="159" height="172" />
      <rect x="96" y="86" rx="0" ry="0" width="0" height="0" />
      <rect x="23" y="103" rx="0" ry="0" width="70" height="6" />
      <rect x="131" y="22" rx="0" ry="0" width="154" height="40" />
      <rect x="286" y="111" rx="0" ry="0" width="0" height="0" />
    </ContentLoader>
  )
}

LinkedInStyle.metadata = {
  name: 'Victoria Mei',
  github: 'vm930',
  description: 'LinkedIn Style',
  filename: 'LinkedIn',
}

export default LinkedInStyle
