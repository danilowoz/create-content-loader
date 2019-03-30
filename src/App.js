import React, { Component } from "react"
import ContentLoader from "react-content-loader"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { Tools } from "react-sketch"
import { debounce } from "throttle-debounce"
import Clipboard from "clipboard"

import { getReactInfo } from "./utils"
import { facebook, instagram, code, bulletList } from "./utils/presets"
import template, { ReactImport } from "./utils/template"
import Canvas from "./Canvas"
import Config from "./Config"
import Header from "./Layout/Header"
import Gallery from "./Gallery"

import ReactIcon from "./assets/react.svg"
import VueIcon from "./assets/vue.svg"
import "./style/style.css"

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
    draw: localStorage.getItem("draw") || facebook,
    focusEditor: false,
    guideline: localStorage.getItem("guideline") || "",
    height: localStorage.getItem("height") || 160,
    primaryColor: localStorage.getItem("primaryColor") || "#f3f3f3",
    renderCanvas: true,
    rtl: localStorage.getItem("rtl") === "true",
    secondaryColor: localStorage.getItem("secondaryColor") || "#ecebeb",
    speed: localStorage.getItem("speed") || 2,
    tool: Tools.Select,
    width: localStorage.getItem("width") || 400,
    loading: true
  }

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard")

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

  _HandleDraw = draw => {
    this.setState({ draw })
  }

  _HandleEditor = (editor, error) => {
    const hasError = this.editor.state.error === undefined
    if (hasError) {
      const state = getReactInfo(editor)
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
      bulletList
    }
    const draw = presents[value]
    this.setState({ draw, height, renderCanvas: false })
  }

  _ResetColors = () => {
    this.setState({
      primaryColor: "#f3f3f3",
      secondaryColor: "#ecebeb"
    })
  }

  _HandleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value, renderCanvas: false })
  }

  _HandleCheckbox = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked, renderCanvas: false })
  }

  componentDidCatch(error, info) {
    this.setState({
      activeItem: false,
      draw: facebook,
      focusEditor: false,
      guideline: "",
      height: 160,
      primaryColor: "#f3f3f3",
      renderCanvas: true,
      secondaryColor: "#ecebeb",
      speed: 2,
      tool: Tools.Select,
      width: 400,
      rtl: false
    })
  }

  render() {
    const { renderCanvas, ...state } = this.state

    const optMycode = {
      data: state,
      importDeclaration: false
    }
    const Mycode = template(optMycode)
    const CopyCodeToClipboard = template({
      ...optMycode,
      importDeclaration: true
    })

    return (
      <LiveProvider
        code={Mycode}
        scope={{ ContentLoader }}
        ref={r => (this.editor = r)}
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
                  <img width="20" src={ReactIcon} alt="React" />{" "}
                  <span>React</span>
                </a>
                <a
                  href="http://danilowoz.com/create-vue-content-loader/"
                  className="handle-framework"
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

                  <LiveEditor onChange={debounce(1000, this._HandleEditor)} />
                </div>
                <LiveError />
              </React.Fragment>
            )}
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
                  style={{
                    width: `${this.state.width}px`,
                    height: `${this.state.height}px`
                  }}
                />
              </Canvas>
            )}
            <Config
              {...this.state}
              _HandleCheckbox={this._HandleCheckbox}
              _HandleInput={this._HandleInput}
              _ResetColors={this._ResetColors}
            />
          </div>
        </div>

        <Gallery />
      </LiveProvider>
    )
  }
}

export default App
