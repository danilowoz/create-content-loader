import React, { Component } from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Tools } from 'react-sketch'
import { facebook, instagram, code, bulletList } from './utils/presets'
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
    draw: facebook,
    tool: Tools.Select,
    activeItem: false,
    showCanvas: true,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showCanvas === false) {
      this.setState({
        showCanvas: true,
      })
    }
  }

  _HandleEditor = draw => {
    this.setState({ draw })
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
    this.setState({ draw, showCanvas: false })
  }

  _HandleInput = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  render() {
    const { width, height, speed, primaryColor, secondaryColor, draw, showCanvas } = this.state

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
          <Config
            {...this.state}
            _HandleInput={this._HandleInput}
            _HandlePreset={this._HandlePreset}
          />

          <div className="wysiwyg">
            <LiveProvider code={Mycode} scope={{ ContentLoader, Rect, Circle }}>
              <LivePreview
                className="wysiwyg__preview"
                style={{ width: `${this.state.width}px`, height: `${this.state.height}px` }}
              />
            </LiveProvider>

            {showCanvas && (
              <Canvas
                {...this.state}
                _HandleEditor={this._HandleEditor}
                _HandleSeletedItem={this._HandleSeletedItem}
                _HandleTool={this._HandleTool}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
