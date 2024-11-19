import React from "react"
import ContentLoader from "react-content-loader"



const SkeletonBarChart = (props) => (
  <ContentLoader
    speed={2}
    width={285}
    height={248}
    viewBox="0 0 285 248"
    backgroundColor="var(--color-primary)"
    foregroundColor="var(--color-secondary)"
    {...props}
  >
    <rect x="64" y="159" rx="0" ry="0" width="21" height="72" />
    <rect x="115" y="124" rx="0" ry="0" width="20" height="106" />
    <rect x="165" y="61" rx="0" ry="0" width="20" height="169" />
    <rect x="216" y="50" rx="0" ry="0" width="20" height="180" />
    <rect x="265" y="46" rx="0" ry="0" width="21" height="184" />
    <rect x="313" y="61" rx="0" ry="0" width="22" height="169" />
    <rect x="52" y="230" rx="0" ry="0" width="287" height="2" />
    <rect x="51" y="36" rx="0" ry="0" width="2" height="196" />
    <rect x="116" y="0" rx="6" ry="6" width="117" height="9" />
    <rect x="3" y="34" rx="5" ry="5" width="40" height="6" />
    <rect x="2" y="79" rx="5" ry="5" width="40" height="6" />
    <rect x="1" y="129" rx="5" ry="5" width="40" height="6" />
    <rect x="0" y="176" rx="5" ry="5" width="40" height="6" />
    <rect x="2" y="220" rx="5" ry="5" width="40" height="6" />
    <rect x="151" y="240" rx="5" ry="5" width="40" height="6" />
    <rect x="244" y="241" rx="5" ry="5" width="40" height="6" />
    <rect x="64" y="241" rx="5" ry="5" width="40" height="6" />
  </ContentLoader>
)
SkeletonBarChart.metadata = {
  name: 'Luis Valencia', // My name
  github: 'LuiggiVal08', // Github username
  description: 'Bar Chart and Context', // Little tagline
  filename: 'SkeletonBarChart' // filename of your loader
}
export default SkeletonBarChart
