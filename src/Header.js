import React, { Component } from "react"

class Header extends Component {
  state = {
    highlight: 0
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 3000)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  timer = () => {
    const { highlight } = this.state
    this.setState({ highlight: highlight === 1 ? 0 : highlight + 1 })
  }

  render() {
    const { highlight } = this.state
    return (
      <div className="app-header">
        <h1>
          Create{" "}
          <strong>
            <div
              className={`app-header_framework ${highlight === 1 ? "vue" : ""}`}
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
          </a>? It&#39;s a SVG component to create <br />placeholder loading,
          like Facebook cards loading or also known as skeleton UI.
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
    )
  }
}

export default Header
