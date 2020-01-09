import React from 'react'
import ReactGA from 'react-ga'

import '../style/Header.css'

const pkg = require('../../package.json')

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <h1>
          Create <strong>React Content Loader</strong>
        </h1>
      </div>

      <p className="app-assign__stars">
        <a
          className="github-button"
          href="https://github.com/danilowoz/react-content-loader"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star danilowoz/react-content-loader on GitHub"
          target="_blank"
          without=""
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Creator',
              action: `go to react-content-loader on Github`,
            })
          }}
        >
          react-content-loader@{pkg.dependencies['react-content-loader']}
        </a>
        <a
          className="github-button"
          href="https://github.com/danilowoz/create-content-loader"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star danilowoz/create-content-loader on GitHub"
          target="_blank"
          without=""
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Creator',
              action: `go to create-content-loader on Github`,
            })
          }}
        >
          create-content-loader@{pkg.version}
        </a>
      </p>

      <p className="app-react_europe">
        Come learn about react-content-loader at{' '}
        <a
          href="https://www.react-europe.org/"
          target="_blank"
          without=""
          rel="noopener noreferrer"
        >
          ReactEurope
        </a>
      </p>
    </div>
  )
}

export default Header
