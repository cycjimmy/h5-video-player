// template
import playButtonTemplate from './playButton.pug';
import wrapperTemplate from './wrapper.pug';

// style
import _style from './style.scss';

export default class H5VideoPlayer {
  /**
   * @param source
   * @param context
   * @param control
   * @param autoPlay
   * @param autoClose
   * @param orientation
   * @param aspectRatio
   * @param disableRotation
   * @param hookInPlay
   * @param hookInPause
   * @param hookInStop
   */
  constructor(source, {
    context = 'body',
    control = false,
    autoPlay = false,
    autoClose = true,
    orientation = 'portrait',
    aspectRatio = 9 / 16,
    disableRotation = false,
    hookInPlay = () => {
    },
    hookInPause = () => {
    },
    hookInStop = () => {
    },
  }) {

    this.context = isString(context)
      ? document.querySelector(context)
      : context;
    this.options = {
      source: source,
      control: control,
      autoPlay: autoPlay,
      autoClose: autoClose,
      orientation: orientation,
      aspectRatio: aspectRatio,
      disableRotation: disableRotation,
      hookInPlay: hookInPlay,
      hookInPause: hookInPause,
      hookInStop: hookInStop,
    };

    this.container = null;
    this.wrapper = null;
    this.video = null;
    this.mask = null;
    this.playButton = null;

    this.init();
  };

  init() {
    // container
    this.container = document.createElement('div');
    this.container.classList.add(_style.container);
  };

  initWrapper() {
    // wrapper
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add(_style.wrapper);

    this.wrapper.innerHTML = wrapperTemplate({
      source: this.options.source,
      orientation: this.options.orientation,
      _style,
    });

    // video
    this.videoWrapperForConstraintRatio = this.wrapper.querySelector('.' + _style.videoWrapperForConstraintRatio);
    this.video = this.wrapper.querySelector('.' + _style.video);

    // mask: used to control video
    this.mask = this.wrapper.querySelector('.' + _style.mask);

    // playButton
    if (this.options.control) {
      this.playButton = document.createElement('div');
      this.playButton.classList.add(_style.playButtonWrapper);

      this.playButton.innerHTML = playButtonTemplate();

      this.wrapper.appendChild(this.playButton);
    }

    this._assignWrapperStyle();
  };

  load() {
    if (!this.context.contains(this.container)) {
      this.context.appendChild(this.container);
      this.initWrapper();
      this.container.appendChild(this.wrapper);
    }

    this.eventBind();

    if (this.options.autoPlay) {
      this.play();
    }

    return this;
  };

  eventBind() {
    if (this.options.control) {
      this.mask.addEventListener('click', () => {
        if (this._isPlaying()) {
          this.pause();
        } else {
          this.play();
        }
      });

      this.playButton.addEventListener('click', () => {
        this.play();
      });
    }

    this.video.addEventListener('ended', () => {
      console.log('ended');
      this._showPlayBtn();
      if (this.options.autoClose) {
        this._remove();
      }
      this.options.hookInStop();
    });
  };

  play() {
    this.video.play();
    this._hiddenPlayBtn();
    this.options.hookInPlay();
  };

  pause() {
    this.video.pause();
    this._showPlayBtn();
    this.options.hookInPause();
  };

  _showPlayBtn() {
    if (this.playButton) {
      this.playButton.style.display = 'block';
    }
  };

  _hiddenPlayBtn() {
    if (this.playButton) {
      this.playButton.style.display = 'none';
    }
  };

  _isPlaying() {
    return this.video.currentTime > 0 && !this.video.paused && !this.video.ended
      && this.video.readyState > 2;
  };

  _remove() {
    this.context.removeChild(this.container);
  };

  _assignWrapperStyle() {
    let
      containerRect = () => this.container.getBoundingClientRect()

      , orientationchangeEvt = "onorientationchange" in window
      ? "orientationchange"
      : "resize"


      , _changeStyle = () => {
        let
          containerRectWidth = containerRect().width
          , containerRectHeight = containerRect().height
        ;

        if (_judgePhoneOrientation() === this.options.orientation) {
          _addStyles(this.wrapper, {
            width: containerRectWidth + 'px',
            height: containerRectHeight + 'px',
            transform: '',
          });
        } else {
          // Adjust the video orientation
          _addStyles(this.wrapper, {
            width: containerRectHeight + 'px',
            height: containerRectWidth + 'px',
            transform: 'rotate(-90deg)',
          });
        }

        // set videoWrapperForConstraintRatio width&height
        setTimeout(() => {
          let
            wrapperWidth = Number.parseInt(this.wrapper.style.width)
            , wrapperHeight = Number.parseInt(this.wrapper.style.height)
            , preComputedHeight = wrapperWidth / this.options.aspectRatio
          ;

          console.log(wrapperWidth);

          if (preComputedHeight >= wrapperHeight) { // based on wrapperWidth
            _addStyles(this.videoWrapperForConstraintRatio, {
              width: wrapperWidth + 'px',
              height: preComputedHeight + 'px',
            });
          } else {  // based on wrapperHeight
            _addStyles(this.videoWrapperForConstraintRatio, {
              width: wrapperHeight * this.options.aspectRatio + 'px',
              height: wrapperHeight + 'px',
            });
          }
        }, 0);

      }
      , _changeOrientation = () => {
        window.removeEventListener(orientationchangeEvt, () => _changeOrientation(), false);

        setTimeout(() => {
          _changeStyle();
          window.addEventListener(orientationchangeEvt, () => _changeOrientation(), false);
        }, 500);
      }
    ;

    if (this.options.disableRotation) {
      _changeStyle();

      window.addEventListener(orientationchangeEvt, () => _changeOrientation(), false);

    } else {
      _addStyles(this.wrapper, {
        width: containerRect().width + 'px',
        height: containerRect().height + 'px',
      });
    }
  };
}

// private
let
  _addStyles = (element, styles) => {
    for (let name in styles) {
      element.style[name] = styles[name];
    }
  }

  , isString = (str) => {
    return (typeof str === 'string') && str.constructor === String;
  }

  , _judgePhoneOrientation = () => {
    let
      clientWidth = document.documentElement.clientWidth
      , clientHeight = document.documentElement.clientHeight
      , result = ''
    ;

    if (clientWidth > clientHeight) {
      result = 'landscape';
    } else {
      result = 'portrait';
    }

    console.log('_judgePhoneOrientation: ' + result);

    return result;
  }
;
