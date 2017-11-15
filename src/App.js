import React, { Component } from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { SketchField, Tools } from 'react-sketch'
import { cleanSVG } from './utils'
import './App.css'

const DEFAULTDRAW = `<Circle x={195} y={30} radius={30} />
        <Rect x={50} y={80} height={10} radius={5} width={300} />
        <Rect x={75} y={100} height={10} radius={5} width={250} />`

class App extends Component {
  constructor() {
    super()

    this.state = {
      width: 400,
      height: 200,
      speed: 3,
      primaryColor: '#333',
      secondaryColor: '#999',
      tool: Tools.Rectangle,
      draw: DEFAULTDRAW,
    }
    this._RenderCanvas = this._RenderCanvas.bind(this)
  }

  componentDidMount() {
    const self = this
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
    )
  }
}

export default App
