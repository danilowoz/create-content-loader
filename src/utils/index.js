export const cleanStyle = style => {
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
  return cleanStyle(newSvg)
}
