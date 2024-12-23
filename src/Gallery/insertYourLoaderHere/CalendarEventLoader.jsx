import React from 'react'
import ContentLoader from 'react-content-loader'

const CalendarEventLoader = props => {
  return (
    <ContentLoader
      height={100}
      width={1060}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="10" y="10" rx="5" ry="5" width="100" height="20" /> {/* Date */}
      <rect x="120" y="10" rx="5" ry="5" width="200" height="20" /> {/* Event name */}
      <rect x="120" y="40" rx="5" ry="5" width="150" height="15" /> {/* Event details */}
    </ContentLoader>
  )
}

CalendarEventLoader.metadata = {
  name: 'Erika', 
  github: 'elixirika', 
  description: 'Loader for calendar events', 
  filename: 'CalendarEventLoader',
}

export default CalendarEventLoader
