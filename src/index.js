// template
import playButtonTemplate from './playButton.pug';
import wrapperTemplate from './wrapper.pug';
// style
import _style from './style/index.scss';
// lib
import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';
import addStyles from '@cycjimmy/awesome-js-funcs/dom/addStyles';
import isVideoPlaying from '@cycjimmy/awesome-js-funcs/media/isVideoPlaying';

export default class H5VideoPlayer {
  /**
   * @param source
   * @param context
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
    autoPlay = false,
    autoClose = true,
    preload = true,
    orientation = 'portrait',
    aspectRatio = 0,
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
      source,
      control,
      autoPlay,
      autoClose,
      preload,
      orientation,
      aspectRatio: aspectRatio || (() => orientation === 'landscape'
        ? 16 / 9
        : 9 / 16)(),
      disableRotation,
      picMode,
      fixAndroidWechatContinue,
      hookInPlay,
      hookInPause,
      hookInStop,
    };

    // set context position
    if (_getElementStyle(this.context, 'position') === 'static') {
      this.context.style.position = 'relative';
    }

    this.els = {
      container: null,
      wrapper: null,
      video: null,
      videoWrapperForConstraintRatio: null,
      mask: null,
      playButton: null,
    };

    this.initContainer();
    this.initWrapper();

    if (this.options.preload) {
      this.init();
    }
  };

  initContainer() {
    // container
    this.els.container = document.createElement('div');
    this.els.container.classList.add(_style.container);
  };

  initWrapper() {
    // wrapper
    this.els.wrapper = document.createElement('div');
    this.els.wrapper.classList.add(_style.wrapper);

    this.els.wrapper.innerHTML = wrapperTemplate({
      source: this.options.source,
      orientation: this.options.orientation,
      _style,
    });
    this.els.container.appendChild(this.els.wrapper);

    // video
    this.els.videoWrapperForConstraintRatio = this.els.wrapper.querySelector('.' + _style.videoWrapperForConstraintRatio);
    this.els.video = this.els.wrapper.querySelector('.' + _style.video);

    // mask: used to control video
    this.els.mask = document.createElement('div');
    this.els.mask.classList.add(_style.mask);
    this.els.container.appendChild(this.els.mask);

    // playButton
    if (this.options.control) {
      this.els.playButton = document.createElement('div');
      this.els.playButton.classList.add(_style.playButtonWrapper);

      // picMode
      if (!this.options.picMode) {
        this.els.playButton.innerHTML = playButtonTemplate({
          _style,
        });
      }

      this.els.container.appendChild(this.els.playButton);
    }
  };

  init() {
    this.context.appendChild(this.els.container);
  };

  load() {
    if (!this.context.contains(this.els.container)) {
      this.init();
    }

    this.els.container.classList.add(_style.show);
    this._assignWrapperStyle();

    this.eventBind();

    if (this.options.autoPlay) {
      this.play();
    }

    return this;
  };

  eventBind() {
    if (this.options.control) {
      this.els.mask.addEventListener('click', () => {
        if (this._isPlaying()) {
          this.pause();
        } else {
          this.play();
        }
      });

      this.els.playButton.addEventListener('click', () => {
        this.play();
      });
    } else if (this.options.fixAndroidWechatContinue) {
      this.els.video.addEventListener('click', () => {
        if (!this._isPlaying()) {
          this.play();
        }
      });
    }

    this.els.video.addEventListener('ended', () => {
      console.log('ended');
      this._showPlayBtn();
      if (this.options.autoClose) {
        this._remove();
      }
      this.options.hookInStop();
    });
  };

  play() {
    this.els.video.play();
    this._hiddenPlayBtn();
    this.options.hookInPlay();
  };

  pause() {
    this.els.video.pause();
    this._showPlayBtn();
    this.options.hookInPause();
  };

  _showPlayBtn() {
    if (this.els.playButton) {
      this.els.playButton.style.display = 'block';
    }
  };

  _hiddenPlayBtn() {
    if (this.els.playButton) {
      this.els.playButton.style.display = 'none';
    }
  };

  _isPlaying() {
    return isVideoPlaying(this.els.video);
  };

  _remove() {
    this.context.removeChild(this.els.container);
  };

  _assignWrapperStyle() {
    const
      containerRect = () => this.els.container.getBoundingClientRect()

      , _changeStyle = () => {
        const
          containerRectWidth = containerRect().width
          , containerRectHeight = containerRect().height
        ;

        if (_judgePhoneOrientation() === this.options.orientation) {
          addStyles(this.els.wrapper, {
            width: containerRectWidth + 'px',
            height: containerRectHeight + 'px',
            transform: '',
          });
        } else {
          // Adjust the video orientation
          addStyles(this.els.wrapper, {
            width: containerRectHeight + 'px',
            height: containerRectWidth + 'px',
            transform: 'rotate(-90deg)',
          });
        }

        // set videoWrapperForConstraintRatio width&height
        setTimeout(() => {
          const
            wrapperWidth = Number.parseInt(this.els.wrapper.style.width)
            , wrapperHeight = Number.parseInt(this.els.wrapper.style.height)
            , preComputedHeight = wrapperWidth / this.options.aspectRatio
          ;

          if (preComputedHeight >= wrapperHeight) { // based on wrapperWidth
            addStyles(this.els.videoWrapperForConstraintRatio, {
              width: wrapperWidth + 'px',
              height: preComputedHeight + 'px',
            });
          } else {  // based on wrapperHeight
            addStyles(this.els.videoWrapperForConstraintRatio, {
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
      addStyles(this.els.wrapper, {
        width: containerRect().width + 'px',
        height: containerRect().height + 'px',
      });
    }
  };
}

// private
const
  _orientationchangeEvt = "onorientationchange" in window
    ? "orientationchange"
    : "resize"

  , _judgePhoneOrientation = () => {
    const
      clientWidth = document.documentElement.clientWidth
      , clientHeight = document.documentElement.clientHeight
    ;

    return clientWidth > clientHeight
      ? 'landscape'
      : 'portrait';
  }

  , _getElementStyle = (el, styleName) => window
    .getComputedStyle(el, null)
    .getPropertyValue(styleName)
;
