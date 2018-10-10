import React from "react"

export default ({ data = {}, importDeclaration = false }) => {
  return `${
    importDeclaration
      ? 'import ContentLoader from "react-content-loader"\n\n'
      : ""
  }const MyLoader = props => (
  <ContentLoader ${
    data.rtl
      ? `
    rtl`
      : ""
  }
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
