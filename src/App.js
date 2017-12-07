import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'
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

    this.setState({ [name]: value, renderCanvas: false })
  }

  render() {
    const { width, height, speed, primaryColor, secondaryColor, draw, renderCanvas } = this.state

    const Mycode = `const MyLoader = () => (
  <ContentLoader
    height={${height}}
    width={${width}}
    speed={${speed}}
    primaryColor={"${primaryColor}"}
    secondaryColor={"${secondaryColor}"}
  >
${draw}
  </ContentLoader>
)`
    return (
      <LiveProvider code={Mycode} scope={{ ContentLoader }}>
        <div className="App">
          <div className="app-header">
            <h1>Creator of React content loader</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br />
              incididunt ut labore et dolore magna aliqua.
            </h2>
          </div>
          <div className="app-editor">
            <span className="app-editor__tab">
              <span />
            </span>
            <pre className="prism-code">
              <span className="token comment">// 1. First setup de package</span>
              <br />
              <span className="token keyword">import</span> ContentLoader{' '}
              <span className="token keyword">from</span>
              <span className="token string">"react-content-loader"</span>
              <br />
              <br />
              <span className="token comment">// 2. Then copy your loader</span>
              <br />
            </pre>
            <LiveEditor onChange={this._HandleEditor} />
            <LiveError />
          </div>

          <div>
            {renderCanvas && (
              <Canvas
                {...this.state}
                _HandleDraw={this._HandleDraw}
                _HandleSeletedItem={this._HandleSeletedItem}
                _HandleTool={this._HandleTool}
              >
                <LivePreview
                  style={{ width: `${this.state.width}px`, height: `${this.state.height}px` }}
                />
              </Canvas>
            )}
          </div>

          <div className="">
            <p>Made with REACT and LOVE by @danilowoz</p>
            <p>You have any question? Read the documentaion.</p>
          </div>

          <Config
            {...this.state}
            _HandleInput={this._HandleInput}
            _HandlePreset={this._HandlePreset}
          />
        </div>
      </LiveProvider>
    )
  }
}

export default App
