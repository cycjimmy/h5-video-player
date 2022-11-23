(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.H5VideoPlayer = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  /**
   * determine a string type
   * @param str
   * @returns {boolean}
   */
  var isString = (str => typeof str === 'string' && str.constructor === String);

  /**
   * compatibility scheme for traversing object property methods Object.entries
   * @param obj
   * @returns {Iterator.<*>|*}
   */
  var entries = (obj => {
    var replaceFunc = o => {
      var arr = [];
      Object.keys(o).forEach(key => {
        arr.push([key, o[key]]);
      });
      return arr;
    };
    if (Object.entries) {
      return Object.entries(obj);
    }
    return replaceFunc(obj);
  });

  /**
   * element add styles
   * @param element
   * @param styles(obj)
   */
  var addStyles = ((element, styles) => {
    entries(styles).forEach(_ref => {
      var [k, v] = _ref;
      if (Object.prototype.hasOwnProperty.call(styles, k)) {
        // eslint-disable-next-line no-param-reassign
        element.style[k] = v;
      }
    });
  });

  /**
   * judge video playing
   * @param video
   * @return {boolean}
   */
  var isVideoPlaying = (video => video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

  /**
   * playButton
   * @param style
   * @returns {string}
   */
  var playButtonTemplate = (function (_ref) {
    var style = _ref.style;
    return "\n<div class=\"".concat(style.playButton, "\">\n  <svg class=\"").concat(style.playButtonSvg, "\" viewBox=\"0 0 64 64\">\n    <path d=\"M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z\"></path>\n  </svg>\n</div>\n");
  });

  /**
   * determine an array type
   * @param arr
   * @returns {boolean}
   */
  var isArray = (arr => Object.prototype.toString.call(arr).slice(8, -1) === 'Array');

  /**
   * determine an object
   * @param o
   * @returns {boolean}
   */
  var isObject = (o => Object.prototype.toString.call(o) === '[object Object]');

  /**
   * wrapper
   * @param style
   * @param source
   * @param orientation
   * @returns {string}
   */
  var wrapperTemplate = (function (_ref) {
    var style = _ref.style,
      source = _ref.source,
      orientation = _ref.orientation;
    /**
     * handleSourceHtml
     * @returns {string|*}
     */
    var handleSourceHtml = function handleSourceHtml() {
      if (isArray(source)) {
        return source.map(function (s) {
          return "<source src=\"".concat(s.url, "\" type=\"video/").concat(s.type, "\">");
        }).reduce(function (previous, current) {
          return previous + current;
        }, '');
      }
      if (isObject(source)) {
        return "<source src=\"".concat(source.url, "\" type=\"video/").concat(source.type, "\">");
      }
      if (isString(source)) {
        return "<source src=\"".concat(source, "\">");
      }
      return '';
    };
    return "\n<div class=\"".concat(style.videoWrapperForConstraintRatio, "\">\n  <video class=\"").concat(style.video, "\" width=\"100%\" preload=\"auto\"\n  x-webkit-airplay=\"allow\" webkit-playsinline=\"true\" playsinline\n  x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"true\"\n  x5-video-orientation=\"").concat(orientation, "\">\n    ").concat(handleSourceHtml(), "\n    I'm sorry; your browser doesn't support HTML5 video.\n  </video>\n</div>\n");
  });

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".index__container,.index__mask,.index__playButtonWrapper,.index__video{height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.index__playButton,.index__videoWrapperForConstraintRatio,.index__wrapper{bottom:-100%;left:-100%;margin:auto;position:absolute;right:-100%;top:-100%}.index__container{background-color:#000;display:none;overflow:hidden;z-index:9999}.index__container.index__show{display:block}.index__wrapper{background-color:#000;transform-origin:50% 50%}.index__videoWrapperForConstraintRatio,.index__wrapper{overflow:hidden;z-index:1}.index__video{object-fit:fill;object-position:50% 50%;z-index:-1}.index__mask{z-index:10}.index__playButtonWrapper{background-color:#0000001a;z-index:100}.index__playButton{cursor:pointer;max-height:60px;max-width:60px;opacity:.6}.index__playButtonSvg{fill:#fff;max-height:60px;max-width:60px}";
  var style = {"container":"index__container","video":"index__video","mask":"index__mask","playButtonWrapper":"index__playButtonWrapper","wrapper":"index__wrapper","videoWrapperForConstraintRatio":"index__videoWrapperForConstraintRatio","playButton":"index__playButton","show":"index__show","playButtonSvg":"index__playButtonSvg"};
  styleInject(css_248z);

  var _orientationchangeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
  var _judgePhoneOrientation = function _judgePhoneOrientation() {
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    return clientWidth > clientHeight ? 'landscape' : 'portrait';
  };
  var _getElementStyle = function _getElementStyle(el, styleName) {
    return window.getComputedStyle(el, null).getPropertyValue(styleName);
  };
  var H5VideoPlayer = /*#__PURE__*/function () {
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
    function H5VideoPlayer(source, _ref) {
      var _ref$context = _ref.context,
        context = _ref$context === void 0 ? 'body' : _ref$context,
        _ref$control = _ref.control,
        control = _ref$control === void 0 ? false : _ref$control,
        _ref$autoPlay = _ref.autoPlay,
        autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
        _ref$autoClose = _ref.autoClose,
        autoClose = _ref$autoClose === void 0 ? true : _ref$autoClose,
        _ref$preload = _ref.preload,
        preload = _ref$preload === void 0 ? true : _ref$preload,
        _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
        _ref$aspectRatio = _ref.aspectRatio,
        aspectRatio = _ref$aspectRatio === void 0 ? 0 : _ref$aspectRatio,
        _ref$disableRotation = _ref.disableRotation,
        disableRotation = _ref$disableRotation === void 0 ? false : _ref$disableRotation,
        _ref$picMode = _ref.picMode,
        picMode = _ref$picMode === void 0 ? false : _ref$picMode,
        _ref$fixAndroidWechat = _ref.fixAndroidWechatContinue,
        fixAndroidWechatContinue = _ref$fixAndroidWechat === void 0 ? false : _ref$fixAndroidWechat,
        _ref$hooks = _ref.hooks,
        hooks = _ref$hooks === void 0 ? {} : _ref$hooks;
      _classCallCheck(this, H5VideoPlayer);
      this.context = isString(context) ? document.querySelector(context) : context;
      this.options = {
        source: source,
        control: control,
        autoPlay: autoPlay,
        autoClose: autoClose,
        preload: preload,
        orientation: orientation,
        aspectRatio: aspectRatio || function () {
          return orientation === 'landscape' ? 16 / 9 : 9 / 16;
        }(),
        disableRotation: disableRotation,
        picMode: picMode,
        fixAndroidWechatContinue: fixAndroidWechatContinue
      };
      this.hooks = _objectSpread2({
        play: function play() {},
        pause: function pause() {},
        stop: function stop() {}
      }, hooks);

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
        playButton: null
      };
      this.initContainer();
      this.initWrapper();
      if (this.options.preload) {
        this.init();
      }
    }
    _createClass(H5VideoPlayer, [{
      key: "initContainer",
      value: function initContainer() {
        // container
        this.els.container = document.createElement('div');
        this.els.container.classList.add(style.container);
      }
    }, {
      key: "initWrapper",
      value: function initWrapper() {
        // wrapper
        this.els.wrapper = document.createElement('div');
        this.els.wrapper.classList.add(style.wrapper);
        this.els.wrapper.innerHTML = wrapperTemplate({
          source: this.options.source,
          orientation: this.options.orientation,
          style: style
        });
        this.els.container.appendChild(this.els.wrapper);

        // video
        this.els.videoWrapperForConstraintRatio = this.els.wrapper.querySelector(".".concat(style.videoWrapperForConstraintRatio));
        this.els.video = this.els.wrapper.querySelector(".".concat(style.video));

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
              style: style
            });
          }
          this.els.container.appendChild(this.els.playButton);
        }
      }
    }, {
      key: "init",
      value: function init() {
        this.context.appendChild(this.els.container);
      }
    }, {
      key: "load",
      value: function load() {
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
    }, {
      key: "eventBind",
      value: function eventBind() {
        var _this = this;
        if (this.options.control) {
          this.els.mask.addEventListener('click', function () {
            if (_this._isPlaying()) {
              _this.pause();
            } else {
              _this.play();
            }
          });
          this.els.playButton.addEventListener('click', function () {
            _this.play();
          });
        } else if (this.options.fixAndroidWechatContinue) {
          this.els.video.addEventListener('click', function () {
            if (!_this._isPlaying()) {
              _this.play();
            }
          });
        }
        this.els.video.addEventListener('ended', function () {
          _this._showPlayBtn();
          if (_this.options.autoClose) {
            _this._remove();
          }
          _this.hooks.stop();
        });
      }
    }, {
      key: "play",
      value: function play() {
        this.els.video.play();
        this._hiddenPlayBtn();
        this.hooks.play();
      }
    }, {
      key: "pause",
      value: function pause() {
        this.els.video.pause();
        this._showPlayBtn();
        this.hooks.pause();
      }
    }, {
      key: "_showPlayBtn",
      value: function _showPlayBtn() {
        if (this.els.playButton) {
          this.els.playButton.style.display = 'block';
        }
      }
    }, {
      key: "_hiddenPlayBtn",
      value: function _hiddenPlayBtn() {
        if (this.els.playButton) {
          this.els.playButton.style.display = 'none';
        }
      }
    }, {
      key: "_isPlaying",
      value: function _isPlaying() {
        return isVideoPlaying(this.els.video);
      }
    }, {
      key: "_remove",
      value: function _remove() {
        this.context.removeChild(this.els.container);
      }
    }, {
      key: "_assignWrapperStyle",
      value: function _assignWrapperStyle() {
        var _this2 = this;
        var containerRect = function containerRect() {
          return _this2.els.container.getBoundingClientRect();
        };
        var _changeStyle = function _changeStyle() {
          var containerRectWidth = containerRect().width;
          var containerRectHeight = containerRect().height;
          if (_judgePhoneOrientation() === _this2.options.orientation) {
            addStyles(_this2.els.wrapper, {
              width: "".concat(containerRectWidth, "px"),
              height: "".concat(containerRectHeight, "px"),
              transform: ''
            });
          } else {
            // Adjust the video orientation
            addStyles(_this2.els.wrapper, {
              width: "".concat(containerRectHeight, "px"),
              height: "".concat(containerRectWidth, "px"),
              transform: 'rotate(-90deg)'
            });
          }

          // set videoWrapperForConstraintRatio width&height
          setTimeout(function () {
            var wrapperWidth = Number.parseInt(_this2.els.wrapper.style.width, 10);
            var wrapperHeight = Number.parseInt(_this2.els.wrapper.style.height, 10);
            var preComputedHeight = wrapperWidth / _this2.options.aspectRatio;
            if (preComputedHeight >= wrapperHeight) {
              // based on wrapperWidth
              addStyles(_this2.els.videoWrapperForConstraintRatio, {
                width: "".concat(wrapperWidth, "px"),
                height: "".concat(preComputedHeight, "px")
              });
            } else {
              // based on wrapperHeight
              addStyles(_this2.els.videoWrapperForConstraintRatio, {
                width: "".concat(wrapperHeight * _this2.options.aspectRatio, "px"),
                height: "".concat(wrapperHeight, "px")
              });
            }
          }, 0);
        };
        var _changeOrientation = function _changeOrientation() {
          window.removeEventListener(_orientationchangeEvt, _changeOrientation);
          setTimeout(function () {
            _changeStyle();
            window.addEventListener(_orientationchangeEvt, _changeOrientation, false);
          }, 400);
        };
        if (this.options.disableRotation) {
          _changeStyle();
          window.addEventListener(_orientationchangeEvt, _changeOrientation, false);
        } else {
          addStyles(this.els.wrapper, {
            width: "".concat(containerRect().width, "px"),
            height: "".concat(containerRect().height, "px")
          });
        }
      }
    }]);
    return H5VideoPlayer;
  }();

  return H5VideoPlayer;

}));
