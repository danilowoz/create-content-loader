import React from "react"
import ContentLoader from "react-content-loader"

const Twitter = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={340}
    viewBox="0 0 476 340"
    backgroundColor="#cfe8f7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="5" rx="3" ry="3" width="110" height="8" /> 
    <rect x="48" y="28" rx="3" ry="3" width="410" height="6" /> 
    <rect x="48" y="48" rx="3" ry="3" width="380" height="6" /> 
    <rect x="48" y="68" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" /> 
    <rect x="48" y="98" rx="24" ry="24" width="423" height="230" />
  </ContentLoader>
)

Twitter.metadata = {
  name: 'Sagi', // My name
  github: 'sagi403', // Github username
  description: 'Twitter generic text with image', // Little tagline
  filename: 'Twitter', // filename of your loader
}

export default Twitter

