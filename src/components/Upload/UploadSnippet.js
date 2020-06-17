import React, { useState } from 'react'

import './style.css'
import { parseSvg } from './service'

const UploadSnippet = ({ handleSvg, setLoading }) => {
  const [value, setValue] = useState('')

  const submit = async () => {
    try {
      setLoading(true)
      const message = await parseSvg(value)
      handleSvg(message)

      setTimeout(() => {
        setLoading(false)
      }, 300)
    } catch (err) {
      setLoading(false)
      console.error(err.message)
    }
  }

  return (
    <div className="upload-body">
      <p className="upload-intro">
        Paste bellow a SVG snippet code or only the shape elements.
        <button onClick={submit} className="upload-button" type="button">
          Submit
        </button>
      </p>

      <textarea
        onChange={({ target }) => setValue(target.value)}
        value={value}
        placeholder={`E.g.

<svg width='268px' height='99px' viewBox='0 0 268 99'>
  <rect x='92.5' y='0.5' width='175' height='98' rx='16'></rect>
  <circle cx='28.5' cy='28.5' r='28'></circle>
</svg>

or just:

<rect x='92.5' y='0.5' width='175' height='98' rx='16'></rect>
<circle cx='28.5' cy='28.5' r='28'></circle>

      `}
        className="upload-textarea"
      />

      <p className="upload-disclaimer">
        Make sure to remove all images and fonts from SVG file.
      </p>
    </div>
  )
}

export default UploadSnippet
