import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'
import { LiveProvider, LiveError, LivePreview } from 'react-live'
import Clipboard from 'clipboard'
import ReactGA from 'react-ga'
import { debounce } from 'throttle-debounce'

import Tools from '../../_third-parts/react-sketch/src/tools'
import { facebook, instagram, code, bulletList } from '../utils/presets'
import template, { renderSnippet } from '../utils/template'
import Canvas from '../components/Canvas'
import Config from '../components/Config'
import Highlighter from '../components/Highlighter'
import Header from '../components/Layout/Header'
import Gallery from '../Gallery'

import '../components/style/style.css'
import SEO from '../components/SEO'
import Upload from '../components/Upload/Upload'
import UploadSnippet from '../components/Upload/UploadSnippet'
import LearnMore from '../components/LearnMore'

const globalLocalStorage =
  global.window && global.window.localStorage
    ? global.window.localStorage
    : { getItem: () => {} }

class App extends Component {
  state = {
    activeItem: false,
    draw: globalLocalStorage.getItem('draw') || facebook,
    gridVisibility: true,
    height: globalLocalStorage.getItem('height') || 160,
    mode: globalLocalStorage.getItem('mode') || 'reactDom',
    backgroundColor: globalLocalStorage.getItem('backgroundColor') || '#f3f3f3',
    renderCanvas: true,
    rtl: globalLocalStorage.getItem('rtl') === 'true',
    foregroundColor: globalLocalStorage.getItem('foregroundColor') || '#ecebeb',
    speed: globalLocalStorage.getItem('speed') || 2,
    tool: Tools ? Tools.Select : '',
    width: globalLocalStorage.getItem('width') || 400,
    editingMode: 'code',
  }

  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard')

