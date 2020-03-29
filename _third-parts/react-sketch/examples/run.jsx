;(function() {
  const React = require('react')
  const ReactDOM = require('react-dom')

  const Demo = require('./main').default

  // Needed for React Developer Tools
  window.React = React

  ReactDOM.render(<Demo />, document.getElementById('container'))
})()
