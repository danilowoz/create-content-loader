import React, { useRef, useEffect, useState, useCallback } from 'react'

import './style.css'
import { parseSvg } from './service'

const Upload = ({ handleSvg, setLoading }) => {
  const refContainer = useRef()
  const [hover, setHover] = useState(false)
  const [error, setError] = useState(false)

  const submit = useCallback(
    async file => {
      try {
        setLoading(true)

        const message = await parseSvg(file)
        handleSvg(message)

        setTimeout(() => {
          setLoading(false)
        }, 300)
      } catch (err) {
        setLoading(false)
        console.error(err.message)
      }
    },
    [handleSvg, setLoading]
  )

  const handleDragIn = e => {
    e.preventDefault()
    e.stopPropagation()

    setHover(true)
  }
  const handleDragOut = e => {
    e.preventDefault()
    e.stopPropagation()

    setHover(false)
  }

  const handleDrop = useCallback(
    e => {
      e.preventDefault()
      e.stopPropagation()

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0]

        setHover(false)

        if (file.type !== 'image/svg+xml') {
          setError(true)

          setTimeout(() => {
            setError(false)
          }, 3000)

          return
        }

        submit(e.dataTransfer.files[0])
      }
    },
    [submit]
  )

  useEffect(() => {
    const div = refContainer.current

    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    div.addEventListener('drop', handleDrop)

    return () => {
      div.removeEventListener('dragenter', handleDragIn)
      div.removeEventListener('dragleave', handleDragOut)
      div.removeEventListener('drop', handleDrop)
    }
  }, [handleDrop])

  return (
    <div className="upload-body" ref={refContainer}>
      <div
        className={`${
          hover ? 'upload-input-handle--hover' : ''
        } upload-input-handle`}
      >
        <div>
          <p className="upload-intro">
            Select or drop here a SVG file
            <br /> to be converted in a loading.
          </p>

          {error && <p className="upload-error">Only SVG files are allowed.</p>}
        </div>
        <input
          type="file"
          onChange={file => submit(file.target.files[0])}
          multiple={false}
        />
      </div>

      <p className="upload-disclaimer">
        Make sure to remove all images and fonts from SVG file.
      </p>
    </div>
  )
}

export default Upload
