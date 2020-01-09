import React from 'react'
import ContentLoader from 'react-content-loader'

const HomePage = () => (
  <ContentLoader height={300} width={500} speed={2}>
    <rect x="0" y="8" rx="0" ry="0" width="40" height="18" />
    <circle cx="492" cy="16" r="8" />
    <circle cx="472" cy="16" r="8" />
    <rect x="362" y="8" rx="7" ry="7" width="96" height="16" />

    <rect x="0" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="50" y="39" rx="0" ry="0" width="36" height="8" />
    <rect x="102" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="152" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="202" y="39" rx="0" ry="0" width="36" height="8" />
    <rect x="254" y="39" rx="0" ry="0" width="34" height="8" />

    <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

    <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

    <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
  </ContentLoader>
)

HomePage.metadata = {
  name: 'JAvlonbek Rakhimberdiev', // My name
  github: 'RJavlonbek', // Github username
  description: 'This is a placeholder for the home page of my Fintech project', // Little tagline
  filename: 'HomePage', // filename of your loader
}

export default HomePage
