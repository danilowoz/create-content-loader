import React from 'react'
import ContentLoader from 'react-content-loader'

const HackerNewsLoader = props => (
  <ContentLoader
    speed={1}
    width={340}
    height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f6f6ef"
    foregroundColor="#e8e8e3"
    {...props}
  >
    <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
    <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
    <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
    <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
    <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
  </ContentLoader>
)

HackerNewsLoader.metadata = {
  name: 'Justin Irabor',
  github: 'vunderkind',
  description: 'A loading skeleton for your HackerNews clone.',
  filename: 'HackerNewsLoader',
}

export default HackerNewsLoader
