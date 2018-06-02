import React from "react"

export default ({ data = {}, type = "", importDeclaration = false }) => {
  if (type === "react") {
    return `${
      importDeclaration
        ? 'import ContentLoader from "react-content-loader"\n\n'
        : ""
    }const MyLoader = props => (
  <ContentLoader
    height={${data.height}}
    width={${data.width}}
    speed={${data.speed}}
    primaryColor="${data.primaryColor}"
    secondaryColor="${data.secondaryColor}"
    {...props}
  >
${data.draw}
  </ContentLoader>
)`
  } else if (type === "vue") {
    return `<template>
  <content-loader
    :height="${data.height}"
    :width="${data.width}"
    :speed="${data.speed}"
    primaryColor="${data.primaryColor}"
    secondaryColor="${data.secondaryColor}"
  >
${data.draw}
  </content-loader>
</template>
${
      importDeclaration
        ? `
<script>
  import { ContentLoader } from "vue-content-loader"

  export default {
    components: {
      ContentLoader
    }
  }
</script>`
        : ""
    }`
  }
}

export const ReactImport = () => (
  <pre className="prism-code">
    <span className="token keyword">import</span> ContentLoader{" "}
    <span className="token keyword">from </span>
    <span className="token string">"react-content-loader"</span>
    <br />
    <br />
  </pre>
)

export const VueImport = () => (
  <pre className="prism-code">
    <br />
    <span className="token tag">
      <span className="token tag">
        <span className="token punctuation">&lt;</span>
        script
      </span>

      <span className="token punctuation">&gt;</span>
    </span>
    <br />
    <span className="token keyword">{"  "}import </span>
    <span className="token punctuation">{`{ `}</span>
    ContentLoader
    <span className="token punctuation">{` }`}</span>
    <span className="token keyword"> from </span>
    <span className="token string">"vue-content-loader"</span>
    <br />
    <br />
    <span className="token keyword">{"  "}export</span>
    <span className="token keyword"> default </span>
    <span className="token punctuation">{`{`}</span>
    <br />
    {"    "}components
    <span className="token punctuation">: </span>
    <span className="token punctuation">{`{`}</span>
    <br />
    {"      "}ContentLoader
    <br />
    <span className="token punctuation">{"    "}}</span>
    <br />
    <span className="token punctuation">{"  "}}</span>
    <br />
    <span className="token tag">
      <span className="token tag">
        <span className="token punctuation">&lt;/</span>
        script
      </span>

      <span className="token punctuation">&gt;</span>
    </span>
  </pre>
)
