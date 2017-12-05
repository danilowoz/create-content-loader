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
      if (s.includes('<rect ')) {
        newObj.type = 'rect'
        newObj.left = Number(item.getAttribute('x'))
        newObj.top = Number(item.getAttribute('y'))
        newObj.width = Number(item.getAttribute('width'))
        newObj.height = Number(item.getAttribute('height'))
        newObj.fill = 'transparent'
        newObj.radius = 6
      } else if (s.includes('<circle ')) {
        newObj.type = 'circle'
        newObj.left = Number(item.getAttribute('cx')) - Number(item.getAttribute('r'))
        newObj.top = Number(item.getAttribute('cy')) - Number(item.getAttribute('r'))
        newObj.fill = 'transparent'
        newObj.radius = Number(item.getAttribute('r'))
      }

      return newObj
    }
  })

  return obj.filter(e => e !== undefined)
}

export const getReactInfo = component => {
  const obj = {}
  obj.width = Number(component.match(/width={(.*?)}/)[1])
  obj.height = Number(component.match(/height={(.*?)}/)[1])
  obj.speed = Number(component.match(/speed={(.*?)}/)[1])
  obj.primaryColor = component.match(/primaryColor={(.*?)}/)[1]
  obj.secondaryColor = component.match(/secondaryColor={(.*?)}/)[1]
  obj.draw = ''

  return obj
}
