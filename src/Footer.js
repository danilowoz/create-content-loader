import React from "react"

import ReactIcon from "./assets/react.svg"
import HeartIcon from "./assets/heart.png"

const Footer = () => (
  <div className="app-assign">
    <h2>
      Made with <img src={ReactIcon} alt="React" /> and{" "}
      <img src={HeartIcon} alt="Heart" /> by{" "}
      <a
        href="https://github.com/danilowoz"
        target="_blank"
        without=""
        rel="noopener noreferrer"
      >
        @danilowoz
      </a>
    </h2>
    <p>
      Do you have any questions?{" "}
      <a
        href="https://github.com/danilowoz/react-content-loader"
        target="_blank"
        without=""
        rel="noopener noreferrer"
      >
        Read the documentation.
      </a>
    </p>
    <br />
    <p className="app-assign__stars">
      Do you like?
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
    </p>
  </div>
)

export default Footer
