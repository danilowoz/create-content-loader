import React, { Component } from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Tools } from 'react-sketch'

import { getReactInfo } from './utils'
import { facebook, instagram, code, bulletList, test } from './utils/presets'
import Canvas from './Canvas'
import Config from './Config'
import './App.css'

class App extends Component {
  state = {
    width: 400,
    height: 200,
    speed: 2,
    primaryColor: '#f3f3f3',
    secondaryColor: '#ecebeb',
    draw: test,
    tool: Tools.Select,
    activeItem: false,
    renderCanvas: true,
    focusEditor: false,
  }

  componentDidMount() {
    const pre = document.querySelector('pre')

    pre.addEventListener('focus', () => {
      console.log('componentDidMount: focus')
      // this.setState({ focusEditor: true })
    })
    pre.addEventListener('blur', () => {
      console.log('componentDidMount: blur')
      // window.getSelection().removeAllRanges()
      // this.setState({ focusEditor: false })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderCanvas === false && this.state.focusEditor === false) {
      this.setState({ renderCanvas: true })
    }
  }

  _HandleDraw = draw => {
    this.setState({ draw })
  }

  _HandleEditor = editor => {
    const state = getReactInfo(editor)
    state.renderCanvas = false
    this.setState(state)
  }

  _HandleSeletedItem = activeItem => {
    this.setState({ activeItem })
  }

  _HandleTool = tool => {
    this.setState({ tool })
  }

  _HandlePreset = e => {
    const value = e.target.value
    const presents = {
      facebook,
      instagram,
      code,
      bulletList,
    }
    const draw = presents[value]
    this.setState({ draw, renderCanvas: false })
  }

  _HandleInput = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  render() {
    const { width, height, speed, primaryColor, secondaryColor, draw, renderCanvas } = this.state

    const Mycode = `
      const MyLoader = () => (
        <ContentLoader
          height={${height}}
          width={${width}}
          speed={${speed}}
          primaryColor={"${primaryColor}"}
          secondaryColor={"${secondaryColor}"}
        >
${draw}
        </ContentLoader>
      )
    `
    return (
      <div className="App">
        <p>import ContentLoader, {(Rect, Circle)} from "react-content-loader";</p>
        <LiveProvider code={Mycode} scope={{ ContentLoader, Rect, Circle }}>
          <LiveEditor onChange={this._HandleEditor} />
          <LiveError />

          <div className="wysiwyg">
            <LivePreview
              className="wysiwyg__preview"
              style={{ width: `${this.state.width}px`, height: `${this.state.height}px` }}
            />

            {renderCanvas && (
              <Canvas
                {...this.state}
                _HandleDraw={this._HandleDraw}
                _HandleSeletedItem={this._HandleSeletedItem}
                _HandleTool={this._HandleTool}
              />
            )}
          </div>
        </LiveProvider>

        <Config
          {...this.state}
          _HandleInput={this._HandleInput}
          _HandlePreset={this._HandlePreset}
        />
      </div>
    )
  }
}

export default App
