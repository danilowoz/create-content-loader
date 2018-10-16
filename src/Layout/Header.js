import React, { Component } from "react"
import ContentLoader from "react-content-loader"

import "../style/Header.css"

const MyLoader = props => (
  <ContentLoader
    height={110}
    width={640}
    speed={2}
    primaryColor="#faf9fc"
    secondaryColor="#f4f3f6"
    {...props}
  >
    <rect x="125" y="3" rx="10" ry="10" width="405.1" height="25.08" />
    <rect x="10" y="61" rx="8" ry="8" width="626.4" height="20" />
    <rect x="33" y="92.05" rx="8" ry="8" width="583.15" height="20" />
  </ContentLoader>
)

class Header extends Component {
  state = {
    loader: true
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000)
    this.setState({ intervalId })
    setTimeout(() => {
      this.setState({ loader: false })
    }, 3000)
  }

  render() {
    const { loader } = this.state
    return (
      <div className="app-header">
        {loader ? (
          <MyLoader className="app-header__loader" />
        ) : (
          <div className="app-header__loaded">
            <h1>
              Create <strong>React Content Loader</strong>
            </h1>
            <h2>
              Have you heard about{" "}
              <a href="https://github.com/danilowoz/react-content-loader">
                react-content-loader
              </a>
              ? It&#39;s a SVG component to create <br />
              placeholder loading, like Facebook cards loading or also known as
              skeleton UI.
            </h2>
          </div>
        )}
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
            react-content-loader
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
            create-content-loader
          </a>

          <a
            href="https://github.com/danilowoz"
            target="_blank"
            without=""
            rel="noopener noreferrer"
            className="app-assign__by"
          >
            by @danilowoz
          </a>
        </p>
      </div>
    )
  }
}

export default Header
