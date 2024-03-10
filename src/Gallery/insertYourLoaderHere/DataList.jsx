import React from 'react'
import ContentLoader from 'react-content-loader'

const DataList = props => {
  return (
    <ContentLoader
      width={730}
      height={304}
      primaryColor="#e4e4e4"
      secondaryColor="#d3d3d3"
      {...props}
    >
      <rect x="583" y="33" rx="2" ry="2" width="123" height="33" />
      <rect x="66" y="49" rx="0" ry="0" width="165" height="11" />
      <rect x="66" y="97" rx="0" ry="0" width="202" height="41" />
      <rect x="284" y="97" rx="0" ry="0" width="202" height="41" />
      <rect x="506" y="96" rx="0" ry="0" width="202" height="41" />
      <rect x="66" y="155" rx="0" ry="0" width="642" height="4" />
      <rect x="66" y="175" rx="0" ry="0" width="642" height="4" />
      <rect x="65" y="195" rx="0" ry="0" width="642" height="4" />
      <rect x="66" y="215" rx="0" ry="0" width="642" height="4" />
      <rect x="66" y="236" rx="0" ry="0" width="642" height="4" />
      <rect x="65" y="256" rx="0" ry="0" width="642" height="4" />
      <rect x="315" y="274" rx="0" ry="0" width="31" height="28" />
      <rect x="356" y="274" rx="0" ry="0" width="31" height="28" />
      <rect x="396" y="274" rx="0" ry="0" width="31" height="28" />
    </ContentLoader>
  )
}

DataList.metadata = {
  name: 'Bilal Ahmed',
  github: 'bilal-ahmed-dev',
  description: 'Simple CRUD Data in Table format',
  filename: 'DataList',
}

export default DataList
