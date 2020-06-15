import React, { useState } from 'react'

import { PARSER_API } from './constants'

const Upload = ({ handle }) => {
  const [loading, setLoading] = useState(false)

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

      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.error(err.message)
    }
  }

  return (
    <div>
      {loading && <p>Loading</p>}
      <input type="file" onChange={handleFile} multiple={false} />
      <textarea />
    </div>
  )
}

export default Upload
