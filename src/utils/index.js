const numberFixed = num => Number(Number(num).toFixed())

export const JsonToSVG = json => {
  const arr = json.objects
  let svg = ''

  arr.forEach(a => {
    if (a.type === 'rect') {
      const rotate = a.angle
        ? ` transform="rotate(${numberFixed(a.angle)}, ${numberFixed(
            a.left
          )}, ${numberFixed(a.top)})"`
        : ''

      svg += `    <rect x="${numberFixed(a.left)}" y="${numberFixed(
        a.top
      )}" rx="${a.rx}" ry="${numberFixed(a.ry)}" width="${numberFixed(
        a.width * a.scaleX
      )}" height="${numberFixed(a.height * a.scaleY)}"${rotate} /> \n`
    } else if (a.type === 'circle') {
      svg += `    <circle cx="${numberFixed(
        a.left + a.radius * a.scaleY
      )}" cy="${numberFixed(a.top + a.radius * a.scaleY)}" r="${numberFixed(
        a.radius * a.scaleX
      )}" /> \n`
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

export const CanvasAddedProp = target => {
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
