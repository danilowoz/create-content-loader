import React, { Component } from "react"
import ContentLoader from "react-content-loader"

const MyLoader = props => (
  <ContentLoader
    height={207}
    width={640}
    speed={2}
    primaryColor="#faf9fc"
    secondaryColor="#f4f3f6"
    {...props}
  >
    <rect x="125" y="3" rx="10" ry="10" width="405.1" height="25.08" />
    <rect x="10" y="61" rx="8" ry="8" width="626.4" height="20" />
    <rect x="33" y="92.05" rx="8" ry="8" width="583.15" height="20" />
    <rect x="101" y="175.05" rx="8" ry="8" width="446.5" height="18" />
    <rect x="84" y="147.05" rx="8" ry="8" width="478.18" height="18" />
  </ContentLoader>
)

class Header extends Component {
  state = {
    highlight: 0,
    loader: true
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 3000)
    this.setState({ intervalId })
    setTimeout(() => {
      this.setState({ loader: false })
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    const { highlight } = this.state
    this.setState({ highlight: highlight === 1 ? 0 : highlight + 1 })
  }

  render() {
    const { highlight, loader } = this.state
    return (
      <div className="app-header">
        {loader ? (
          <MyLoader className="app-header__loader" />
        ) : (
          <div>
            <h1>
              Create{" "}
              <strong>
                <div
                  className={`app-header_framework ${
                    highlight === 1 ? "vue" : ""
                  }`}
                >
                  <span className={`react ${highlight === 0 ? "active" : ""}`}>
                    React
                  </span>
                  <span className={`vue ${highlight === 1 ? "active" : ""}`}>
                    Vue
                  </span>
                </div>{" "}
                Content Loader
              </strong>
            </h1>
            <h2>
              Have you heard about{" "}
              <a href="https://github.com/danilowoz/react-content-loader">
                react-content-loader
              </a>? It&#39;s a SVG component to create <br />placeholder
              loading, like Facebook cards loading or also known as skeleton UI.
              <br />
              <br />
              <strong>
                So now you can use this tool to create your loader easily.<br />
                <small>
                  You just need to draw using the canvas or code using the live
                  editing!
                </small>
              </strong>
            </h2>
          </div>
        )}
      </div>
    )
  }
}

export default Header
