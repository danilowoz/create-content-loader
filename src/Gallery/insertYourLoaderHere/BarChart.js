import React from 'react'
import ContentLoader from 'react-content-loader'

const BarChart = props => {
  return (
    <ContentLoader
      speed={2}
      width={340}
      height={200}
      viewBox="0 0 200 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="160" rx="0" ry="0" width="25" height="40" />
      <rect x="30" y="145" rx="0" ry="0" width="25" height="55" />
      <rect x="60" y="126" rx="0" ry="0" width="25" height="74" />
      <rect x="90" y="80" rx="0" ry="0" width="25" height="120" />
      <rect x="120" y="142" rx="0" ry="0" width="25" height="58" />
    </ContentLoader>
  )
}

BarChart.metadata = {
  name: 'Phuong Dao',
  github: 'dao-phuong',
  description: 'Bar Chart',
  filename: 'BarChart',
}

export default BarChart
