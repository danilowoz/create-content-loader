import React, { Component } from 'react'

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
  <div>
    <p>
      style
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
    <p>
      width:
      <input type="number" name="width" value={width} onChange={_HandleInput} />
    </p>
    <p>
      height:
      <input type="number" name="height" value={height} onChange={_HandleInput} />
    </p>
    <p>
      speed:
      <input type="number" name="speed" value={speed} onChange={_HandleInput} />
    </p>

    <p>
      primaryColor:
      <input type="color" name="primaryColor" value={primaryColor} onChange={_HandleInput} />
    </p>
    <p>
      secondaryColor:
      <input type="color" name="secondaryColor" value={secondaryColor} onChange={_HandleInput} />
    </p>
  </div>
)

export default Config
