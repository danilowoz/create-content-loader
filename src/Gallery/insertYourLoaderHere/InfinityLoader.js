import React from "react"
import ContentLoader from "react-content-loader"

const InfinityLoader = (props) => {
  return(
  <ContentLoader 
    speed={2}
    width={214}
    height={214}
    viewBox="0 0 214 214"
    backgroundColor="#dc3fde"
    foregroundColor="#f80d72"
    {...props}
  >
    <path d="M 72.7 71.5 c -8.8 0 -15.7 -7.3 -22.1 -15.3 c -6.6 8.1 -13.7 15.3 -23.3 15.3 C 14.2 71.5 5 62.7 5 50 s 9.2 -21.5 22.3 -21.5 c 9.4 0 16.6 7.6 23.2 15.9 c 6.4 -8 13.1 -15.6 22 -15.9 h 0.1 C 85 28.5 95 38.1 95 50 c 0 12.3 -11.8 21.5 -22.3 21.5 z M 55.2 50.3 c 5.7 7.1 11.5 13.9 17.5 13.9 c 8.4 0 15 -7.6 15 -14.2 c 0 -7.7 -6.8 -14.1 -14.9 -14.2 c -6.2 0.3 -11.7 7 -17.6 14.5 z M 27.3 35.8 c -9.1 0 -15 5.6 -15 14.2 c 0 8.5 6 14.2 15 14.2 c 6.8 0 12.8 -6.6 18.6 -13.9 c -5.9 -7.4 -12 -14.5 -18.6 -14.5 z" />
  </ContentLoader>
)
}
InfinityLoader.metadata = {
  name: 'Satwik Vinod Bolar',
  github: 'satwikbolar',
  description: 'This is an Infinity Content Loader', // Little tagline
  filename: 'InifinityLoader',
}

export default InfinityLoader
