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
      tool: Tools.Rectangle,
      draw: DEFAULTDRAW,
    }
    this._draw = this._draw.bind(this)
  }

  componentDidMount() {}

  _draw() {
    const draw = cleanSVG(this._sketch._fc.toSVG())
    this.setState({ draw })
  }

  render() {
    const Mycode = `
    const MyLoader = () => (
      <ContentLoader
        height={${this.state.height}}
        width={${this.state.width}}
        // speed={1}
        primaryColor={"#333"}
        secondaryColor={"#999"}
      >
      ${this.state.draw}
      </ContentLoader>
    )
  `
    return (
      <div className="App">
        <p>import ContentLoader, {(Rect, Circle)} from "react-content-loader";</p>
        <LiveProvider code={Mycode} scope={{ ContentLoader, Rect, Circle }}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>

        <SketchField
          style={{ border: '1px solid red' }}
          width={`${this.state.width}px`}
          height={`${this.state.height}px`}
          tool={this.state.tool}
          fillColor="#000"
          color="black"
          ref={c => (this._sketch = c)}
        />

        <div>
          <button onClick={this._draw}>Draw</button>
          <button onClick={() => this.setState({ tool: Tools.Select })}>Select</button>
          <button onClick={() => this.setState({ tool: Tools.Rectangle })}>Rectangle</button>
          <button onClick={() => this.setState({ tool: Tools.Circle })}>Circle</button>
          width:
          <input
            value={this.state.width}
            onChange={e => this.setState({ width: e.target.value })}
          />
          height:
          <input
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>
      </div>
    )
  }
}

export default App
