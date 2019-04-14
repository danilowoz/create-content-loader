import React from 'react'
import { Tooltip } from 'react-tippy'

export default ({ title, children }) => (
  <Tooltip
    animation="shift"
    arrow
    distance={25}
    interactive
    size="small"
    title={title}
    trigger="mouseenter"
  >
    {children}
  </Tooltip>
)
