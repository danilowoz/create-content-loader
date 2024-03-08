import React from "react"
import ContentLoader from "react-content-loader"

const ShoppingLoader = props => {
  return (
    <ContentLoader
      speed={2}
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f3e7e7"
    foregroundColor="#c7cdea"
    {...props}
  >
    <rect x="12" y="35" rx="0" ry="0" width="6" height="246" /> 
    <rect x="14" y="34" rx="0" ry="0" width="408" height="6" /> 
    <rect x="416" y="34" rx="0" ry="0" width="6" height="246" /> 
    <rect x="12" y="276" rx="0" ry="0" width="408" height="6" /> 
    <rect x="36" y="67" rx="0" ry="0" width="151" height="137" /> 
    <rect x="37" y="211" rx="0" ry="0" width="47" height="36" /> 
    <rect x="87" y="211" rx="0" ry="0" width="47" height="36" /> 
    <rect x="138" y="211" rx="0" ry="0" width="47" height="36" /> 
    <circle cx="234" cy="96" r="28" /> 
    <rect x="278" y="79" rx="0" ry="0" width="124" height="9" /> 
    <rect x="279" y="99" rx="0" ry="0" width="125" height="8" /> 
    <rect x="222" y="140" rx="0" ry="0" width="188" height="11" /> 
    <rect x="222" y="167" rx="0" ry="0" width="188" height="11" /> 
    <rect x="218" y="207" rx="0" ry="0" width="69" height="28" /> 
    <rect x="298" y="208" rx="0" ry="0" width="71" height="27" /> 
    <circle cx="392" cy="221" r="14" />
    </ContentLoader>
  )
}

ShoppingLoader.metadata = {
  name: 'Nitish sharma',
  github: 'Nitz2611',
  description: 'A loading skeleton for shopping website',
  filename:'ShoppingLoader' 
}

export default ShoppingLoader
