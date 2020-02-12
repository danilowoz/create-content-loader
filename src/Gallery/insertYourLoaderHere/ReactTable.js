import React from 'react'
import ContentLoader from 'react-content-loader'

const ReactTable = () => {
  return (
    <ContentLoader width={400} height={311} speed={2} viewBox="0 0 400 311">
      <rect x="0" y="0" rx="0" ry="0" width="400" height="1" />
      <rect x="0" y="19" rx="0" ry="0" width="400" height="1" />
      <rect x="0" y="24" rx="0" ry="0" width="400" height="3" />
      <rect x="0" y="31" rx="0" ry="0" width="23" height="3" />
      <rect x="0" y="43" rx="0" ry="0" width="199" height="1" />
      <rect x="200" y="43" rx="0" ry="0" width="200" height="1" />
      <rect x="0" y="54" rx="0" ry="0" width="199" height="1" />
      <rect x="200" y="54" rx="0" ry="0" width="200" height="1" />
      <rect x="0" y="67" rx="0" ry="0" width="199" height="1" />
      <rect x="200" y="67" rx="0" ry="0" width="200" height="1" />
      <rect x="0" y="80" rx="0" ry="0" width="199" height="1" />
      <rect x="200" y="80" rx="0" ry="0" width="200" height="1" />
      <rect x="32" y="5" rx="0" ry="0" width="10" height="10" />
      <rect x="86" y="5" rx="0" ry="0" width="10" height="10" />
      <rect x="170" y="5" rx="0" ry="0" width="10" height="10" />
      <rect x="239" y="5" rx="0" ry="0" width="10" height="10" />
      <rect x="341" y="5" rx="0" ry="0" width="41" height="10" />
    </ContentLoader>
  )
}

ReactTable.metadata = {
  name: 'Fouad Khatib', // My name
  github: 'fouadkb', // Github username
  description: 'React-table Loader with Pagination and search', // Little tagline
  filename: 'ReactTable', // filename of your loader
}

export default ReactTable
