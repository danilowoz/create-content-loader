import React from 'react'
import ContentLoader from 'react-content-loader'

import './style.css'
import * as data from './insertYourLoaderHere'

const renderItem = item => {
  const Component = data[item]
  const { name, github, description, filename } = Component.metadata

  if (!name || !github || !description || !filename) return null

  return (
    <div className="showcase-item" key={`${name}-${github}-${description}`}>
      <div className="showcase-component">
        <Component />
      </div>

      <div className="showcase-caption">
        <h4>
          {description}{' '}
          <a
            rel="noopener noreferrer"
            href={`https://github.com/${github}`}
            target="_blank"
          >
            by {name}
          </a>
        </h4>

        <a
          className="source"
          href={`https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/${filename}.js`}
          target="_blank"
          rel="noopener noreferrer"
        >
          view source
        </a>
      </div>
    </div>
  )
}

const NewItem = () => (
  <div className="showcase-item showcase-item__new">
    <a
      href="https://github.com/danilowoz/create-content-loader/wiki/How-to-insert-your-loader-at-gallery"
      target="_blank"
      rel="noopener noreferrer"
    >
      Insert your loader
    </a>

    <ContentLoader
      height={465}
      width={600}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      className="showcase-item__new-loader"
    >
      <rect x="0" y="402" rx="8" ry="8" width="172" height="18" />
      <rect x="0" y="448" rx="8" ry="8" width="123" height="13" />
      <rect x="430" y="410" rx="8" ry="8" width="123" height="13" />
      <rect x="0" y="378" rx="0" ry="0" width="559" height="2" />
    </ContentLoader>
  </div>
)

export default () => (
  <div className="showcase">
    <p className="showcase-button">
      <a href="#gallery">Need inspiration?</a>
    </p>
    <p className="showcase-legend">Be inspired by other amazing loaders</p>
    <div id="gallery" className="showcase-grid">
      {Object.keys(data).map(renderItem)}

      <NewItem />
    </div>
  </div>
)
