const toFixed = n => parseFloat(Number(n).toFixed(2))

export const JsonToSVG = json => {
  const arr = json.objects
  let svg = ""

  arr.forEach(a => {
    if (a.type === "rect") {
      const rotate = a.angle
        ? ` transform="rotate(${toFixed(a.angle)}, ${toFixed(
            a.left
          )}, ${toFixed(a.top)})"`
        : ""

      svg += `    <rect x="${toFixed(a.left)}" y="${toFixed(a.top)}" rx="${
        a.rx
      }" ry="${toFixed(a.ry)}" width="${toFixed(
        a.width * a.scaleX
      )}" height="${toFixed(a.height * a.scaleY)}"${rotate} /> \n`
    } else if (a.type === "circle") {
      svg += `    <circle cx="${toFixed(
        a.left + a.radius * a.scaleY
      )}" cy="${toFixed(a.top + a.radius * a.scaleY)}" r="${toFixed(
        a.radius * a.scaleX
      )}" /> \n`
    }
  })

  return svg.trimRight()
}

export const createNode = html =>
  new DOMParser().parseFromString(html, "text/html").body.firstChild

export const SVGtoFabric = svg => {
  const arr = svg.split("\n")
  const obj = arr.map(s => {
    const item = createNode(s)
    const newObj = {}

    if (item !== null) {
      if (s.includes("<rect ")) {
        newObj.type = "rect"
        newObj.left = Number(item.getAttribute("x"))
        newObj.top = Number(item.getAttribute("y"))
        newObj.width = Number(item.getAttribute("width"))
        newObj.height = Number(item.getAttribute("height"))
        newObj.ry = Number(item.getAttribute("ry"))
        newObj.rx = Number(item.getAttribute("rx"))
        newObj.fill = "transparent"
      } else if (s.includes("<circle ")) {
        newObj.type = "circle"
        newObj.left =
          Number(item.getAttribute("cx")) - Number(item.getAttribute("r"))
        newObj.top =
          Number(item.getAttribute("cy")) - Number(item.getAttribute("r"))
        newObj.radius = Number(item.getAttribute("r"))
        newObj.fill = "transparent"
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

  if (newTarget && newTarget.type === "circle") {
    newTarget.lockUniScaling = true
    newTarget.lockRotation = true
    newTarget.angle = 0
    newTarget.originY = "top"
  }

  return newTarget
}

const regexCollection = /const MyLoader = props => \([\s\S]*?<ContentLoader[\s\S]*?rtl[\s\S]*?height={.*}[\s\S]*?width={.*}[\s\S]*?speed={.*}[\s\S]*?primaryColor=".*"[\s\S]*?secondaryColor=".*"[\s\S]*?{...props}[\s\S]*?>[.|\s]*?((.|\s)*)[.|\s]*?<\/ContentLoader>[\s\S]*?\)/

export const getReactInfo = component => {
  const obj = {}
  obj.width = Number(component.match(/width=({(.*?)}|"(.*?)")/)[2])
  obj.height = Number(component.match(/height=({(.*?)}|"(.*?)")/)[2])
  obj.speed = Number(component.match(/speed=({(.*?)}|"(.*?)")/)[2])

  obj.primaryColor = component.match(/primaryColor="(.*?)"/)[1]
  obj.secondaryColor = component.match(/secondaryColor="(.*?)"/)[1]
  obj.draw = component.match(regexCollection)[1].trim()

  return obj
}
