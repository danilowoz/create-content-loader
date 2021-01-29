export const renderSnippet = ({ data = {} }) => {
  return `const MyLoader = (props) => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ''
  }
    height={${data.height}}
    width={${data.width}}
    speed={${data.speed}}
    backgroundColor="${data.backgroundColor}"
    foregroundColor="${data.foregroundColor}"
    {...props}
  >
${data.draw}
  </ContentLoader>
)


render(<MyLoader />)`
}

const reactDom = ({ data = {} }) => {
  return `import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ''
  }
    speed={${data.speed}}
    width={${data.width}}
    height={${data.height}}
    viewBox="0 0 ${data.width} ${data.height}"
    backgroundColor="${data.backgroundColor}"
    foregroundColor="${data.foregroundColor}"
    {...props}
  >
${data.draw}
  </ContentLoader>
)

export default MyLoader

`
}

const reactNative = ({ data = {} }) => {
  const drawParser = data.draw
    .replace(/rect/gm, 'Rect')
    .replace(/circle/gm, 'Circle')
    .replace(/path/gm, 'Path')

  return `import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const MyLoader = (props) => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ''
  }
    speed={${data.speed}}
    width={${data.width}}
    height={${data.height}}
    viewBox="0 0 ${data.width} ${data.height}"
    backgroundColor="${data.backgroundColor}"
    foregroundColor="${data.foregroundColor}"
    {...props}
  >
${drawParser}
  </ContentLoader>
)

export default MyLoader

`
}

const svg = ({ data = {} }) => {
  return `<svg
  role="img"
  width="${data.width}"
  height="${data.height}"
  aria-labelledby="loading-aria"
  viewBox="0 0 ${data.width} ${data.height}"
  preserveAspectRatio="none"${
    data.rtl ? '\n  style="transform: scaleX(-1)"' : ''
  }
>
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clip-path="url(#clip-path)"
    style='fill: url("#fill");'
  ></rect>
  <defs>
    <clipPath id="clip-path">
${data.draw.replace(/ {2}/gm, '    ')}
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stop-color="${data.backgroundColor}"
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
        stop-color="${data.foregroundColor}"
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
        stop-color="${data.backgroundColor}"
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
    :width="${data.width}"
    :height="${data.height}"
    :speed="${data.speed}"
    primaryColor="${data.backgroundColor}"
    secondaryColor="${data.foregroundColor}"
  >
${data.draw}
  </content-loader>
</template>
`
}

const angular = ({ data = {} }) => {
  const drawParser = data.draw
      .replace(/rect/gm, 'svg:rect')
      .replace(/circle/gm, 'svg:circle')
      .replace(/path/gm, 'svg:path')
  return `
/** install **/ 
yarn add @ngneat/content-loader or npm install @ngneat/content-loader
/** Import in [MODULE_NAME].module.ts **/
  import { ContentLoaderModule } from '@ngneat/content-loader';

  @NgModule({
    imports: [ContentLoaderModule]
  })
  export class AppModule {}

/** Then add in this in your component html : [COMPONENT_NAME].component.html **/
 
  <content-loader
    viewBox="0 0 ${data.width} ${data.height}"
    speed="${data.speed}"
    backgroundColor="${data.backgroundColor}"
    foregroundColor="${data.foregroundColor}" ${
    data.rtl
      ? `
    [rtl]="true"`
      : ''
  }
  >
${drawParser}
  </content-loader>
`
}

export default { reactDom, reactNative, svg, vue, angular }
