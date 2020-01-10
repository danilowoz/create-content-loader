import React from 'react'

import trashIcon from './assets/trash.svg'

const Config = ({
  handleCheckbox,
  handleImageAsBackground,
  handleInput,
  height,
  imageAsBackground,
  primaryColor,
  resetColors,
  rtl,
  gridVisibility,
  secondaryColor,
  size,
  speed,
  width,
}) => (
  <div className="app-config">
    <div className="row">
      <p className="app-config_caption">Canvas size</p>

      <p className="inline">
        <input
          type="number"
          id="width"
          name="width"
          value={width}
          onChange={handleInput}
          max="1000"
        />
        <label htmlFor="width">width (in px)</label>
      </p>

      <p className="inline">
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={handleInput}
          max="1000"
        />
        <label htmlFor="height">height (in px)</label>
      </p>
    </div>

    <div className="row">
      <p className="app-config_caption">
        Colors{' '}
        <button className="reset-colors" onClick={resetColors}>
          Reset
        </button>
      </p>

      <p className="inline">
        <input
          type="color"
          id="primaryColor"
          name="primaryColor"
          value={primaryColor}
          onChange={handleInput}
        />
        <label htmlFor="primaryColor">Background color</label>
      </p>

      <p className="inline">
        <input
          type="color"
          id="secondaryColor"
          name="secondaryColor"
          value={secondaryColor}
          onChange={handleInput}
        />
        <label htmlFor="secondaryColor">Foreground color</label>
      </p>
    </div>

    <div className="row">
      <p className="app-config_caption">Configurations</p>
      <p className="inline">
        <input
          type="number"
          id="speed"
          name="speed"
          value={speed}
          onChange={handleInput}
        />
        <label htmlFor="speed">speed (in s)</label>
      </p>

      <p className="app-config_caption">Right-to-left</p>

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
    </div>

    <div className="app-config__guideline">
      <p className="app-config_caption">Select a image to set as background</p>

      <p className="inline">
        <input
          onChange={handleImageAsBackground}
          id="guideline"
          name="guideline"
          type="file"
        />

        {imageAsBackground && (
          <button
            onClick={() => handleImageAsBackground(null)}
            className="app-handler__trash"
          >
            <img src={trashIcon} alt="remove item" />
          </button>
        )}
      </p>
    </div>

    <p className="app-config_grid-col">
      <p className="app-config_caption">Grid visibility</p>

      <label htmlFor="gridVisibility" className="toggle">
        <input
          type="checkbox"
          className="toggle-input"
          checked={gridVisibility}
          name="gridVisibility"
          id="gridVisibility"
          onChange={handleCheckbox}
        />
        <span className={`toggle-check ${gridVisibility ? 'checked' : ''}`} />
      </label>
    </p>
  </div>
)

export default Config
