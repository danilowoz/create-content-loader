/* uniformly named URL object */
var DOMURL = window.URL || window.webkitURL || window

function svgSnapshot(svg_ref, fps, seconds) {
  /* DOM object element */
  this.svg_ref = svg_ref

  /* svg xml root */
  this.svg_root = svg_ref

  /* frames per second */
  this.fps = fps

  /* total animation duration in seconds */
  this.seconds = seconds

  this.svg_root.pauseAnimations()

  this.make_step = function(step, time) {
    if (time > this.seconds * 1000) {
      // animation ended
      return false
    }

    /* pause for snapshot */
    this.svg_root.pauseAnimations()

    /* save actual svg state as XML */
    var svg_xml = this.svg_root.outerHTML

    /* disable animation elements with simple replacing */
    // svg_xml = svg_xml.replace(new RegExp('<animate', 'g'), '<not_anim')

    /* save as blob */
    var svg_data = new Blob([svg_xml], { type: 'image/svg+xml' })

    /* create data url (creates browsers interal blob: data link) */
    var data_url = DOMURL.createObjectURL(svg_data)

    /* create bitmap */
    var img = new Image()

    /* save class reference */
    var self = this

    /* mount load process */
    img.onload = function() {
      self.make_step_next(step, time, this)
    }

    img.onerror = e => {
      console.error(e)
    }

    /* set image url */
    img.src = data_url
  }

  this.make_step_next = function(step, time, img) {
    /* create canvas */
    var canvas = document.createElement('canvas')

    canvas.setAttribute('width', this.svg_ref.clientWidth)
    canvas.setAttribute('height', this.svg_ref.clientHeight)

    canvas.style.border = '1px solid black'

    /* get canvas 2d contextr */
    var ctx = canvas.getContext('2d')

    /* drav loaded image onto it */
    ctx.drawImage(img, 0, 0)

    /* here we can get dataURL (base64 encoded url with image content) */
    var dataURL = canvas.toDataURL('image/png')

    /*
            and here you can do whatever you want - send image
            by ajax (that base64 encoded url which you can decode
            on serverside) or draw somewhere on page
        */
    var finalImg = document.createElement('img')

    finalImg.src = dataURL
    finalImg.style.border = '1px solid black'

    document.body.appendChild(finalImg)

    /*
            let animation continue - before image is loaded, the
            animation is paused - by this is achieved perfect
            timing in this serial process
        */
    this.svg_root.unpauseAnimations()

    var self = this
    var interval = 1000 / this.fps // one frame interval

    setTimeout(function() {
      self.make_step(step + 1, time + interval)
    }, interval)
  }
}

export default svgSnapshot
