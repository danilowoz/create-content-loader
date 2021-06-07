import React from "react"
import ContentLoader from "react-content-loader"

const CheckboxList = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="35" y="10" rx="5" ry="5" width="150" height="10" /> 
    <rect x="35" y="45" rx="5" ry="5" width="150" height="10" /> 
    <rect x="35" y="80" rx="5" ry="5" width="150" height="10" /> 
    <rect x="35" y="115" rx="5" ry="5" width="150" height="10" /> 
    <rect x="3" y="5" rx="4" ry="4" width="20" height="20" /> 
    <rect x="3" y="40" rx="4" ry="4" width="20" height="20" /> 
    <rect x="3" y="75" rx="4" ry="4" width="20" height="20" /> 
    <rect x="3" y="110" rx="4" ry="4" width="20" height="20" />
  </ContentLoader>
)

CheckboxList.metadata = {
    name: 'Manuela Garcia',
    github: 'ManuelaGar',
    description: 'This is a checkbox list loader.',
    filename: 'CheckboxList',
  }

export default CheckboxList