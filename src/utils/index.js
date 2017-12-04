export const removeStyle = style => {
  const regexStyle = /(style=".*?")/gm
  const newStyle = style.replace(regexStyle, '')
  return newStyle
}

export const cleanSVG = svg => {
  const regex = /<\/defs>([^\n]*\n+)+(.*)/gm
  const newSvg = svg
    .match(regex)[0]
    .replace('</defs>', '')
    .replace('</svg>', '')
  return removeStyle(newSvg)
}

export const createNode = html => {
  return new DOMParser().parseFromString(html, 'text/html').body.firstChild
}

export const SVGtoFabric = svg => {
  const arr = svg.split('\n')
  const obj = arr.map(s => {
    const item = createNode(s)
    const newObj = {}

    if (item !== null) {
      newObj.left = Number(item.getAttribute('x'))
      newObj.top = Number(item.getAttribute('y'))
      newObj.width = Number(item.getAttribute('width'))
      newObj.height = Number(item.getAttribute('height'))
      newObj.fill = 'transparent'
      newObj.radius = 6

      return newObj
    }
  })

  return obj.filter(e => e !== undefined)
}
