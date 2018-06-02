import React from "react"

const Config = ({
  _HandleInput,
  _ResetColors,
  width,
  height,
  speed,
  size,
  primaryColor,
  secondaryColor,
  guideline
}) => (
  <div className="app-config">
    <div>
      <p className="app-config__guideline">
        <label htmlFor="guideline">Image guideline:</label>
        <input
          placeholder="Paste a url to set an image as background on canvas"
          type="search"
          id="guideline"
          name="guideline"
          value={guideline}
          onChange={_HandleInput}
        />
      </p>
      <p>
        <label htmlFor="width">width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={width}
          onChange={_HandleInput}
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
          onChange={_HandleInput}
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
          onChange={_HandleInput}
        />
      </p>

      <p>
        <label htmlFor="primaryColor">primaryColor:</label>
        <input
          type="color"
          id="primaryColor"
          name="primaryColor"
          defaultValue={primaryColor}
          onChange={_HandleInput}
        />
      </p>
      <p>
        <label htmlFor="secondaryColor">secondaryColor:</label>
        <input
          type="color"
          id="secondaryColor"
          name="secondaryColor"
          defaultValue={secondaryColor}
          onChange={_HandleInput}
        />
      </p>
      <button onClick={_ResetColors}>Reset colors</button>
    </div>
  </div>
)

export default Config
