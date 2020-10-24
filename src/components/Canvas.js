import React, { Component, Fragment } from 'react'
import classnames from 'classnames'
import ReactGA from 'react-ga'

import SketchField from '../../_third-parts/react-sketch/src/SketchField'
import Tools from '../../_third-parts/react-sketch/src/tools'
import { SVGtoFabric, jsonToSVG, canvasAddedProp, numberFixed } from '../utils'
import selectIcon from '../assets/select.svg'
import trashIcon from '../assets/trash.svg'
import cloneIcon from '../assets/clone.svg'
import rectIcon from '../assets/rect.svg'
import circleIcon from '../assets/circle.svg'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showCanvas: true,
      coordsActiveItem: {},
    }
  }

  componentDidMount() {
    this.setupEvents()
    this.SVGtoCanvas()
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
        } else if (a && a.type === 'path') {
          draw = new window.fabric.Path(a.aCoords, {
            stroke: null,
            strokeWidth: 1,
            fill: null,
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            // TODO: move path
            // left: a.left,
            // top: a.top,
            // originX: 'left',
            // originY: 'top',
          })
        }

        draw && canvas.add(draw)
      })

      canvas.renderAll()
    }
  }

  renderCanvas = () => {
    if (this._sketch) {
      const draw = jsonToSVG(this._sketch._fc.toJSON())

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
    const hasItemSelected = Object.keys(this.state.coordsActiveItem).length > 0

    if (
      canvas &&
      notClickingOnTrashButton &&
      notClickingOnCloneButton &&
      hasItemSelected
    ) {
      canvas.discardActiveObject().renderAll()
      this.setState({ coordsActiveItem: {} })
    }
  }

  setCoords = ({ target }) => {
    const { type, width, height, left, top, radius, rx } = target

    if (type === 'circle') {
      return this.setState({ coordsActiveItem: { radius, left, top, type } })
    }

    return this.setState({
      coordsActiveItem: { width, height, left, top, boxRadius: rx, type },
    })
  }

  moveItem = (key, value) => {
    const canvas = this._sketch && this._sketch._fc
    if (canvas && canvas.getActiveObject()) {
      const selection = canvas.getActiveObject()

      if (key === 'boxRadius') {
        selection.set('rx', value)
        selection.set('ry', value)
      } else {
        selection.set(key, value)
      }

      selection.setCoords()
      canvas.requestRenderAll()

      this.setState(prevState => ({
        ...prevState,
        coordsActiveItem: { ...prevState.coordsActiveItem, [key]: value },
      }))
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
      'after:render': self.renderCanvas,
      'selection:created': item => {
        this.setCoords(item)
        item.target = canvasAddedProp(item.target)
      },
      'selection:updated': this.setCoords,
      'selection:cleared': () => this.setState({ coordsActiveItem: {} }),
      'object:modified': this.props.handleResetRenderCanvas,
      'object:added': item => (item.target = canvasAddedProp(item.target)),
      'object:moving': item => (item.target = canvasAddedProp(item.target)),
    })
  }

  render() {
    const {
      children,
      gridVisibility,
      handlePreset,
      handleTool,
      height,
      imageAsBackground,
      tool,
      width,
    } = this.props

    const hasItemSelected = Object.keys(this.state.coordsActiveItem).length > 0

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

          {global.window !== 'undefined' && (
            <SketchField
              width={`${width}px`}
              height={`${height}px`}
              tool={tool}
              lineWidth={0}
              color="black"
              ref={c => (this._sketch = c)}
              className="app-canvas__sketch"
            />
          )}

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
              data-width="476"
              data-height="124"
              onClick={handlePreset}
            >
              facebook
            </button>
            <button
              className="app-handlers__preset"
              value="instagram"
              data-width="400"
              data-height="460"
              onClick={handlePreset}
            >
              instagram
            </button>
            <button
              className="app-handlers__preset"
              value="code"
              data-width="340"
              data-height="84"
              onClick={handlePreset}
            >
              code
            </button>
            <button
              className="app-handlers__preset"
              value="bulletList"
              data-width="400"
              data-height="150"
              onClick={handlePreset}
            >
              bulletList
            </button>

            {hasItemSelected && (
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

        {this.state.coordsActiveItem.type !== 'path' && hasItemSelected && (
          <div className="app-editor_item-editor">
            <p className="app-config_caption">Size & position of active item</p>

            <div className="row">
              {Object.keys(this.state.coordsActiveItem)
                .filter(e => e !== 'type')
                .map(item => {
                  const value = numberFixed(this.state.coordsActiveItem[item])
                  const onChange = e =>
                    this.moveItem(item, numberFixed(e.target.value))

                  if (item === 'boxRadius') {
                    return (
                      <p
                        style={{ width: '62.5%', display: 'flex' }}
                        className="app-config_inline"
                        key={item}
                      >
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={value}
                          onChange={onChange}
                          style={{ flex: 1 }}
                        />
                        <input
                          id="radius"
                          style={{
                            textAlign: 'center',
                            flex: 1,
                            marginRight: '34px',
                          }}
                          type="number"
                          onChange={onChange}
                          value={value}
                        />
                        <label htmlFor="radius">radius</label>
                      </p>
                    )
                  }

                  return (
                    <p className="app-config_inline" key={item}>
                      <label>{item}</label>
                      <input type="number" onChange={onChange} value={value} />
                    </p>
                  )
                })}
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default Canvas
