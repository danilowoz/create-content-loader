import React, { Component } from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { SketchField, Tools } from 'react-sketch'
import { cleanSVG } from './utils'
import './App.css'

const DEFAULTDRAW = `
<rect x="0" y="0" rx="5" ry="5" width="70" height="70"></rect>
<rect x="80" y="17" rx="4" ry="4" width="300" height="13"></rect>
<rect x="80" y="40" rx="3" ry="3" width="250" height="10"></rect>
<rect x="0" y="80" rx="3" ry="3" width="350" height="10"></rect>
<rect x="0" y="100" rx="3" ry="3" width="400" height="10"></rect>
<rect x="0" y="120" rx="3" ry="3" width="360" height="10"></rect>`

class App extends Component {
  constructor() {
    super()

    this.state = {
      width: 400,
      height: 200,
      speed: 2,
      primaryColor: '#f3f3f3',
      secondaryColor: '#ecebeb',
      tool: Tools.Rectangle,
      draw: DEFAULTDRAW,
    }
    this._RenderCanvas = this._RenderCanvas.bind(this)
  }

  componentDidMount() {
    const self = this

    // window.fabric.loadSVGFromString(this.state.draw, (obj, opt) => {
    //   const util = window.fabric.util.groupSVGElements(obj, opt)
    //   this._sketch._fc
    //     .add(util)
    //     .centerObject(util)
    //     .renderAll()
    //   util.setCoords()
    // })

    this._sketch._fc.on({
      'after:render': () => self._RenderCanvas(),
    })
  }

  _RenderCanvas() {
    const draw = cleanSVG(this._sketch._fc.toSVG())
    this.setState({ draw })
  }

  render() {
    const { width, height, speed, primaryColor, secondaryColor, tool, draw } = this.state

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
        </LiveProvider>
        <div className="bottom">
          <div className="editor">
            <p>
              width:
              <input
                type="number"
                value={this.state.width}
                onChange={e => this.setState({ width: e.target.value })}
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
              speed:
              <input
                type="number"
                value={this.state.speed}
                onChange={e => this.setState({ speed: e.target.value })}
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
            <button onClick={() => this.setState({ tool: Tools.Rectangle })}>Rectangle</button>
            <button onClick={() => this.setState({ tool: Tools.Circle })}>Circle</button>
          </div>
          <div className="wysiwyg">
            <LiveProvider code={Mycode} scope={{ ContentLoader, Rect, Circle }}>
              <LivePreview className="wysiwyg__preview" />
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
