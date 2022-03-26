import isString from '@cycjimmy/awesome-js-funcs/esm/judgeBasic/isString';
import addStyles from '@cycjimmy/awesome-js-funcs/esm/dom/addStyles';
import isVideoPlaying from '@cycjimmy/awesome-js-funcs/esm/media/isVideoPlaying';

import playButtonTemplate from './templates/playButton';
import wrapperTemplate from './templates/wrapper';
import style from './style/index.scss';

const _orientationchangeEvt = 'onorientationchange' in window
  ? 'orientationchange'
  : 'resize';

const _judgePhoneOrientation = () => {
  const { clientWidth } = document.documentElement;
  const { clientHeight } = document.documentElement;
  return clientWidth > clientHeight
    ? 'landscape'
    : 'portrait';
};

const _getElementStyle = (el, styleName) => window
  .getComputedStyle(el, null)
  .getPropertyValue(styleName);

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
   * @param hooks
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
    hooks = {},
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
      aspectRatio: aspectRatio || (() => (orientation === 'landscape'
        ? 16 / 9
        : 9 / 16))(),
      disableRotation,
      picMode,
      fixAndroidWechatContinue,
    };

    this.hooks = {
      play: () => {},
      pause: () => {},
      stop: () => {},
      ...hooks,
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
  }

  initContainer() {
    // container
    this.els.container = document.createElement('div');
    this.els.container.classList.add(style.container);
  }

  initWrapper() {
    // wrapper
    this.els.wrapper = document.createElement('div');
    this.els.wrapper.classList.add(style.wrapper);

    this.els.wrapper.innerHTML = wrapperTemplate({
      source: this.options.source,
      orientation: this.options.orientation,
      style,
    });
    this.els.container.appendChild(this.els.wrapper);

    // video
    this.els.videoWrapperForConstraintRatio = this.els.wrapper.querySelector(`.${style.videoWrapperForConstraintRatio}`);
    this.els.video = this.els.wrapper.querySelector(`.${style.video}`);

    // mask: used to control video
    this.els.mask = document.createElement('div');
    this.els.mask.classList.add(style.mask);
    this.els.container.appendChild(this.els.mask);

    // playButton
    if (this.options.control) {
      this.els.playButton = document.createElement('div');
      this.els.playButton.classList.add(style.playButtonWrapper);

      // picMode
      if (!this.options.picMode) {
        this.els.playButton.innerHTML = playButtonTemplate({
          style,
        });
      }

      this.els.container.appendChild(this.els.playButton);
    }
  }

  init() {
    this.context.appendChild(this.els.container);
  }

  load() {
    if (!this.context.contains(this.els.container)) {
      this.init();
    }

    this.els.container.classList.add(style.show);
    this._assignWrapperStyle();

    this.eventBind();

    if (this.options.autoPlay) {
      this.play();
    }

    return this;
  }

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
      this._showPlayBtn();
      if (this.options.autoClose) {
        this._remove();
      }
      this.hooks.stop();
    });
  }

  play() {
    this.els.video.play();
    this._hiddenPlayBtn();
    this.hooks.play();
  }

  pause() {
    this.els.video.pause();
    this._showPlayBtn();
    this.hooks.pause();
  }

  _showPlayBtn() {
    if (this.els.playButton) {
      this.els.playButton.style.display = 'block';
    }
  }

  _hiddenPlayBtn() {
    if (this.els.playButton) {
      this.els.playButton.style.display = 'none';
    }
  }

  _isPlaying() {
    return isVideoPlaying(this.els.video);
  }

  _remove() {
    this.context.removeChild(this.els.container);
  }

  _assignWrapperStyle() {
    const containerRect = () => this.els.container.getBoundingClientRect();

    const _changeStyle = () => {
      const containerRectWidth = containerRect().width;
      const containerRectHeight = containerRect().height;
      if (_judgePhoneOrientation() === this.options.orientation) {
        addStyles(this.els.wrapper, {
          width: `${containerRectWidth}px`,
          height: `${containerRectHeight}px`,
          transform: '',
        });
      } else {
        // Adjust the video orientation
        addStyles(this.els.wrapper, {
          width: `${containerRectHeight}px`,
          height: `${containerRectWidth}px`,
          transform: 'rotate(-90deg)',
        });
      }

      // set videoWrapperForConstraintRatio width&height
      setTimeout(() => {
        const wrapperWidth = Number.parseInt(this.els.wrapper.style.width, 10);
        const wrapperHeight = Number.parseInt(this.els.wrapper.style.height, 10);
        const preComputedHeight = wrapperWidth / this.options.aspectRatio;
        if (preComputedHeight >= wrapperHeight) { // based on wrapperWidth
          addStyles(this.els.videoWrapperForConstraintRatio, {
            width: `${wrapperWidth}px`,
            height: `${preComputedHeight}px`,
          });
        } else { // based on wrapperHeight
          addStyles(this.els.videoWrapperForConstraintRatio, {
            width: `${wrapperHeight * this.options.aspectRatio}px`,
            height: `${wrapperHeight}px`,
          });
        }
      }, 0);
    };

    const _changeOrientation = () => {
      window.removeEventListener(_orientationchangeEvt, _changeOrientation);

      setTimeout(() => {
        _changeStyle();
        window.addEventListener(_orientationchangeEvt, _changeOrientation, false);
      }, 400);
    };
    if (this.options.disableRotation) {
      _changeStyle();
      window.addEventListener(_orientationchangeEvt, _changeOrientation, false);
    } else {
      addStyles(this.els.wrapper, {
        width: `${containerRect().width}px`,
        height: `${containerRect().height}px`,
      });
    }
  }
}
