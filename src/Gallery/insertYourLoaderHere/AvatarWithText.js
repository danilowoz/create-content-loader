import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="110" y="21" rx="4" ry="4" width="254" height="6" /> 
    <rect x="111" y="41" rx="3" ry="3" width="185" height="7" /> 
    <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" /> 
    <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" /> 
    <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" /> 
    <circle cx="48" cy="48" r="48" />
  </ContentLoader>
)

MyLoader.metadata = {
  name: 'Akash Bambhaniya',
  github: 'Akashnb', // Github username
  description: 'Avatar With Text (circle)',
  filename: 'AvatarWithText', // filename of your loader
}

export default MyLoader;
