import React from 'react'
import ContentLoader from 'react-content-loader'

const ItemCard = props => {
  return (
    <ContentLoader
    viewBox="0 0 500 300"
    width={500}
    height={300}
    {...props}
    primaryColor="#d9d9d9"
    secondaryColor="#a5a2a2"
  >
    <circle cx="35" cy="47" r="20" />
    <rect x="69" y="30" rx="2" ry="2" width="275" height="15" />
    <rect x="69" y="50" rx="2" ry="2" width="140" height="15" />
    <rect x="16" y="80" rx="0" ry="0" width="450" height="250" />
  </ContentLoader>
  )
}


ItemCard.metadata = {
    name: 'Rounak Kumar Jha',
    github: 'ROUNAK-K-JHA-2002',
    description: 'Item card with photo, title , subtitle , description',
    filename: 'ItemCard',
  }

export default ItemCard
