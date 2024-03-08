import { PARSER_API } from './constants'

export const parseSvg = async content => {
  let body = {}

  if (content.type) {
    body = {
      body: content,
      headers: {
        Accept: '*/*',
        'Content-type': content.type,
      },
    }
  } else if (typeof content === 'string') {
    body = {
      body: content,
    }
  }

  const result = await fetch(PARSER_API, {
    method: 'POST',
    ...body,
  })

  return JSON.parse(await result.text())
}
