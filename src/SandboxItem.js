import React from "react"

const defaultStyles = {
  width: "100%",
  height: "500px",
  border: 0,
  borderRadius: "4px",
  overflow: "hidden"
}

const Showcase = ({ id, label }) => (
  <div>
    <h4>{label}</h4>
    <iframe
      src={`https://codesandbox.io/embed/${id}?autoresize=1&hidenavigation=1&view=preview`}
      style={defaultStyles}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  </div>
)

export default Showcase
