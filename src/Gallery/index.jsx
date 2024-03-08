import React from 'react'
import ContentLoader from 'react-content-loader'
import ReactGA from 'react-ga'

import './style.css'
import * as data from './insertYourLoaderHere'

const renderItem = (item, index) => {
  const Component = data[item]
  const { name, github, description, filename } = Component.metadata

  if (!name || !github || !description || !filename) return null

  return (
    <div className="showcase-item" key={`${name}-${github}-${description}`}>
      <div className="showcase-component">
        <Component uniqueKey={`loading-${index}`} />
      </div>

      <div className="showcase-caption">
        <h4>
          {description}{' '}
          <a
            rel="noopener noreferrer"
            href={`https://github.com/${github}`}
            target="_blank"
            onClick={() => {
              ReactGA.event({
                category: 'Gallery',
                action: `click username`,
                label: name,
              })
            }}
          >
            by {name}
          </a>
        </h4>

        <a
          className="source"
          href={`https://github.com/danilowoz/create-content-loader/blob/master/src/Gallery/insertYourLoaderHere/${filename}.js`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Gallery',
              action: `view source`,
              label: filename,
            })
          }}
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
      onClick={() => {
        ReactGA.event({
          category: 'Gallery',
          action: `create a new loader`,
        })
      }}
    >
      Insert your loader
    </a>

    <ContentLoader
      height={461}
      width={559}
      className="showcase-item__new-loader"
      viewBox="0 0 559 461"
    >
      <rect x="0" y="402" rx="8" ry="8" width="172" height="18" />
      <rect x="0" y="448" rx="8" ry="8" width="123" height="13" />
      <rect x="430" y="410" rx="8" ry="8" width="123" height="13" />
      <rect x="0" y="378" rx="0" ry="0" width="559" height="2" />
    </ContentLoader>
  </div>
)

const Gallery = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const arrData = Object.keys(data)

  const filteredData = arrData.filter(item => {
    const Component = data[item]
    const { name, github, description } = Component.metadata

    return (
      name.toLowerCase().indexOf(searchQuery) !== -1 ||
      github.toLowerCase().indexOf(searchQuery) !== -1 ||
      description.toLowerCase().indexOf(searchQuery) !== -1
    )
  })

  return (
    <div className="showcase">
      <div className="showcase-filter">
        <p className="showcase-filter__results">
          <a href="#gallery">{filteredData.length} results from community </a>
        </p>

        <input
          placeholder="Search..."
          value={searchQuery}
          onChange={({ target: { value } }) => setSearchQuery(value)}
        />
      </div>
      <div id="gallery" className="showcase-grid">
        <NewItem />
        {filteredData.map(renderItem)}
      </div>
    </div>
  )
}

export default Gallery
