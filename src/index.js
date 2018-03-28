// template
import playButtonTemplate from './playButton.pug';
import wrapperTemplate from './wrapper.pug';

// style
import _style from './style.scss';

// lib
import isString from 'awesome-js-funcs/judgeBasic/isString';

export default class H5VideoPlayer {
  /**
   * @param source
   * @param context
   * @param positioned
   * @param control
   * @param autoPlay
   * @param autoClose
   * @param preload
   * @param orientation
   * @param aspectRatio
   * @param disableRotation
   * @param picMode
   * @param fixAndroidWechatContinue
   * @param hookInPlay
   * @param hookInPause
   * @param hookInStop
   */
  constructor(source, {
    context = 'body',
    control = false,
    positioned = false,
    autoPlay = false,
    autoClose = true,
    preload = true,
    orientation = 'portrait',
    aspectRatio = 9 / 16,
    disableRotation = false,
    picMode = false,
    fixAndroidWechatContinue = false,
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
      preload: preload,
      orientation: orientation,
      aspectRatio: aspectRatio,
      disableRotation: disableRotation,
      picMode: picMode,
      fixAndroidWechatContinue: fixAndroidWechatContinue,
      hookInPlay: hookInPlay,
      hookInPause: hookInPause,
      hookInStop: hookInStop,
    };

    // set context position
    if (!positioned) {
      this.context.style.position = 'relative';
    }

    this.container = null;
    this.wrapper = null;
    this.video = null;
    this.mask = null;
    this.playButton = null;

    this.initContainer();
    this.initWrapper();

    if (this.options.preload) {
      this.init();
    }
  };

  initContainer() {
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
    this.container.appendChild(this.wrapper);

    // video
    this.videoWrapperForConstraintRatio = this.wrapper.querySelector('.' + _style.videoWrapperForConstraintRatio);
    this.video = this.wrapper.querySelector('.' + _style.video);

    // mask: used to control video
    this.mask = document.createElement('div');
    this.mask.classList.add(_style.mask);
    this.container.appendChild(this.mask);

    // playButton
    if (this.options.control) {
      this.playButton = document.createElement('div');
      this.playButton.classList.add(_style.playButtonWrapper);

      // picMode
      if (!this.options.picMode) {
        this.playButton.innerHTML = playButtonTemplate({
          _style,
        });
      }

      this.container.appendChild(this.playButton);
    }
  };

  init() {
    this.context.appendChild(this.container);
  };

  load() {
    if (!this.context.contains(this.container)) {
      this.init();
    }

    this.container.classList.add(_style.show);
    this._assignWrapperStyle();

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
    } else if (this.options.fixAndroidWechatContinue) {
      this.video.addEventListener('click', () => {
        if (!this._isPlaying()) {
          this.play();
        }
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
        window.removeEventListener(_orientationchangeEvt, _changeOrientation);

        setTimeout(() => {
          _changeStyle();
          window.addEventListener(_orientationchangeEvt, _changeOrientation, false);
        }, 400);
      }
    ;

    if (this.options.disableRotation) {
      _changeStyle();
      window.addEventListener(_orientationchangeEvt, _changeOrientation, false);

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

  , _orientationchangeEvt = "onorientationchange" in window
  ? "orientationchange"
  : "resize"

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
