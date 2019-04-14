import React, { Component } from 'react'
import ContentLoader from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Tools } from 'react-sketch'
import { debounce } from 'throttle-debounce'
import Clipboard from 'clipboard'
import ReactGA from 'react-ga'

import { getReactInfo } from './utils'
import { facebook, instagram, code, bulletList } from './utils/presets'
import template, { ReactImport } from './utils/template'
import Canvas from './Canvas'
import Config from './Config'
import Header from './Layout/Header'
import Gallery from './Gallery'

import ReactIcon from './assets/react.svg'
import VueIcon from './assets/vue.svg'
import './style/style.css'

const EditorLoader = () => (
  <ContentLoader
    height={475}
    width={650}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="2" y="4" rx="8" ry="8" width="70" height="20" />
    <rect x="100" y="4" rx="8" ry="8" width="60" height="20" />
    <rect x="0" y="40" rx="5" ry="5" width="650" height="415" />
  </ContentLoader>
)

class App extends Component {
  state = {
    activeItem: false,
    draw: localStorage.getItem('draw') || facebook,
    focusEditor: false,
    height: localStorage.getItem('height') || 160,
    loading: false,
    primaryColor: localStorage.getItem('primaryColor') || '#f3f3f3',
    renderCanvas: true,
    rtl: localStorage.getItem('rtl') === 'true',
    secondaryColor: localStorage.getItem('secondaryColor') || '#ecebeb',
    speed: localStorage.getItem('speed') || 2,
    tool: Tools.Select,
    width: localStorage.getItem('width') || 400,
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

  setLocalStorage = () => {
    Object.keys(this.state).map(item =>
      localStorage.setItem(item, this.state[item])
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderCanvas === false && this.state.focusEditor === false) {
      this.setState({ renderCanvas: true })
    }

    this.setLocalStorage()
  }

  handleDraw = draw => {
    this.setState({ draw })
  }

  handleEditor = (editor, error) => {
    const hasError = this.editor.state.error === undefined
    if (hasError) {
      const state = getReactInfo(editor)
      state.renderCanvas = false
      this.setState(state)
    }
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
    this.setState({ draw, height, renderCanvas: false })

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
    this.setState({ [name]: value, renderCanvas: false })

    ReactGA.event({
      category: 'Config',
      action: `input`,
      label: name,
    })
  }

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

  componentDidCatch(error, info) {
    this.setState({
      activeItem: false,
      draw: facebook,
      focusEditor: false,
      height: 160,
      primaryColor: '#f3f3f3',
      renderCanvas: true,
      secondaryColor: '#ecebeb',
      speed: 2,
      tool: Tools.Select,
      width: 400,
      rtl: false,
    })
  }

  render() {
    const { renderCanvas, ...state } = this.state

    const optMycode = {
      data: state,
      importDeclaration: false,
    }
    const Mycode = template(optMycode)
    const CopyCodeToClipboard = template({
      ...optMycode,
      importDeclaration: true,
    })

    return (
      <LiveProvider
        code={Mycode}
        scope={{ ContentLoader }}
        ref={r => (this.editor = r)}
        noInline={true}
      >
        <div className="App">
          <Header />

          <div>
            {state.loading ? (
              <EditorLoader />
            ) : (
              <React.Fragment>
                <a
                  href="http://danilowoz.com/create-content-loader/"
                  className="handle-framework current"
                >
                  <img width="20" src={ReactIcon} alt="React" />{' '}
                  <span>React</span>
                </a>
                <a
                  href="http://danilowoz.com/create-vue-content-loader/"
                  className="handle-framework"
                  onClick={() => {
                    ReactGA.event({
                      category: 'Creator',
                      action: `go to vue`,
                    })
                  }}
                >
                  <img width="20" src={VueIcon} alt="React" /> <span>Vue</span>
                </a>
                <div className="app-editor">
                  <span className="app-editor__tab">
                    <span />
                  </span>
                  <span
                    className="copy-to-clipboard"
                    data-clipboard-text={CopyCodeToClipboard}
                  >
                    Copy to clipboard
                  </span>

                  <ReactImport />

                  <LiveEditor onChange={debounce(1000, this.handleEditor)} />
                </div>
                <LiveError />
              </React.Fragment>
            )}
          </div>

          <div>
            {renderCanvas && (
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
                  }}
                />
              </Canvas>
            )}
            <Config
              {...this.state}
              handleCheckbox={this.handleCheckbox}
              handleInput={this.handleInput}
              handleImageAsBackground={this.handleImageAsBackground}
              resetColors={this.resetColors}
            />
          </div>
        </div>

        <Gallery />
      </LiveProvider>
    )
  }
}

export default App
