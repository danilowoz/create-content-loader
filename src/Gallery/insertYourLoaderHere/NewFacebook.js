import React from 'react'
import ContentLoader from 'react-content-loader'

const NewFacebookLoader = props => {
  return (
    <ContentLoader viewBox="0 0 600 160" height={160} width={600} {...props}>
      <rect x="-16" y="33" rx="4" ry="4" width="129" height="6" />
      <rect x="0" y="48" rx="3" ry="3" width="113" height="6" />
      <rect x="24" y="79" rx="3" ry="3" width="424" height="7" />
      <rect x="24" y="99" rx="3" ry="3" width="422" height="7" />
      <rect x="24" y="120" rx="3" ry="3" width="424" height="7" />
      <circle cx="528" cy="48" r="30" />
    </ContentLoader>
  )
}

NewFacebookLoader.metadata = {
  name: 'Ines Guerrero Sirker',
  github: 'inesgs12',
  description: 'Edited Facebook',
  filename: 'NewFacebookLoader',
}

export default NewFacebookLoader
