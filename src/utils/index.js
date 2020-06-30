export const numberFixed = num => Number(Number(num).toFixed())

export const jsonToSVG = json => {
  const arr = json.objects
  let svg = ''

  arr.forEach(a => {
    const height = numberFixed(a.height * a.scaleY)
    const width = numberFixed(a.width * a.scaleX)
    const radius = numberFixed(a.radius * a.scaleX)

    if ((height === 0 && width === 0) || radius === 1) {
      return null
    }

    const factoryPath = element =>
      element.path.map(path => path.join(' ')).join(' ')

    if (a.type === 'rect') {
      const rotate = a.angle
        ? ` transform="rotate(${numberFixed(a.angle)}, ${numberFixed(
            a.left
          )}, ${numberFixed(a.top)})"`
        : ''

      svg += `    <rect x="${numberFixed(a.left)}" y="${numberFixed(
        a.top
      )}" rx="${a.rx}" ry="${numberFixed(
        a.ry
      )}" width="${width}" height="${height}"${rotate} /> \n`
    } else if (a.type === 'circle') {
      svg += `    <circle cx="${numberFixed(
        a.left + a.radius * a.scaleY
      )}" cy="${numberFixed(a.top + a.radius * a.scaleY)}" r="${radius}" /> \n`
    } else if (a.type === 'path') {
      // TODO: move path
      // if (a.left !== 0 || a.top !== 0) {
      //   svg += `    <path transform="translate(${numberFixed(
      //     a.left
      //   )},${numberFixed(a.top)})" d="${factoryPath(a)}" /> \n`
      // } else {
      // }
      svg += `    <path d="${factoryPath(a)}" /> \n`
    }
  })

  return svg.trimRight()
}

export const createNode = html =>
  new DOMParser().parseFromString(html, 'text/html').body.firstChild

export const SVGtoFabric = svg => {
  const arr = svg.split('\n')
  const obj = arr.map(s => {
    const item = createNode(s)
    const newObj = {}

    if (item !== null) {
      if (s.includes('<rect ')) {
        newObj.type = 'rect'
        newObj.left = numberFixed(item.getAttribute('x'))
        newObj.top = numberFixed(item.getAttribute('y'))
        newObj.width = numberFixed(item.getAttribute('width'))
        newObj.height = numberFixed(item.getAttribute('height'))
        newObj.ry = numberFixed(item.getAttribute('ry'))
        newObj.rx = numberFixed(item.getAttribute('rx'))
        newObj.fill = 'transparent'
      } else if (s.includes('<path ')) {
        newObj.type = 'path'
        newObj.aCoords = item.getAttribute('d')

        // TODO: move path
        // const transformValue = item.getAttribute('transform') || ''

        // const translateValues = transformValue.match(
        //   /translate\((-?\d+\.?\d*),?\s*(-?\d+[.]?\d*)?\)/
        // )
        // newObj.left = (translateValues && translateValues[1]) || null
        // newObj.top = (translateValues && translateValues[2]) || null
      } else if (s.includes('<circle ')) {
        newObj.type = 'circle'
        newObj.left =
          numberFixed(item.getAttribute('cx')) -
          numberFixed(item.getAttribute('r'))
        newObj.top =
          numberFixed(item.getAttribute('cy')) -
          numberFixed(item.getAttribute('r'))
        newObj.radius = numberFixed(item.getAttribute('r'))
        newObj.fill = 'transparent'
        newObj.lockRotation = true
        newObj.lockUniScaling = true
      }

      return newObj
    }
    return {}
  })

  return obj.filter(e => e !== undefined)
}

export const canvasAddedProp = target => {
  const newTarget = target
  const hasCircle =
    newTarget &&
    (newTarget.type === 'circle' ||
      (newTarget.type === 'activeSelection' &&
        newTarget._objects.some(o => o.type === 'circle')))
  if (hasCircle) {
    newTarget.lockUniScaling = true
    newTarget.lockRotation = true
    newTarget.angle = 0
    newTarget.originY = 'top'
  }

  return newTarget
}
