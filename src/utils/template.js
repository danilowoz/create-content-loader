export const renderSnippet = ({ data = {} }) => {
  return `const MyLoader = () => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ''
  }
    height={${data.height}}
    width={${data.width}}
    speed={${data.speed}}
    primaryColor="${data.primaryColor}"
    secondaryColor="${data.secondaryColor}"
  >
${data.draw}
  </ContentLoader>
)


render(<MyLoader />)`
}

const reactDom = ({ data = {} }) => {
  return `import React from "react"
import ContentLoader from "react-content-loader" 

const MyLoader = () => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ''
  }
    height={${data.height}}
    width={${data.width}}
    speed={${data.speed}}
    primaryColor="${data.primaryColor}"
    secondaryColor="${data.secondaryColor}"
  >
${data.draw}
  </ContentLoader>
)

export default MyLoader`
}

const reactNative = ({ data = {} }) => {
  const drawParser = data.draw
    .replace(/rect/gm, 'Rect')
    .replace(/circle/gm, 'Circle')

  return `import React from "react"
import ContentLoader, { Rect, Circle } from "react-content-loader/native"

const MyLoader = () => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ''
  }
    height={${data.height}}
    width={${data.width}}
    speed={${data.speed}}
    primaryColor="${data.primaryColor}"
    secondaryColor="${data.secondaryColor}"
  >
${drawParser}
  </ContentLoader>
)

export default MyLoader`
}

const svg = ({ data = {} }) => {
  return `<svg
  role="img"
  aria-label="Loading interface..."
  viewBox="0 0 ${data.width} ${data.height}"
  preserveAspectRatio="none"${
    data.rtl ? '\n  style="transform: scaleX(-1)"' : ''
  }
>
  <title>Loading interface...</title>
  <rect
    x="0"
    y="0"
    width="${data.width}"
    height="${data.height}"
    clip-path="url(#clip-path)"
    style='fill: url("#fill");'
  ></rect>
  <defs>
    <clipPath id="clip-path">
${data.draw.replace(/  /gm, '    ')}
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stop-color="${data.primaryColor}"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="1.59996"
        stop-color="${data.secondaryColor}"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="2.59996"
        stop-color="${data.primaryColor}"
        stop-opacity="1"
      >
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
    </linearGradient>
  </defs>
</svg>`
}

const vue = ({ data = {} }) => {
  return `<script>
  import { ContentLoader } from "vue-content-loader"

  export default {
    components: { ContentLoader }
  }
</script>

<template>
  <content-loader
    width={${data.width}}
    height={${data.height}}
    speed={${data.speed}}
    primaryColor="${data.primaryColor}"
    secondaryColor="${data.secondaryColor}"
  >
${data.draw}
  </content-loader>
</template>
`
}

export default { reactDom, reactNative, svg, vue }
