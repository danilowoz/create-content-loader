import React from 'react'
import ReactGA from 'react-ga'

import '../style/Header.css'
import Helmet from 'react-helmet'

const pkg = require('../../../package.json')

const Header = () => {
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="ibxr-uwM6QNCm6n4Njh3W06P8Y5OH-JTwHwjZZvy7oo"
        />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Helmet>
      <div className="app-header">
        <div className="app-header__logo">
          <h1>
            Create <strong>React Content Loader</strong>
            <span>{pkg.dependencies['react-content-loader']}</span>
          </h1>
          <h2>
            Tool to easily create your animated skeleton-screen components,
            replacing usual loading and delivering better experiences for users,
            giving a wireframe of your pages like placeholders boxes for content
            and images. Supports React, React Native, Vue, and vanilla HTML.
          </h2>
        </div>

        <div className="app-header__aside">
          <a
            className="donate-button"
            href="https://ko-fi.com/danilowoznica"
            target="_blank"
          >
            👋 Buy me a coffee
          </a>

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
        </div>
      </div>
    </>
  )
}

export default Header
