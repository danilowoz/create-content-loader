import React from "react"
import ContentLoader from "react-content-loader"

const XYChart = props => {
  return (
    <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="15" y="53" rx="0" ry="0" width="25" height="90" /> 
    <rect x="45" y="29" rx="0" ry="0" width="25" height="115" /> 
    <rect x="75" y="93" rx="0" ry="0" width="25" height="50" /> 
    <rect x="105" y="43" rx="0" ry="0" width="25" height="100" /> 
    <rect x="135" y="28" rx="0" ry="0" width="25" height="115" /> 
    <rect x="165" y="33" rx="0" ry="0" width="25" height="110" /> 
    <rect x="195" y="94" rx="0" ry="0" width="25" height="50" /> 
    <rect x="10" y="143" rx="0" ry="0" width="230" height="3" /> 
    <rect x="10" y="5" rx="0" ry="0" width="3" height="140" />
  </ContentLoader>
  )
}

XYChart.metadata = {
  name: XYChart, // My name
  github: @ankursehdev, // Github username
  description: XY Chart Loading, // Little tagline
  filename: XYChart.js // filename of your loader
}

export default XYChart

