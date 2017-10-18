// template
import playButtonTemplate from './playButton.pug';
import wrapperTemplate from './wrapper.pug';

export default class H5VideoPlayer {
  /**
   * @param source
   * @param context
   * @param control
   * @param autoPlay
   * @param autoClose
   * @param orientation
   * @param aspectRatio
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
    _addStyles(this.container, {
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: '9999',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    });

    this.initWrapper();
    this.container.appendChild(this.wrapper);
  };

  initWrapper() {
    // wrapper
    this.wrapper = document.createElement('div');
    _addStyles(this.wrapper, {
      position: 'absolute',
      left: '-100%',
      top: '-100%',
      right: '-100%',
      bottom: '-100%',
      margin: 'auto',
      width: '100vw',
      minWidth: 100 * this.options.aspectRatio + 'vh',
      height: 100 / this.options.aspectRatio + 'vw',
      minHeight: '100vh',
      backgroundColor: 'black',
      zIndex: '9999',
      overflow: 'hidden',
    });

    this.wrapper.innerHTML = wrapperTemplate({
      source: this.options.source,
      orientation: this.options.orientation,
    });

    // video
    this.video = this.wrapper.querySelector('video');
    _addStyles(this.video, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1',
      objectFit: 'fill',
      objectPosition: '50% 50%',
    });

    // mask: used to control video
    this.mask = this.wrapper.querySelector('div');
    _addStyles(this.mask, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '10',
    });

    // playButton
    if (this.options.control) {
      this.playButton = document.createElement('div');
      _addStyles(this.playButton, {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '100',
        backgroundColor: 'rgba(0, 0, 0, .1)',
      });

      this.playButton.innerHTML = playButtonTemplate();

      this.wrapper.appendChild(this.playButton);
    }
  };

  load() {
    if (!this.context.contains(this.container)) {
      this.context.appendChild(this.container);
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
;
