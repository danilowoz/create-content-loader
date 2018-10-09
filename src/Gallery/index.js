import React from "react"

import "./style.css"
import * as data from "./insertYourLoaderHere"

const renderItem = item => {
  const Component = data[item]
  const { name, github, description, filename } = Component.metadata

  if (!name || !github || !description || !filename) return null

  return (
    <div className="showcase-item" key={`${name}-${github}-${description}`}>
      <Component />

      <div className="showcase-caption">
        <h4>{description}</h4>
        <a href={`https://github.com/${github}`} target="_blank">
          by {name}
        </a>
        <a
          className="source"
          href={`https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/${filename}.js`}
          target="_blank"
        >
          view source
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
    <p className="showcase-legend">
      See others beautifuls and
      <br /> more complex loader.
    </p>
    <div id="gallery" className="showcase-grid">
      {Object.keys(data).map(renderItem)}
    </div>
  </div>
)
