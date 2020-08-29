import React from 'react'
import ReactGA from 'react-ga'

import '../style/Header.css'
import Helmet from 'react-helmet'

import supportSrc from '../../assets/support.png'

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

          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            onClock={() => {
              ReactGA.event({ category: 'Donation' })
            }}
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="KCFSEKAULGEG2"
            />
            <input
              width="181"
              type="image"
              src={supportSrc}
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Header
