import React from 'react'
import ContentLoader from 'react-content-loader'

const RotatingGallery = props => {
  return (
    <ContentLoader viewBox="0 0 1644 360" height={360} width={1644} speed={1}>
      <rect x="448" y="30" rx="0" ry="0" width="750" height="300" />
      <rect x="239" y="53" rx="0" ry="0" width="643" height="254" />
      <rect x="30" y="76" rx="0" ry="0" width="527" height="208" />
      <rect x="762" y="53" rx="0" ry="0" width="643" height="254" />
      <rect x="1087" y="76" rx="0" ry="0" width="527" height="208" />
    </ContentLoader>
  )
}

RotatingGallery.metadata = {
  name: 'Marius Jørgensen',
  github: 'marjorg',
  description: 'A rotaing gallery',
  filename: 'RotatingGallery',
}

export default RotatingGallery
