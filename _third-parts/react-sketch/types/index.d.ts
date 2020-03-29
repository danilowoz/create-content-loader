declare module 'react-sketch' {
	import * as React from 'react'

	export class SketchField extends React.PureComponent<{
		// the color of the line
		lineColor?: string
		// The width of the line
		lineWidth?: number
		// the fill color of the shape when applicable
		fillColor?: string
		// the background color of the sketch
		backgroundColor?: string,
		// the opacity of the object
		opacity?: number
		// number of undo/redo steps to maintain
		undoSteps?: number
		// The tool to use, can be pencil, rectangle, circle, brush;
		tool?: string
		// image format when calling toDataURL
		imageFormat?: string
		// Sketch data for controlling sketch from
		// outside the component
		value?: object
		// Set to true if you wish to force load the given value, even if it is  the same
		forceValue?: boolean
		// Specify some width correction which will be applied on auto resize
		widthCorrection?: number
		// Specify some height correction which will be applied on auto resize
		heightCorrection?: number
		// Specify action on change
		onChange?: (evt: any) => void,
		// Default initial value
		defaultValue?: {},
		// Sketch width
		width?: number
		// Sketch height
		height?: number
		// Class name to pass to container div of canvas
		className?: string
		// Style options to pass to container div of canvas
		style?: {}
	}> {

		/**
		 * Enable touch Scrolling on Canvas
		 */
		enableTouchScroll(): void

		/**
		 * Disable touch Scrolling on Canvas
		 */
		disableTouchScroll(): void

		/**
		 * Add an image as object to the canvas
		 *
		 * @param dataUrl the image url or Data Url
		 * @param options object to pass and change some options when loading image, the format of the object is:
		 *
		 * {
		 *   left: <Number: distance from left of canvas>,
		 *   top: <Number: distance from top of canvas>,
		 *   scale: <Number: initial scale of image>
		 * }
		 */
		addImg(dataUrl: string, options?: { left?: number, top?: number, scale?: number }): void

		/**
		 * Zoom the drawing by the factor specified
		 *
		 * The zoom factor is a percentage with regards the original, for example if factor is set to 2
		 * it will double the size whereas if it is set to 0.5 it will half the size
		 *
		 * @param factor the zoom factor
		 */
		zoom(factor: number): void

		/**
		 * Perform an undo operation on canvas, if it cannot undo it will leave the canvas intact
		 */
		undo(): void

		/**
		 * Perform a redo operation on canvas, if it cannot redo it will leave the canvas intact
		 */
		redo(): void

		/**
		 * Delegation method to check if we can perform an undo Operation, useful to disable/enable possible buttons
		 *
		 * @returns {*} true if we can undo otherwise false
		 */
		canUndo(): boolean

		/**
		 * Delegation method to check if we can perform a redo Operation, useful to disable/enable possible buttons
		 *
		 * @returns {*} true if we can redo otherwise false
		 */
		canRedo(): boolean

		/**
		 * Exports canvas element to a dataurl image. Note that when multiplier is used, cropping is scaled appropriately
		 *
		 * Available Options are
		 * <table style="width:100%">
		 *
		 * <tr><td><b>Name</b></td><td><b>Type</b></td><td><b>Argument</b></td><td><b>Default</b></td><td><b>Description</b></td></tr>
		 * <tr><td>format</td> <td>String</td> <td><optional></td><td>png</td><td>The format of the output image. Either "jpeg" or "png"</td></tr>
		 * <tr><td>quality</td><td>Number</td><td><optional></td><td>1</td><td>Quality level (0..1). Only used for jpeg.</td></tr>
		 * <tr><td>multiplier</td><td>Number</td><td><optional></td><td>1</td><td>Multiplier to scale by</td></tr>
		 * <tr><td>left</td><td>Number</td><td><optional></td><td></td><td>Cropping left offset. Introduced in v1.2.14</td></tr>
		 * <tr><td>top</td><td>Number</td><td><optional></td><td></td><td>Cropping top offset. Introduced in v1.2.14</td></tr>
		 * <tr><td>width</td><td>Number</td><td><optional></td><td></td><td>Cropping width. Introduced in v1.2.14</td></tr>
		 * <tr><td>height</td><td>Number</td><td><optional></td><td></td><td>Cropping height. Introduced in v1.2.14</td></tr>
		 *
		 * </table>
		 *
		 * @returns {String} URL containing a representation of the object in the format specified by options.format
		 */
		toDataURL(options?: {
			format?: string
			quality?: number
			multiplier?: number
			left?: number
			top?: number
			width?: number
			height?: number
		}): string

		/**
		 * Returns JSON representation of canvas
		 *
		 * @param propertiesToInclude Array <optional> Any properties that you might want to additionally include in the output
		 * @returns {string} JSON string
		 */
		toJSON(propertiesToInclude?: ArrayLike<string>): string

		/**
		 * Populates canvas with data from the specified JSON.
		 *
		 * JSON format must conform to the one of fabric.Canvas#toDatalessJSON
		 *
		 * @param json JSON string or object
		 */
		fromJSON(json: string): void

		/**
		 * Clear the content of the canvas, this will also clear history but will return the canvas content as JSON to be
		 * used as needed in order to undo the clear if possible
		 *
		 * @param propertiesToInclude Array <optional> Any properties that you might want to additionally include in the output
		 * @returns {string} JSON string of the canvas just cleared
		 */
		clear(propertiesToInclude?: ArrayLike<string>): string

		/**
		 * Remove selected object from the canvas
		 */
		removeSelected(): void

		copy(): void

		paste(): void

		/**
		 * Sets the background from the dataUrl given
		 *
		 * @param dataUrl the dataUrl to be used as a background
		 * @param options
		 */
		setBackgroundFromDataUrl(dataUrl: string, options?: {
			stretched?: boolean
			stretchedX?: boolean
			stretchedY?: boolean
			[name: string]: any
		}): void
		
		addText(text: string, options?: {}): void
		
	}
}
