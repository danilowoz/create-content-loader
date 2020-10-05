import React from 'react'
import ContentLoader from 'react-content-loader'

const NotificationLoader = props => {
  return (
    <ContentLoader
      
      width={350}
      height={600}
      viewBox="0 0 350 600"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="4" y="8" rx="3" ry="3" width="8" height="570" />
      <rect x="5" y="573" rx="3" ry="3" width="331" height="7" />
      <rect x="329" y="9" rx="3" ry="3" width="8" height="570" />
      <rect x="102" y="69" rx="3" ry="3" width="102" height="7" />
      <rect x="92" y="47" rx="3" ry="3" width="178" height="6" />
      <circle cx="48" cy="63" r="18" />
      <rect x="95" y="95" rx="3" ry="3" width="178" height="6" />
      <rect x="105" y="169" rx="3" ry="3" width="102" height="7" />
      <rect x="95" y="147" rx="3" ry="3" width="178" height="6" />
      <circle cx="51" cy="163" r="18" />
      <rect x="98" y="195" rx="3" ry="3" width="178" height="6" />
      <rect x="107" y="265" rx="3" ry="3" width="102" height="7" />
      <rect x="97" y="243" rx="3" ry="3" width="178" height="6" />
      <circle cx="53" cy="259" r="18" />
      <rect x="100" y="291" rx="3" ry="3" width="178" height="6" />
      <rect x="108" y="365" rx="3" ry="3" width="102" height="7" />
      <rect x="98" y="343" rx="3" ry="3" width="178" height="6" />
      <circle cx="54" cy="359" r="18" />
      <rect x="101" y="391" rx="3" ry="3" width="178" height="6" />
      <rect x="110" y="458" rx="3" ry="3" width="102" height="7" />
      <rect x="100" y="436" rx="3" ry="3" width="178" height="6" />
      <circle cx="56" cy="452" r="18" />
      <rect x="103" y="484" rx="3" ry="3" width="178" height="6" />
      <rect x="114" y="507" rx="3" ry="3" width="102" height="7" />
      <rect x="103" y="534" rx="3" ry="3" width="178" height="6" />
      <rect x="5" y="8" rx="3" ry="3" width="331" height="7" />
    </ContentLoader>
  )
}

NotificationLoader.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Notification section',
  filename: 'NotificationLoader',
}

export default NotificationLoader
