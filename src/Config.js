import React from "react"

const Config = ({
  _HandleInput,
  _HandleCheckbox,
  _ResetColors,
  width,
  height,
  speed,
  size,
  rtl,
  primaryColor,
  secondaryColor,
  guideline
}) => (
  <div className="app-config">
    <p className="app-config__guideline">
      <input
        placeholder="Paste an image url here to set it as background"
        type="search"
        id="guideline"
        name="guideline"
        value={guideline}
        onChange={_HandleInput}
      />
    </p>

    <h4 className="properties">Propeties:</h4>
    <div>
      <p>
        <label htmlFor="rtl">RTL content:</label>
        <label htmlFor="rtl" className="toggle">
          <input
            type="checkbox"
            className="toggle-input"
            checked={rtl}
            name="rtl"
            id="rtl"
            onChange={_HandleCheckbox}
          />
          <span className={`toggle-check ${rtl ? "checked" : ""}`} />
        </label>
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
