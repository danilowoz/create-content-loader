import React from "react"

import "../style/Header.css"

const pkg = require("../../package.json")

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <h1>
          Create <strong>React Content Loader</strong>
        </h1>

        <a
          href="https://github.com/danilowoz"
          target="_blank"
          without=""
          rel="noopener noreferrer"
          className="app-assign__by"
        >
          by @danilowoz
        </a>
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
        >
          react-content-loader@{pkg.dependencies["react-content-loader"]}
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
        >
          create-content-loader@{pkg.version}
        </a>
      </p>
    </div>
  )
}

export default Header
