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

  const { message } = JSON.parse(await result.text())

  return message
}
