import React from 'react'
import ContentLoader from 'react-content-loader'

const PieChart = props => {
  return (
    <ContentLoader
      viewBox="0 0 400 200"
      height={200}
      width={400}
      speed={2}
      {...props}
    >
      <rect x="100" y="5" rx="0" ry="0" width="200" height="15" />
      <circle cx="140" cy="110" r="70" />
      <rect x="230" y="50" rx="0" ry="0" width="7" height="7" />
      <rect x="250" y="50" rx="0" ry="0" width="30" height="7" />
      <rect x="230" y="64" rx="0" ry="0" width="7" height="7" />
      <rect x="250" y="64" rx="0" ry="0" width="30" height="7" />
      <rect x="230" y="78" rx="0" ry="0" width="7" height="7" />
      <rect x="250" y="78" rx="0" ry="0" width="30" height="7" />
      <rect x="230" y="92" rx="0" ry="0" width="7" height="7" />
      <rect x="250" y="92" rx="0" ry="0" width="30" height="7" />
    </ContentLoader>
  )
}

PieChart.metadata = {
  name: 'Sarah Watanabe', //Names
  github: 'swatana3', //github username
  description: 'This is a pie chart loader.', // Little tagline
  filename: 'PieChart', //filename
}

export default PieChart
