import React from 'react'

const Config = ({ _HandleInput, width, height, speed, size, primaryColor, secondaryColor }) => (
  <div className="app-config">
    <div className="app-config__col">
      <p>
        <label htmlFor="width">width:</label>
        <input type="number" id="width" name="width" value={width} onChange={_HandleInput} />
      </p>
      <p>
        <label htmlFor="height">height:</label>
        <input type="number" id="height" name="height" value={height} onChange={_HandleInput} />
      </p>
      <p>
        <label htmlFor="speed">speed:</label>
        <input type="number" id="speed" name="speed" value={speed} onChange={_HandleInput} />
      </p>
    </div>
    <div className="app-config__col">
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
    </div>
  </div>
)

export default Config
