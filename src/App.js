import React, { Component } from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { SketchField, Tools } from 'react-sketch'
import { cleanSVG, SVGtoFabric, getReactInfo } from './utils'
import { facebook, instagram, code, bulletList } from './utils/presets'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      width: 400,
      height: 200,
      speed: 2,
      primaryColor: '#f3f3f3',
      secondaryColor: '#ecebeb',
      draw: facebook,
      tool: Tools.Select,
      activeItem: false,
    }
    this._RenderCanvas = this._RenderCanvas.bind(this)
    this._RemoveItem = this._RemoveItem.bind(this)
    this._Events = this._Events.bind(this)
    this._SVGtoCanvas = this._SVGtoCanvas.bind(this)
  }

  componentDidMount() {
    this._Events()
    this._SVGtoCanvas()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.draw !== this.state.draw) {
      // this._SVGtoCanvas()
    }
  }

  _SVGtoCanvas() {
    const canvas = this._sketch._fc
    const arrFabric = SVGtoFabric(this.state.draw)

    arrFabric.forEach(a => {
      let draw
      if (a.type === 'rect') {
        draw = new window.fabric.Rect(a)
      } else if (a.type === 'circle') {
        draw = new window.fabric.Circle(a)
      }

      canvas.add(draw)
    })

    canvas.renderAll()
  }

  _Events() {
    const self = this

    this._sketch._fc.on({
      'after:render': () => self._RenderCanvas(),
      'object:selected': () => self.setState({ activeItem: true }),
      'selection:cleared': () => self.setState({ activeItem: false }),
    })
  }

  _RenderCanvas() {
    if (this._sketch) {
      const draw = cleanSVG(this._sketch._fc.toSVG())
      this.setState({ draw })
    }
  }

  _RemoveItem() {
    const canvas = this._sketch._fc
    canvas.remove(canvas.getActiveObject())
  }

  render() {
    const { width, height, speed, primaryColor, secondaryColor, draw, activeItem } = this.state

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
          <LiveEditor />
          <LiveError />
          <LiveError />
        </LiveProvider>
        <div className="bottom">
          <div className="editor">
            <p>
              style
              <button onClick={() => this.setState({ draw: facebook })}>facebook</button>
              <button onClick={() => this.setState({ draw: instagram })}>instagram</button>
              <button onClick={() => this.setState({ draw: code })}>code</button>
              <button onClick={() => this.setState({ draw: bulletList })}>bulletList</button>
            </p>
            <p>
              width:
              <input
                type="number"
                value={this.state.width}
                onChange={e => this.setState({ width: e.target.value })}
              />
            </p>
            <p>
              speed:
              <input
                type="number"
                value={this.state.speed}
                onChange={e => this.setState({ speed: e.target.value })}
              />
            </p>
            <p>
              height:
              <input
                type="number"
                value={this.state.height}
                onChange={e => this.setState({ height: e.target.value })}
              />
            </p>
            <p>
              primaryColor:
              <input
                type="color"
                value={this.state.primaryColor}
                onChange={e => this.setState({ primaryColor: e.target.value })}
              />
            </p>
            <p>
              secondaryColor:
              <input
                type="color"
                value={this.state.secondaryColor}
                onChange={e => this.setState({ secondaryColor: e.target.value })}
              />
            </p>
            <button onClick={() => this.setState({ tool: Tools.Select })}>Select</button>
            {activeItem && <button onClick={this._RemoveItem}>Remove current item</button>}
            <button onClick={() => this.setState({ tool: Tools.Rectangle })}>Rectangle</button>
            <button onClick={() => this.setState({ tool: Tools.Circle })}>Circle</button>
            <button onClick={this._RenderCanvas}>Render</button>
          </div>
          <div className="wysiwyg">
            <LiveProvider code={Mycode} scope={{ ContentLoader, Rect, Circle }}>
              <LivePreview
                className="wysiwyg__preview"
                style={{ width: `${this.state.width}px`, height: `${this.state.height}px` }}
              />
            </LiveProvider>
            <SketchField
              width={`${this.state.width}px`}
              height={`${this.state.height}px`}
              tool={this.state.tool}
              lineWidth={0}
              color="black"
              ref={c => (this._sketch = c)}
              className="wysiwyg__sketch"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
