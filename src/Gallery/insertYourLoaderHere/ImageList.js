import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => {
  let height, width
  switch (props.screen) {
    case 'mobile': {
      height = '100'
      width = '400'
      break
    }
    case 'desktop': {
      height = '100'
      width = '1060'
      break
    }
    case 'large-screen': {
      height = '150'
      width = '1920'
      break
    }
    default: {
      height = '100'
      width = '1060'
      break
    }
  }
  return (
    <ContentLoader
      height={height}
      width={width}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      {props.imageType === 'circle' ? (
        <circle cx="60" cy="45" r="30" />
      ) : (
        <rect x="20" y="20" rx="5" ry="5" width="64" height="63" />
      )}
      <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
      <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
      <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
    </ContentLoader>
  )
}

const ImageList = () => (
  <React.Fragment>
    {Array(5)
      .fill('')
      .map((e, i) => (
        <Loader
          screen="desktop"
          key={i}
          style={{ opacity: Number(2 / i).toFixed(1) }}
        />
      ))}
  </React.Fragment>
)

ImageList.metadata = {
  name: 'Gaurav Agarwal',
  github: 'gauravagarwal2704',
  description: 'List with image (rectangle/circle)',
  filename: 'ImageList',
}

export default ImageList