    this.clipboard.on('success', () => {
      ReactGA.event({
        category: 'Creator',
        action: `clipboard`,
      })
    })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 1200)
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderCanvas === false) {
      this.setState({ renderCanvas: true })
    }

    this.setLocalStorage()
  }

  componentDidCatch(error, info) {
    this.setState({
      draw: facebook,
      height: 160,
      backgroundColor: '#f3f3f3',
      foregroundColor: '#ecebeb',
      speed: 2,
      tool: Tools ? Tools.Select : '',
      width: 400,
      rtl: false,
    })
  }

  setLocalStorage = () => {
    if (global.window && global.window.localStorage) {
      Object.keys(this.state).map(item =>
        localStorage.setItem(item, this.state[item])
      )
    }
  }

  handleDraw = draw => this.setState({ draw })

  handleTool = tool => {
    this.setState({ tool })

    ReactGA.event({
      category: 'Draw',
      action: `set tool`,
      label: tool,
    })
  }

  handlePreset = e => {
    const value = e.target.value
    const height = e.target.dataset.height
    const width = e.target.dataset.width

    const presents = {
      facebook,
      instagram,
      code,
      bulletList,
    }
    const draw = presents[value]

    this.setState({ draw, height, width, renderCanvas: false })

    ReactGA.event({
      category: 'Draw',
      action: `set preset`,
      label: value,
    })
  }

  resetColors = () => {
    this.setState({
      backgroundColor: '#f3f3f3',
      foregroundColor: '#ecebeb',
    })

    ReactGA.event({
      category: 'Config',
      action: `reset colors`,
    })
  }

  handleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value, renderCanvas: false })

    ReactGA.event({
      category: 'Config',
      action: `input`,
      label: name,
    })
  }

  handleColor = e => {
    this.debouncedHandleColor(e.target.name, e.target.value)
  }

  debouncedHandleColor = debounce(250, (name, value) => {
    this.setState({ [name]: value, renderCanvas: false })

    ReactGA.event({
      category: 'Config',
      action: `input`,
      label: name,
    })
  })

  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked, renderCanvas: false })

    ReactGA.event({
      category: 'Config',
      action: `input`,
      label: name,
    })
  }

  handleImageAsBackground = event => {
    ReactGA.event({
      category: 'Config',
      action: 'set image as background',
    })

    // reset value
    if (!event) {
      return this.setState({
        imageAsBackground: null,
      })
    }

    return this.setState({
      imageAsBackground: URL.createObjectURL(event.target.files[0]),
    })
  }

  handleMode = mode => {
    this.setState({ mode })

    ReactGA.event({
      category: 'Config',
      action: 'mode',
      label: mode,
    })
  }

  handleSvg = ({ width, height, path }) => {
    const pathWithLineBreak = path.replace(/\/>/gi, ' /> \n')

    this.setState({
      width: width || this.state.width,
      height: height || this.state.height,
      draw: pathWithLineBreak,
      renderCanvas: false,
      editingMode: 'code',
    })

    ReactGA.event({
      category: 'Draw',
      action: `upload custom`,
    })
  }

  handleResetRenderCanvas = () => this.setState({ renderCanvas: false })

  handleSvgMode = editingMode => {
    this.setState({ editingMode })

    ReactGA.event({
      category: 'Edit mode',
      action: editingMode,
    })
  }

  handleSvgDone = () => {
    this.setState({ editingMode: 'code' })
  }

  render() {
    const optMyCode = {
      data: this.state,
      importDeclaration: false,
    }

    const liveCode = renderSnippet(optMyCode)
    const snippetCode = template[this.state.mode](optMyCode)

    return (
      <LiveProvider
        code={liveCode}
        scope={{ ContentLoader }}
        ref={r => (this.editor = r)}
        noInline={true}
        disabled
      >
        <SEO />
        <div className="App">
          <div className="container">
            <Header />

            <div className="app-column">
              <div className="app-editor">
                <div className="app-mode">
                  <button
                    className={this.state.editingMode === 'code' && 'active'}
                    onClick={() => this.handleSvgMode('code')}
                  >
                    Code
                  </button>
                  <button
                    className={this.state.editingMode === 'snippet' && 'active'}
                    onClick={() => this.handleSvgMode('snippet')}
                  >
                    Snippet
                  </button>
                  <button
                    className={this.state.editingMode === 'upload' && 'active'}
                    onClick={() => this.handleSvgMode('upload')}
                  >
                    Upload SVG <span>New!</span>
                  </button>
                </div>

                {this.state.editingMode === 'upload' && (
                  <Upload handleSvg={this.handleSvg} />
                )}

                {this.state.editingMode === 'snippet' && (
                  <UploadSnippet handleSvg={this.handleSvg} />
                )}

                {this.state.editingMode === 'code' && (
                  <Highlighter code={snippetCode} language="javascript" />
                )}

                <div className="app-editor__language-selector">
                  <button
                    onClick={() => this.handleMode('reactDom')}
                    className={`app-editor__language-button ${this.state
                      .mode === 'reactDom' && 'current'}`}
                  >
                    <span>React</span>
                  </button>

                  <button
                    onClick={() => this.handleMode('reactNative')}
                    className={`app-editor__language-button ${this.state
                      .mode === 'reactNative' && 'current'}`}
                  >
                    <span>React Native</span>
                  </button>

                  <button
                    onClick={() => this.handleMode('vue')}
                    className={`app-editor__language-button ${this.state
                      .mode === 'vue' && 'current'}`}
                  >
                    <span>Vue</span>
                  </button>

                  <button
                    onClick={() => this.handleMode('svg')}
                    className={`app-editor__language-button ${this.state
                      .mode === 'svg' && 'current'}`}
                  >
                    <span>SVG</span>
                  </button>

                  <button className="app-editor__language-button">
                    <span>
                      Gif <span>Soon</span>
                    </span>
                  </button>

                  <span
                    className="copy-to-clipboard"
                    data-clipboard-text={snippetCode}
                  >
                    Copy to clipboard
                  </span>
                </div>
              </div>
              <LiveError />
            </div>

            <div>
              {this.state.renderCanvas && (
                <Canvas
                  {...this.state}
                  handleDraw={this.handleDraw}
                  handleSelectedItem={this.handleSelectedItem}
                  handleTool={this.handleTool}
                  handlePreset={this.handlePreset}
                  handleResetRenderCanvas={this.handleResetRenderCanvas}
                >
                  <LivePreview
                    style={{
                      width: `${this.state.width}px`,
                      height: `${this.state.height}px`,
                      position: 'relative',
                    }}
                  />
                </Canvas>
              )}

              <Config
                {...this.state}
                handleCheckbox={this.handleCheckbox}
                handleInput={this.handleInput}
                handleColor={this.handleColor}
                handleImageAsBackground={this.handleImageAsBackground}
                resetColors={this.resetColors}
              />

              <LearnMore />
            </div>
          </div>
        </div>

        <Gallery />
      </LiveProvider>
    )
  }
}

export default App
