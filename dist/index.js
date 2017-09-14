var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  /**
   * @param context
   * @param source
   * @param control
   * @param autoPlay
   * @param autoClose
   * @param orientation
   * @param aspectRatio
   */
  function _class(_ref) {
    var _ref$context = _ref.context,
        context = _ref$context === undefined ? document.querySelector('body') : _ref$context,
        source = _ref.source,
        _ref$control = _ref.control,
        control = _ref$control === undefined ? false : _ref$control,
        _ref$autoPlay = _ref.autoPlay,
        autoPlay = _ref$autoPlay === undefined ? true : _ref$autoPlay,
        _ref$autoClose = _ref.autoClose,
        autoClose = _ref$autoClose === undefined ? true : _ref$autoClose,
        _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === undefined ? 'portrait' : _ref$orientation,
        _ref$aspectRatio = _ref.aspectRatio,
        aspectRatio = _ref$aspectRatio === undefined ? 9 / 16 : _ref$aspectRatio;

    _classCallCheck(this, _class);

    this.context = context;
    this.options = {
      source: source,
      control: control,
      autoPlay: autoPlay,
      autoClose: autoClose,
      orientation: orientation,
      aspectRatio: aspectRatio
    };

    this.wrapper = null;
    this.video = null;
    this.mask = null;
    this.playButton = null;
  }

  _createClass(_class, [{
    key: 'init',
    value: function init() {
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
        overflow: 'hidden'
      });

      this.wrapper.innerHTML = '\n      <video width="100%" src=' + this.options.source + ' preload x-webkit-airplay="allow" webkit-playsinline="true" playsinline x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation=' + this.options.orientation + '></video>\n      <div></div>\n    ';

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
        objectPosition: '50% 50%'
      });

      // mask
      this.mask = this.wrapper.querySelector('div');
      _addStyles(this.mask, {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '10'
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
          backgroundColor: 'rgba(0, 0, 0, .1)'
        });

        this.playButton.innerHTML = '\n        <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto; max-width: 60px; max-height: 60px; cursor: pointer; opacity: .6;">\n          <svg viewBox="0 0 64 64" style="max-width: 60px; max-height: 60px; fill: #fff;">\n            <path d="M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z"/>\n          </svg>\n        </div>\n      ';

        this.wrapper.appendChild(this.playButton);
      }

      return this;
    }
  }, {
    key: 'load',
    value: function load() {
      if (!this.context.contains(this.wrapper)) {
        this.context.appendChild(this.wrapper);
      }

      this.eventBind();

      if (this.options.autoPlay) {
        this.play();
      }
    }
  }, {
    key: 'eventBind',
    value: function eventBind() {
      var _this = this;

      if (this.options.control) {
        this.mask.addEventListener('click', function () {
          if (_this._isPlaying()) {
            _this.pause();
          } else {
            _this.play();
          }
        });

        this.playButton.addEventListener('click', function () {
          _this.play();
        });
      }

      this.video.addEventListener('ended', function () {
        console.log('ended');
        _this._showPlayBtn();
        if (_this.options.autoClose) {
          _this._remove();
        }
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.video.play();
      this._hiddenPlayBtn();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
      this._showPlayBtn();
    }
  }, {
    key: '_showPlayBtn',
    value: function _showPlayBtn() {
      if (this.playButton) {
        this.playButton.style.display = 'block';
      }
    }
  }, {
    key: '_hiddenPlayBtn',
    value: function _hiddenPlayBtn() {
      if (this.playButton) {
        this.playButton.style.display = 'none';
      }
    }
  }, {
    key: '_isPlaying',
    value: function _isPlaying() {
      return this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > 2;
    }
  }, {
    key: '_remove',
    value: function _remove() {
      this.context.removeChild(this.wrapper);
    }
  }]);

  return _class;
}();

export default _class;
;

// private
var _addStyles = function _addStyles(element, styles) {
  for (var name in styles) {
    element.style[name] = styles[name];
  }
};
//# sourceMappingURL=index.js.map