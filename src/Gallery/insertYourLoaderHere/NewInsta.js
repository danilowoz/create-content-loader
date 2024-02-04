import React from 'react'
import ContentLoader from 'react-content-loader'

const NewInsta = props => {
  return (
    <ContentLoader
      speed={1}
      width={460}
      height={490}
      viewBox="0 0 460 490"
      backgroundColor="#f3e7e7"
      foregroundColor="#c7cdea"
      {...props}
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="223" height="9" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="0" y="60" rx="2" ry="2" width="308" height="308" />
      <rect x="6" y="386" rx="0" ry="0" width="130" height="9" />
      <rect x="6" y="403" rx="0" ry="0" width="282" height="9" />
    </ContentLoader>
  )
}

NewInsta.metadata = {
  name: 'Nitish',
  github: 'Nitz2611',
  description: 'Loder for new instagram',
  filename: 'NewInsta',
}

export default NewInsta
