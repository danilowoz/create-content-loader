import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Tools } from 'react-sketch'
import { debounce } from 'throttle-debounce'
import Clipboard from 'clipboard'

import { getReactInfo, VueToReact } from './utils'
import { facebook, instagram, code, bulletList } from './utils/presets'
import template, { ReactImport, VueImport } from './utils/template'
import Canvas from './Canvas'
import Config from './Config'
import ReactIcon from './assets/react.svg'
import VueIcon from './assets/vue.svg'
import Header from './Header'
import Footer from './Footer'
import './App.css'

class App extends Component {
  state = {
    framework: localStorage.getItem('framework') || 'react',
    width: localStorage.getItem('width') || 400,
    height: localStorage.getItem('height') || 160,
    speed: localStorage.getItem('speed') || 2,
    primaryColor: localStorage.getItem('primaryColor') || '#f3f3f3',
    secondaryColor: localStorage.getItem('secondaryColor') || '#ecebeb',
    draw: localStorage.getItem('draw') || facebook,
    tool: Tools.Select,
    activeItem: false,
    renderCanvas: true,
    focusEditor: false,
  }

  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard')
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  setLocalStorage = () => {
    Object.keys(this.state).map(item => localStorage.setItem(item, this.state[item]))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderCanvas === false && this.state.focusEditor === false) {
      this.setState({ renderCanvas: true })
    }

    this.setLocalStorage()
  }

  _HandleFramework = framework => {
    this.setState({ framework })
  }

  _HandleDraw = draw => {
    this.setState({ draw })
  }

  _HandleEditor = (editor, error) => {
    const hasError = this.editor.state.error === undefined
    if (hasError) {
      const state = getReactInfo(editor, this.state.framework)
      state.renderCanvas = false
      this.setState(state)
    }
  }

  _HandleSelectedItem = activeItem => {
    this.setState({ activeItem })
  }

  _HandleTool = tool => {
    this.setState({ tool })
  }

  _HandlePreset = e => {
    const value = e.target.value
    const height = e.target.dataset.height
    const presents = {
      facebook,
      instagram,
      code,
      bulletList,
    }
    const draw = presents[value]
    this.setState({ draw, height, renderCanvas: false })
  }

  _ResetColors = () => {
    this.setState({
      primaryColor: '#f3f3f3',
      secondaryColor: '#ecebeb',
    })
  }

  _HandleInput = e => {
    this.__DebouncedHandleInput(e.target.name, e.target.value)
  }

  __DebouncedHandleInput = debounce(250, (name, value) => {
    this.setState({ [name]: value, renderCanvas: false })
  })

  render() {
    const {
      width,
      height,
      speed,
      primaryColor,
      secondaryColor,
      draw,
      framework,
      renderCanvas,
    } = this.state

    const optMycode = {
      data: { width, height, speed, primaryColor, secondaryColor, draw },
      type: framework,
      importDeclaration: false,
    }
    const Mycode = template(optMycode)
    const CopyCodeToClipboard = template({ ...optMycode, importDeclaration: true })

    return (
      <LiveProvider
        code={Mycode}
        scope={{ ContentLoader }}
        ref={r => (this.editor = r)}
        transformCode={code => VueToReact(code, framework)}
      >
        <div className="App">
          <Header />

          <div>
            <button
              className={`handle-framework ${framework === 'react' ? 'current' : ''}`}
              onClick={() => this._HandleFramework('react')}
            >
              <img src={ReactIcon} alt="React" /> <span>React</span>
            </button>

            <button
              className={`handle-framework handle-framework--vue ${
                framework === 'vue' ? 'current' : ''
              }`}
              onClick={() => this._HandleFramework('vue')}
            >
              <img src={VueIcon} alt="Vue" /> <span>Vue</span>
            </button>
            <a
              href="https://github.com/egoist/vue-content-loader"
              target="_blank"
              rel="noopener noreferrer"
            >
              by @egoist
            </a>
            <div className="app-editor">
              <span className="app-editor__tab">
                <span />
              </span>
              <span className="copy-to-clipboard" data-clipboard-text={CopyCodeToClipboard}>
                Copy to Clipboard
              </span>

              {framework === 'react' && <ReactImport />}

              <LiveEditor onChange={debounce(500, this._HandleEditor)} />

              {framework === 'vue' && <VueImport />}
            </div>

            <LiveError />

            <Footer />
          </div>

          <div>
            {renderCanvas && (
              <Canvas
                {...this.state}
                _HandleDraw={this._HandleDraw}
                _HandleSelectedItem={this._HandleSelectedItem}
                _HandleTool={this._HandleTool}
                _HandlePreset={this._HandlePreset}
              >
                <LivePreview
                  style={{ width: `${this.state.width}px`, height: `${this.state.height}px` }}
                />
              </Canvas>
            )}
            <Config
              {...this.state}
              _HandleInput={this._HandleInput}
              _ResetColors={this._ResetColors}
            />
          </div>
        </div>
      </LiveProvider>
    )
  }
}

export default App
