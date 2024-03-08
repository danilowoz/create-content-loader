import React, { useState } from 'react'
import ReactGA from 'react-ga'

import './style.css'
import { parseSvg } from './service'
import Loading from '../Loading'

const ERROR_TIMEOUT = 4000

const UploadSnippet = ({ handleSvg }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const submit = async () => {
    setLoading(true)

    const { ok, message } = await parseSvg(value)
    if (ok) {
      handleSvg(message)
    } else {
      setError(message)

      setTimeout(() => {
        setError()
      }, ERROR_TIMEOUT)
    }

    setTimeout(() => {
      setLoading(false)
    }, 300)

    ReactGA.event({
      category: 'Parse SVG',
      action: 'Snippet',
    })
  }

  return (
    <div className="upload-body">
      {loading ? (
        <Loading />
      ) : (
        <>
          <p className="upload-intro">
            Paste bellow a SVG snippet code or only the shape elements.
            <button onClick={submit} className="upload-button" type="button">
              Submit
            </button>
          </p>

          {error && <p className="upload-error">{error}</p>}

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
        </>
      )}
    </div>
  )
}

export default UploadSnippet
