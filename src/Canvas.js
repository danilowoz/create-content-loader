import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'
import { SVGtoFabric, JsonToSVG, CanvasAddedProp } from './utils'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCanvas: true,
    }
  }

  componentDidMount() {
    this._Events()
    this._SVGtoCanvas()
  }

  _SVGtoCanvas = () => {
    const canvas = this._sketch._fc
    const arrFabric = SVGtoFabric(this.props.draw)

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

  _RenderCanvas = () => {
    if (this._sketch) {
      const draw = JsonToSVG(this._sketch._fc.toJSON())
      this.props._HandleDraw(draw)
    }
  }

  _RemoveItem = () => {
    const canvas = this._sketch._fc
    canvas.remove(canvas.getActiveObject())
  }

  _Events = () => {
    const self = this

    this._sketch._fc.on({
      'after:render': () => self._RenderCanvas(),
      'object:selected': item =>
        (item.target = CanvasAddedProp(item.target)) || self.props._HandleSeletedItem(true),
      'object:added': item => (item.target = CanvasAddedProp(item.target)),
      'object:moving': item => (item.target = CanvasAddedProp(item.target)),
      'selection:cleared': () => self.props._HandleSeletedItem(false),
    })
  }

  render() {
    const { _HandleTool, width, height, activeItem, tool } = this.props
    return (
      <div>
        <button onClick={() => _HandleTool(Tools.Select)}>Select</button>
        {activeItem && <button onClick={this._RemoveItem}>Remove current item</button>}
        <button onClick={() => _HandleTool(Tools.Rectangle)}>Rectangle</button>
        <button onClick={() => _HandleTool(Tools.Circle)}>Circle</button>
        <button onClick={this._RenderCanvas}>Render</button>
        <SketchField
          width={`${width}px`}
          height={`${height}px`}
          tool={tool}
          lineWidth={0}
          color="black"
          ref={c => (this._sketch = c)}
          className="wysiwyg__sketch"
        />
      </div>
    )
  }
}

export default Canvas
