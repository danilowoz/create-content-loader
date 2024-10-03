import React from 'react'
import ContentLoader from 'react-content-loader'

const CalendarEventLoader = props => {
  return (
    <ContentLoader
      height={100}
      width={1060}
      backgroundColor="#d9d9d9"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="10" y="10" rx="5" ry="5" width="100" height="20" /> {/* Date */}
      <rect x="120" y="10" rx="5" ry="5" width="200" height="20" /> {/* Event name */}
      <rect x="120" y="40" rx="5" ry="5" width="150" height="15" /> {/* Event details */}
    </ContentLoader>
  )
}

CalendarEventLoader.metadata = {
  name: 'Calendar Event Loader', 
  github: 'elixirika', 
  description: 'Loader for calendar events', 
  filename: 'CalendarEventLoader',
}

export default CalendarEventLoader
