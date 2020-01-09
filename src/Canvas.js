import React, { Component, Fragment } from 'react'
import { SketchField, Tools } from 'react-sketch'
import classnames from 'classnames'
import ClickOutside from 'react-click-outside'
import ReactGA from 'react-ga'

import { SVGtoFabric, JsonToSVG, CanvasAddedProp } from './utils'

import selectIcon from './assets/select.svg'
import trashIcon from './assets/trash.svg'
import cloneIcon from './assets/clone.svg'
import rectIcon from './assets/rect.svg'
import circleIcon from './assets/circle.svg'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCanvas: true,
    }
  }

  componentDidMount() {
    this.setupEvents()
    this.SVGtoCanvas()
    this.handleKeyboardInput()
  }

  SVGtoCanvas = () => {
    const canvas = this._sketch && this._sketch._fc
    const arrFabric = SVGtoFabric(this.props.draw)

    if (canvas) {
      arrFabric.forEach(a => {
        let draw
        if (a && a.type === 'rect') {
          draw = new window.fabric.Rect(a)
        } else if (a && a.type === 'circle') {
          draw = new window.fabric.Circle(a)
        }

        draw && canvas.add(draw)
      })

      canvas.renderAll()
    }
  }

  renderCanvas = () => {
    if (this._sketch) {
      const draw = JsonToSVG(this._sketch._fc.toJSON())
      this.props.handleDraw(draw)
    }
  }

  removeSelection = eventFromOutsideClick => {
    const notClickingOnTrashButton =
      eventFromOutsideClick &&
      !eventFromOutsideClick.path.includes(this.trashButton)
    const notClickingOnCloneButton =
      eventFromOutsideClick &&
      !eventFromOutsideClick.path.includes(this.cloneButton)
    const canvas = this._sketch && this._sketch._fc
    const { activeItem } = this.props

    if (
      canvas &&
      notClickingOnTrashButton &&
      notClickingOnCloneButton &&
      activeItem
    ) {
      canvas.discardActiveObject().renderAll()
      this.props.handleSelectedItem(false)
    }
  }

  handleKeyboardInput = () => {
    document.addEventListener(
      'keydown',
      e => {
        switch (e.code) {
          case 'Backspace':
          case 'Delete':
            this.removeItem()
            break
          case 'ArrowUp':
            this.moveItem(0, -1)
            break
          case 'ArrowDown':
            this.moveItem(0, 1)
            break
          case 'ArrowLeft':
            this.moveItem(-1, 0)
            break
          case 'ArrowRight':
            this.moveItem(1, 0)
            break
          default:
            break
        }
      },
      false
    )
  }

  moveItem = (x, y) => {
    const canvas = this._sketch && this._sketch._fc
    if (canvas && canvas.getActiveObject()) {
      const selection = canvas.getActiveObject()
      selection.set('left', selection.left + x)
      selection.set('top', selection.top + y)
      selection.setCoords()
      canvas.requestRenderAll()
    }
  }

  removeItem = () => {
    if (this._sketch) {
      this._sketch.removeSelected()
    }

    ReactGA.event({
      category: 'Draw',
      action: 'remove item',
    })
  }

  cloneItem = () => {
    if (this._sketch) {
      this._sketch.copy()
      this._sketch.paste()
    }

    ReactGA.event({
      category: 'Draw',
      action: 'close item',
    })
  }

  setupEvents = () => {
    const self = this

    this._sketch._fc.on({
      'after:render': () => self.renderCanvas(),
      'selection:created': item =>
        (item.target = CanvasAddedProp(item.target)) &&
        self.props.handleSelectedItem(true),
      'object:added': item => (item.target = CanvasAddedProp(item.target)),
      'object:moving': item => (item.target = CanvasAddedProp(item.target)),
      'selection:cleared': () => self.props.handleSelectedItem(false),
    })
  }

  render() {
    const {
      activeItem,
      children,
      gridVisibility,
      handlePreset,
      handleTool,
      height,
      imageAsBackground,
      tool,
      width,
    } = this.props

    return (
      <Fragment>
        <div
          className={classnames('app-canvas', {
            'app-canvas__draw': tool === 'rectangle' || tool === 'circle',
            'app-canvas__grid-visibility-off': !gridVisibility,
          })}
          key="canvas"
        >
          {imageAsBackground && (
            <div className="app-canvas__guideline">
              <img src={imageAsBackground} alt="guideline" />
            </div>
          )}

          {children}

          <ClickOutside
            onClickOutside={e => {
              this.removeSelection(e)
            }}
          >
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

          <div className="app-handlers" key="handlers">
            <button
              className={classnames('app-handlers__tool', {
                'app-handlers__active': tool === 'select',
              })}
              onClick={() => handleTool(Tools.Select)}
            >
              <img src={selectIcon} alt="select tool" />
            </button>
            <button
              className={classnames('app-handlers__tool', {
                'app-handlers__active': tool === 'rectangle',
              })}
              onClick={() => handleTool(Tools.Rectangle)}
            >
              <img src={rectIcon} alt="rect tool" />
            </button>
            <button
              className={classnames('app-handlers__tool', {
                'app-handlers__active': tool === 'circle',
              })}
              onClick={() => handleTool(Tools.Circle)}
            >
              <img src={circleIcon} alt="circle tool" />
            </button>

            <div className="app-handlers__div">Presets:</div>

            <button
              className="app-handlers__preset"
              value="facebook"
              data-height="160"
              onClick={handlePreset}
            >
              facebook
            </button>
            <button
              className="app-handlers__preset"
              value="instagram"
              data-height="475"
              onClick={handlePreset}
            >
              instagram
            </button>
            <button
              className="app-handlers__preset"
              value="code"
              data-height="160"
              onClick={handlePreset}
            >
              code
            </button>
            <button
              className="app-handlers__preset"
              value="bulletList"
              data-height="160"
              onClick={handlePreset}
            >
              bulletList
            </button>

            {activeItem && (
              <span>
                <button
                  className="app-handler__trash"
                  ref={n => (this.trashButton = n)}
                  onClick={this.removeItem}
                >
                  <img src={trashIcon} alt="remove item" />
                </button>
                <button
                  className="app-handler__clone"
                  ref={n => (this.cloneButton = n)}
                  onClick={this.cloneItem}
                >
                  <img src={cloneIcon} alt="clone tool" />
                </button>
              </span>
            )}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Canvas
