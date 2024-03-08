import React from 'react'
import ContentLoader from 'react-content-loader'

const CleoOne = ({ ...rest }) => (
  <ContentLoader height="230" width="265" viewBox="0 0 265 230" {...rest}>
    <rect x="15" y="15" rx="4" ry="4" width="200" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="40" height="15" />
    <rect x="75" y="45" rx="16" ry="16" width="55" height="22" />
    <rect x="15" y="75" rx="3" ry="3" width="215" height="15" />
    <rect x="15" y="105" rx="3" ry="3" width="50" height="15" />
    <rect x="75" y="105" rx="3" ry="3" width="50" height="15" />
    <rect x="135" y="105" rx="3" ry="3" width="50" height="15" />
    <rect x="15" y="135" rx="16" ry="16" width="55" height="22" />
    <rect x="15" y="165" rx="2" ry="2" width="150" height="50" />
    <rect x="215" y="180" rx="2" ry="2" width="40" height="20" />
  </ContentLoader>
)

CleoOne.metadata = {
  name: 'Yusuf Özlü',
  github: 'ozluy',
  description: 'Dashboard strategy item on CLEO.one(https://cleo.one).',
  filename: 'CleoOne',
}

export default CleoOne
