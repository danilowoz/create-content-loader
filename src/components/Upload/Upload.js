import React, { useRef, useEffect, useState, useCallback } from 'react'

import './style.css'
import { parseSvg } from './service'
import Loading from '../Loading'

const ERROR_TIMEOUT = 4000

const Upload = ({ handleSvg }) => {
  const refContainer = useRef()
  const [hover, setHover] = useState(false)
  const [error, setError] = useState()
  const [loading, setLoading] = useState()

  const submit = useCallback(
    async file => {
      setLoading(true)

      const { ok, message } = await parseSvg(file)
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
          setError('Only SVG files are allowed.')

          setTimeout(() => {
            setError()
          }, ERROR_TIMEOUT)

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
      {loading ? (
        <Loading />
      ) : (
        <>
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

              {error && <p className="upload-error">{error}</p>}
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
        </>
      )}
    </div>
  )
}

export default Upload
