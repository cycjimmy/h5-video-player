export default class H5VideoPlayer {
  /**
   * @param context
   * @param source
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

    this.container.innerHTML = `
      <video 
      width="100%" 
      src=${this.options.source} 
      preload 
      x-webkit-airplay="allow" 
      webkit-playsinline="true" 
      playsinline 
      x5-video-player-type="h5" 
      x5-video-player-fullscreen="true" 
      x5-video-orientation=${this.options.orientation}></video>
      <div></div>
    `;

    // video
    this.video = this.container.querySelector('video');
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

    // mask
    this.mask = this.container.querySelector('div');
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

      this.playButton.innerHTML = `
        <div style="
        position: absolute; 
        left: 0; 
        top: 0; 
        right: 0; 
        bottom: 0; 
        margin: auto; 
        max-width: 60px; 
        max-height: 60px; 
        cursor: pointer; 
        opacity: .6;">
          <svg 
          viewBox="0 0 64 64" 
          style=" max-width: 60px; max-height: 60px; fill: #fff;">
            <path
              d="M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z"/>
          </svg>
        </div>
      `;

      this.container.appendChild(this.playButton);
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
