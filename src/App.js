import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'
import { LiveProvider, LiveError, LivePreview } from 'react-live'
import { Tools } from 'react-sketch'
import Clipboard from 'clipboard'
import ReactGA from 'react-ga'

import { facebook, instagram, code, bulletList } from './utils/presets'
import template, { renderSnippet } from './utils/template'
import Canvas from './Canvas'
import Config from './Config'
import Header from './Layout/Header'
import Gallery from './Gallery'
import Highlighter from './Highlighter'

import './style/style.css'

class App extends Component {
  state = {
    activeItem: false,
    draw: facebook,
    focusEditor: false,
    gridVisibility: true,
    height: 160,
    mode: 'reactDom',
    primaryColor: '#f3f3f3',
    rtl: false,
    secondaryColor: '#ecebeb',
    speed: 2,
    tool: Tools.Select,
    width: 400,
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

  handleDraw = draw => {
    this.setState({ draw })
  }

  handleSelectedItem = activeItem => {
    this.setState({ activeItem })

    ReactGA.event({
      category: 'Draw',
      action: `selected item`,
    })
  }

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
    const presents = {
      facebook,
      instagram,
      code,
      bulletList,
    }
    const draw = presents[value]

    this.setState({ draw, height })

    ReactGA.event({
      category: 'Draw',
      action: `set preset`,
      label: value,
    })
  }

  resetColors = () => {
    this.setState({
      primaryColor: '#f3f3f3',
      secondaryColor: '#ecebeb',
    })

    ReactGA.event({
      category: 'Config',
      action: `reset colors`,
    })
  }

  handleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value })

    ReactGA.event({
      category: 'Config',
      action: `input`,
      label: name,
    })
  }

  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked })

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

  componentDidCatch(error, info) {
    this.setState({
      activeItem: false,
      draw: facebook,
      focusEditor: false,
      height: 160,
      primaryColor: '#f3f3f3',
      secondaryColor: '#ecebeb',
      speed: 2,
      tool: Tools.Select,
      width: 400,
      rtl: false,
    })
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
        <div className="App">
          <div className="container">
            <Header />

            <div>
              <div className="app-editor">
                <Highlighter code={snippetCode} language="javascript" />

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
                    onClick={() => this.handleMode('html')}
                    className={`app-editor__language-button ${this.state
                      .mode === 'html' && 'current'}`}
                  >
                    <span>HTML</span>
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
              <Canvas
                {...this.state}
                handleDraw={this.handleDraw}
                handleSelectedItem={this.handleSelectedItem}
                handleTool={this.handleTool}
                handlePreset={this.handlePreset}
              >
                <LivePreview
                  style={{
                    width: `${this.state.width}px`,
                    height: `${this.state.height}px`,
                    position: 'relative',
                  }}
                />
              </Canvas>

              <Config
                {...this.state}
                handleCheckbox={this.handleCheckbox}
                handleInput={this.handleInput}
                handleImageAsBackground={this.handleImageAsBackground}
                resetColors={this.resetColors}
              />
            </div>
          </div>
        </div>

        <Gallery />
      </LiveProvider>
    )
  }
}

export default App
