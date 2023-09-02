import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const ChartyAxisOnRight = props => {
  return(
    <ContentLoader 
      speed={1.5}
      width={400}
      height={180}
      viewBox="0 0 400 180"
      backgroundColor="#eaeced"
      foregroundColor="#ffffff"
      {...props}
    >
      <Rect x="9" y="0" rx="5" ry="5" width="347" height="180" /> 
      <Rect x="131" y="82" rx="0" ry="0" width="24" height="0" /> 
      <Rect x="363" y="31" rx="5" ry="5" width="30" height="12" /> 
      <Rect x="363" y="59" rx="5" ry="5" width="30" height="12" /> 
      <Rect x="363" y="87" rx="5" ry="5" width="30" height="12" /> 
      <Rect x="363" y="167" rx="5" ry="5" width="30" height="12" /> 
      <Rect x="363" y="3" rx="5" ry="5" width="30" height="12" /> 
      <Rect x="363" y="138" rx="5" ry="5" width="30" height="12" /> 
      <Rect x="363" y="114" rx="5" ry="5" width="30" height="12" />
    </ContentLoader>
  )
}


ChartyAxisOnRight.metadata = {
  name: 'Erfin Badriansyah',
  github: 'erfinbadrian',
  description: 'Chart with yAxis on right',
  filename: 'ChartyAxisOnRight',
}

export default ChartyAxisOnRight
