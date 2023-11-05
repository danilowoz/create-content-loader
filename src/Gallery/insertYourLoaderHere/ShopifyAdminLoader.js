import React from "react"
import ContentLoader from "react-content-loader"

const ShopifyAdminLoader = props => {
  return (
<ContentLoader 
    speed={2}
    width={600}
    height={320}
    viewBox="0 0 600 320"
    backgroundColor="#d6d6d6"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="19" rx="7" ry="7" width="132" height="30" /> 
    <rect x="412" y="21" rx="5" ry="5" width="127" height="29" /> 
    <rect x="34" y="199" rx="5" ry="5" width="127" height="29" /> 
    <rect x="33" y="122" rx="5" ry="5" width="512" height="13" /> 
    <rect x="33" y="144" rx="5" ry="5" width="465" height="12" /> 
    <rect x="32" y="102" rx="5" ry="5" width="512" height="13" /> 
    <rect x="33" y="242" rx="5" ry="5" width="512" height="13" /> 
    <rect x="34" y="265" rx="5" ry="5" width="512" height="13" /> 
    <rect x="34" y="287" rx="5" ry="5" width="465" height="12" />
  </ContentLoader>
  )
}

ShopifyAdminLoader.metadata = {
  name: "Fayed Ishtar Chowdhury", // My name
  github: esterified, // Github username
  description: "A simple skeeleton for grid skeelton similar to Shopify Admin", // Little tagline
  filename: TestLoader // filename of your loader
}

export default ShopifyAdminLoader