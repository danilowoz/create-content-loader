import React from 'react'

const Config = ({
  _HandlePreset,
  _HandleInput,
  width,
  height,
  speed,
  size,
  primaryColor,
  secondaryColor,
}) => (
  <div className="app-config">
    <p className="app-config__presets">
      <label>presets:</label>
      <button value="facebook" onClick={_HandlePreset}>
        facebook
      </button>
      <button value="instagram" onClick={_HandlePreset}>
        instagram
      </button>
      <button value="code" onClick={_HandlePreset}>
        code
      </button>
      <button value="bulletList" onClick={_HandlePreset}>
        bulletList
      </button>
    </p>
    <div className="app-config__col">
      <p>
        <label for="width">width:</label>
        <input type="number" id="width" name="width" value={width} onChange={_HandleInput} />
        <span>px</span>
      </p>
      <p>
        <label for="height">height:</label>
        <input type="number" id="height" name="height" value={height} onChange={_HandleInput} />
        <span>px</span>
      </p>
      <p>
        <label for="speed">speed:</label>
        <input type="number" id="speed" name="speed" value={speed} onChange={_HandleInput} />
        <span>s</span>
      </p>
    </div>
    <div className="app-config__col">
      <p>
        <label for="primaryColor">primaryColor:</label>
        <input
          type="color"
          id="primaryColor"
          name="primaryColor"
          value={primaryColor}
          onChange={_HandleInput}
        />
      </p>
      <p>
        <label for="secondaryColor">secondaryColor:</label>
        <input
          type="color"
          id="secondaryColor"
          name="secondaryColor"
          value={secondaryColor}
          onChange={_HandleInput}
        />
      </p>
    </div>
  </div>
)

export default Config
