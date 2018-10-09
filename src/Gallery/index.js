import React from "react"

import "./style.css"
import * as data from "./insertYourLoaderHere"

const renderItem = item => {
  const Component = data[item]
  const { name, github, description } = Component.metadata

  if (!name || !github || !description) return null

  return (
    <div className="showcase-item" key={`${name}-${github}-${description}`}>
      <Component />

      <div className="showcase-caption">
        <h4>{description}</h4>
        <a href={`https://github.com/${github}`} target="_blank">
          by {name}
        </a>
      </div>
    </div>
  )
}

export default () => (
  <div className="showcase">
    <p className="showcase-button">
      <a href="#gallery">Need inspiration?</a>
    </p>
    <div id="gallery" className="showcase-grid">
      {Object.keys(data).map(renderItem)}
    </div>
  </div>
)
