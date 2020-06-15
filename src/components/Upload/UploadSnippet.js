import React, { useState } from 'react'

import { PARSER_API } from './constants'

import './style.css'

const UploadSnippet = ({ handle }) => {
  const handleFile = async event => {
    try {
      setLoading(true)

      const file = event.target.files[0]

      const result = await fetch(PARSER_API, {
        method: 'POST',
        body: file,
        headers: {
          Accept: '*/*',
          'Content-type': file.type,
        },
      })

      const { message } = JSON.parse(await result.text())
      handle(message)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="upload-body">
      <p className="upload-intro">
        Paste bellow a SVG snippet code or only the shape elements.
        <button className="upload-button" type="button">
          Submit
        </button>
      </p>
      <textarea
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
    </div>
  )
}

export default UploadSnippet
