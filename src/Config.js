import React from 'react'

const Config = ({
  handleInput,
  handleCheckbox,
  resetColors,
  width,
  height,
  speed,
  size,
  rtl,
  primaryColor,
  secondaryColor,
  guideline,
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
      </p>

      <p className="app-config__guideline">
        <label htmlFor="guideline">
          Select a image to set it as background
        </label>
        <input id="guideline" name="guideline" type="file" />
        <button>Remove background</button>
        {/* <input
          placeholder="Paste an image url here to set it as background"
          type="search"
          id="guideline"
          name="guideline"
          value={guideline}
          onChange={handleInput}
        /> */}
      </p>
    </div>
  </div>
)

export default Config
