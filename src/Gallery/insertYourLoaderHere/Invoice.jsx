import React from 'react'
import ContentLoader from 'react-content-loader'

const Invoice = props => {
  return (
    <ContentLoader viewBox="0 0 476 550" height={550} width={476} {...props}>
      <rect x="11" y="16" rx="5" ry="5" width="98" height="51" />
      <rect x="260" y="36" rx="5" ry="5" width="196" height="6" />
      <rect x="294" y="17" rx="5" ry="5" width="161" height="12" />
      <rect x="225" y="69" rx="5" ry="5" width="229" height="14" />
      <rect x="279" y="47" rx="5" ry="5" width="175" height="6" />
      <rect x="11" y="127" rx="5" ry="5" width="141" height="11" />
      <rect x="263" y="128" rx="5" ry="5" width="173" height="5" />
      <rect x="263" y="138" rx="5" ry="5" width="151" height="4" />
      <rect x="263" y="148" rx="5" ry="5" width="126" height="4" />
      <rect x="11" y="191" rx="5" ry="5" width="198" height="12" />
      <rect x="11" y="207" rx="5" ry="5" width="214" height="14" />
      <rect x="11" y="225" rx="5" ry="5" width="193" height="14" />
      <rect x="376" y="214" rx="5" ry="5" width="76" height="19" />
      <rect x="14" y="274" rx="5" ry="5" width="231" height="6" />
      <rect x="14" y="288" rx="5" ry="5" width="180" height="5" />
      <rect x="11" y="331" rx="5" ry="5" width="194" height="18" />
      <rect x="11" y="358" rx="5" ry="5" width="155" height="18" />
      <rect x="369" y="359" rx="5" ry="5" width="85" height="18" />
      <rect x="405" y="335" rx="5" ry="5" width="50" height="18" />
      <rect x="15" y="424" rx="5" ry="5" width="86" height="4" />
      <rect x="15" y="435" rx="5" ry="5" width="133" height="5" />
      <rect x="340" y="496" rx="5" ry="5" width="114" height="18" />
      <rect x="408" y="482" rx="5" ry="5" width="41" height="3" />
      <rect x="358" y="482" rx="5" ry="5" width="41" height="3" />
    </ContentLoader>
  )
}

Invoice.metadata = {
  name: 'danielerota',
  github: 'danielerota',
  description: 'Invoice',
  filename: 'Invoice',
}

export default Invoice
