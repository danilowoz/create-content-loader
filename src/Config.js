import React from 'react'

import trashIcon from './assets/trash.svg'
import helpIcon from './assets/help.svg'
import Tip from './utils/customToolTip'

const Config = ({
  handleCheckbox,
  handleImageAsBackground,
  handleInput,
  height,
  imageAsBackground,
  primaryColor,
  resetColors,
  rtl,
  secondaryColor,
  size,
  speed,
  width,
}) => (
  <div className="app-config">
    <h4 className="properties">(props) =></h4>
    <div>
      <p>
        <label htmlFor="width">width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={width}
          onChange={handleInput}
          max="1000"
        />
        <Tip title="Defaults to `400`. It will be set in the viewbox attr in the `svg`. <a target='blank' href='https://github.com/danilowoz/react-content-loader/blob/master/README.md#width-number'>Read the documentation</a>">
          <img width="15px" src={helpIcon} alt="help" />
        </Tip>
      </p>

      <p>
        <label htmlFor="height">height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={handleInput}
          max="1000"
        />
        <Tip title="Defaults to `130`. It will be set in the viewbox attr in the `svg`. <a target='blank' href='https://github.com/danilowoz/react-content-loader/blob/master/README.md#height-number'>Read the documentation</a>">
          <img width="15px" src={helpIcon} alt="help" />
        </Tip>
      </p>

      <p>
        <label htmlFor="speed">speed:</label>
        <input
          type="number"
          id="speed"
          name="speed"
          value={speed}
          onChange={handleInput}
        />
        <Tip title="Defaults to `2`. Animation speed in seconds. <a target='blank' href='https://github.com/danilowoz/react-content-loader/blob/master/README.md#speed-number'>Read the documentation</a>">
          <img width="15px" src={helpIcon} alt="help" />
        </Tip>
      </p>

      <p>
        <label htmlFor="primaryColor">primaryColor:</label>
        <input
          type="color"
          id="primaryColor"
          name="primaryColor"
          value={primaryColor}
          onChange={handleInput}
        />

        <Tip title="Defaults to `#f3f3f3` which is used as background of animation. <a target='blank' href='https://github.com/danilowoz/react-content-loader/blob/master/README.md#primarycolor-string'>Read the documentation</a>">
          <img width="15px" src={helpIcon} alt="help" />
        </Tip>
      </p>

      <p>
        <label htmlFor="secondaryColor">secondaryColor:</label>
        <input
          type="color"
          id="secondaryColor"
          name="secondaryColor"
          value={secondaryColor}
          onChange={handleInput}
        />
        <Tip title="Defaults to `#ecebeb` which is used as the placeholder/layer of animation. <a target='blank' href='https://github.com/danilowoz/react-content-loader/blob/master/README.md#secondarycolor-string'>Read the documentation</a>">
          <img width="15px" src={helpIcon} alt="help" />
        </Tip>
      </p>

      <p>
        <button className="reset-colors" onClick={resetColors}>
          Reset colors
        </button>
      </p>

      <p>
        <label htmlFor="rtl">RTL content:</label>
        <label htmlFor="rtl" className="toggle">
          <input
            type="checkbox"
            className="toggle-input"
            checked={rtl}
            name="rtl"
            id="rtl"
            onChange={handleCheckbox}
          />
          <span className={`toggle-check ${rtl ? 'checked' : ''}`} />
        </label>

        <Tip title="Defaults to false. Content right-to-left. <a target='blank' href='https://github.com/danilowoz/react-content-loader/blob/master/README.md#rtl-boolean'>Read the documentation</a>">
          <img width="15px" src={helpIcon} alt="help" />
        </Tip>
      </p>

      <p className="app-config__guideline">
        <Tip title="Select a image to set as background">
          <input
            onChange={handleImageAsBackground}
            id="guideline"
            name="guideline"
            type="file"
          />
        </Tip>
        {imageAsBackground && (
          <button
            onClick={() => handleImageAsBackground(null)}
            className="app-handler__trash"
          >
            <Tip title="Remove background">
              <img src={trashIcon} alt="remove item" />
            </Tip>
          </button>
        )}
      </p>
    </div>
  </div>
)

export default Config
