import React, { Component } from "react"
import { SketchField, Tools } from "react-sketch"
import classnames from "classnames"
import { Tooltip } from "react-tippy"
import ClickOutside from "react-click-outside"

import { SVGtoFabric, JsonToSVG, CanvasAddedProp } from "./utils"
import selectIcon from "./assets/select.svg"
import trashtIcon from "./assets/trash.svg"
import rectIcon from "./assets/rect.svg"
import circleIcon from "./assets/circle.svg"

import "./tippy.css"

const Tip = ({ title, children }) => (
  <Tooltip
    title={title}
    arrow
    distance={25}
    trigger="mouseenter"
    animation="shift"
    size="small"
  >
    {children}
  </Tooltip>
)

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCanvas: true
    }
  }

  componentDidMount() {
    this._Events()
    this._SVGtoCanvas()
    this._RemoveByKeyPress()
  }

  _SVGtoCanvas = () => {
    const canvas = this._sketch && this._sketch._fc
    const arrFabric = SVGtoFabric(this.props.draw)

    if (canvas) {
      arrFabric.forEach(a => {
        let draw
        if (a && a.type === "rect") {
          draw = new window.fabric.Rect(a)
        } else if (a && a.type === "circle") {
          draw = new window.fabric.Circle(a)
        }

        draw && canvas.add(draw)
      })

      canvas.renderAll()
    }
  }

  _RenderCanvas = () => {
    if (this._sketch) {
      const draw = JsonToSVG(this._sketch._fc.toJSON())
      this.props._HandleDraw(draw)
    }
  }

  _RemoveSelection = () => {
    const canvas = this._sketch && this._sketch._fc
    if (canvas) {
      canvas.deactivateAll().renderAll()
      this.props._HandleSelectedItem(false)
    }
  }

  _RemoveByKeyPress = () => {
    document.addEventListener(
      "keydown",
      e => {
        if (e.code === "Backspace") {
          this._RemoveItem()
        }
      },
      false
    )
  }

  _RemoveItem = () => {
    const canvas = this._sketch && this._sketch._fc

    if (canvas && canvas.getActiveObject()) {
      canvas.remove(canvas.getActiveObject())
    }
  }

  _Events = () => {
    const self = this

    this._sketch._fc.on({
      "after:render": () => self._RenderCanvas(),
      "object:selected": item =>
        (item.target = CanvasAddedProp(item.target)) &&
        self.props._HandleSelectedItem(true),
      "object:added": item => (item.target = CanvasAddedProp(item.target)),
      "object:moving": item => (item.target = CanvasAddedProp(item.target)),
      "selection:cleared": () => self.props._HandleSelectedItem(false)
    })
  }

  render() {
    const {
      _HandlePreset,
      _HandleTool,
      width,
      height,
      activeItem,
      tool,
      children,
      guideline
    } = this.props

    return [
      <div className="app-handlers" key="handlers">
        <button
          className={classnames("app-handlers__tool", {
            "app-handlers__active": tool === "select"
          })}
          onClick={() => _HandleTool(Tools.Select)}
        >
          <Tip title="Select tool">
            <img src={selectIcon} alt="select tool" />
          </Tip>
        </button>
        <button
          className={classnames("app-handlers__tool", {
            "app-handlers__active": tool === "rectangle"
          })}
          onClick={() => _HandleTool(Tools.Rectangle)}
        >
          <Tip title="Rect tool">
            <img src={rectIcon} alt="rect tool" />
          </Tip>
        </button>
        <button
          className={classnames("app-handlers__tool", {
            "app-handlers__active": tool === "circle"
          })}
          onClick={() => _HandleTool(Tools.Circle)}
        >
          <Tip title="Circle tool">
            <img src={circleIcon} alt="circle tool" />
          </Tip>
        </button>

        <div className="app-handlers__div">Presets:</div>

        <button
          className="app-handlers__preset"
          value="facebook"
          data-height="160"
          onClick={_HandlePreset}
        >
          facebook
        </button>
        <button
          className="app-handlers__preset"
          value="instagram"
          data-height="475"
          onClick={_HandlePreset}
        >
          instagram
        </button>
        <button
          className="app-handlers__preset"
          value="code"
          data-height="160"
          onClick={_HandlePreset}
        >
          code
        </button>
        <button
          className="app-handlers__preset"
          value="bulletList"
          data-height="160"
          onClick={_HandlePreset}
        >
          bulletList
        </button>

        {activeItem && (
          <button className="app-handler__trash" onClick={this._RemoveItem}>
            <Tip title="Delete selected item">
              <img src={trashtIcon} alt="remove item" />
            </Tip>
          </button>
        )}
      </div>,
      <div
        className={classnames("app-canvas", {
          "app-canvas__draw": tool === "rectangle" || tool === "circle"
        })}
        key="canvas"
      >
        {guideline && (
          <img
            src={guideline}
            className="app-canvas__guideline"
            alt="guideline"
          />
        )}
        {children}
        <ClickOutside onClickOutside={this._RemoveSelection}>
          <SketchField
            width={`${width}px`}
            height={`${height}px`}
            tool={tool}
            lineWidth={0}
            color="black"
            ref={c => (this._sketch = c)}
            className="app-canvas__sketch"
          />
        </ClickOutside>
      </div>
    ]
  }
}

export default Canvas
