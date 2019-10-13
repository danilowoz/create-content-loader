import React from 'react'
import ContentLoader from 'react-content-loader'

const Catalog = props => (
  <ContentLoader
    height={900}
    width={1360}
    speed={2}
    primaryColor="#7fcaec"
    secondaryColor="#cceaf8"
    {...props}
  >
    {/* <rect x="30" y="20" rx="0" ry="0" width="130" height="23" /> */}
    <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
    <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
    <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
    <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
    <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
    <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
    <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
  </ContentLoader>
)

Catalog.metadata = {
  name: 'Afrizal Fikri',
  github: 'koneko096', // Github username
  description: 'Catalog',
  filename: 'Catalog', // filename of your loader
}

export default Catalog
