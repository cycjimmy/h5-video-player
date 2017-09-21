(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["H5VideoPlayer"] = factory();
	else
		root["H5VideoPlayer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var H5VideoPlayer = function () {
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
  function H5VideoPlayer(source, _ref) {
    var _ref$context = _ref.context,
        context = _ref$context === undefined ? 'body' : _ref$context,
        _ref$control = _ref.control,
        control = _ref$control === undefined ? false : _ref$control,
        _ref$autoPlay = _ref.autoPlay,
        autoPlay = _ref$autoPlay === undefined ? false : _ref$autoPlay,
        _ref$autoClose = _ref.autoClose,
        autoClose = _ref$autoClose === undefined ? true : _ref$autoClose,
        _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === undefined ? 'portrait' : _ref$orientation,
        _ref$aspectRatio = _ref.aspectRatio,
        aspectRatio = _ref$aspectRatio === undefined ? 9 / 16 : _ref$aspectRatio,
        _ref$hookInPlay = _ref.hookInPlay,
        hookInPlay = _ref$hookInPlay === undefined ? function () {} : _ref$hookInPlay,
        _ref$hookInPause = _ref.hookInPause,
        hookInPause = _ref$hookInPause === undefined ? function () {} : _ref$hookInPause,
        _ref$hookInStop = _ref.hookInStop,
        hookInStop = _ref$hookInStop === undefined ? function () {} : _ref$hookInStop;

    _classCallCheck(this, H5VideoPlayer);

    this.context = isString(context) ? document.querySelector(context) : context;
    this.options = {
      source: source,
      control: control,
      autoPlay: autoPlay,
      autoClose: autoClose,
      orientation: orientation,
      aspectRatio: aspectRatio,
      hookInPlay: hookInPlay,
      hookInPause: hookInPause,
      hookInStop: hookInStop
    };

    this.container = null;
    this.video = null;
    this.mask = null;
    this.playButton = null;

    this.init();
  }

  H5VideoPlayer.prototype.init = function init() {
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
      overflow: 'hidden'
    });

    this.container.innerHTML = '\n      <video \n      width="100%" \n      src=' + this.options.source + ' \n      preload \n      x-webkit-airplay="allow" \n      webkit-playsinline="true" \n      playsinline \n      x5-video-player-type="h5" \n      x5-video-player-fullscreen="true" \n      x5-video-orientation=' + this.options.orientation + '></video>\n      <div></div>\n    ';

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
      objectPosition: '50% 50%'
    });

    // mask
    this.mask = this.container.querySelector('div');
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

      this.playButton.innerHTML = '\n        <div style="\n        position: absolute; \n        left: 0; \n        top: 0; \n        right: 0; \n        bottom: 0; \n        margin: auto; \n        max-width: 60px; \n        max-height: 60px; \n        cursor: pointer; \n        opacity: .6;">\n          <svg \n          viewBox="0 0 64 64" \n          style=" max-width: 60px; max-height: 60px; fill: #fff;">\n            <path\n              d="M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z"/>\n          </svg>\n        </div>\n      ';

      this.container.appendChild(this.playButton);
    }
  };

  H5VideoPlayer.prototype.load = function load() {
    if (!this.context.contains(this.container)) {
      this.context.appendChild(this.container);
    }

    this.eventBind();

    if (this.options.autoPlay) {
      this.play();
    }

    return this;
  };

  H5VideoPlayer.prototype.eventBind = function eventBind() {
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
      _this.options.hookInStop();
    });
  };

  H5VideoPlayer.prototype.play = function play() {
    this.video.play();
    this._hiddenPlayBtn();
    this.options.hookInPlay();
  };

  H5VideoPlayer.prototype.pause = function pause() {
    this.video.pause();
    this._showPlayBtn();
    this.options.hookInPause();
  };

  H5VideoPlayer.prototype._showPlayBtn = function _showPlayBtn() {
    if (this.playButton) {
      this.playButton.style.display = 'block';
    }
  };

  H5VideoPlayer.prototype._hiddenPlayBtn = function _hiddenPlayBtn() {
    if (this.playButton) {
      this.playButton.style.display = 'none';
    }
  };

  H5VideoPlayer.prototype._isPlaying = function _isPlaying() {
    return this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > 2;
  };

  H5VideoPlayer.prototype._remove = function _remove() {
    this.context.removeChild(this.container);
  };

  return H5VideoPlayer;
}();

// private


/* harmony default export */ __webpack_exports__["default"] = (H5VideoPlayer);
var _addStyles = function _addStyles(element, styles) {
  for (var name in styles) {
    element.style[name] = styles[name];
  }
},
    isString = function isString(str) {
  return typeof str === 'string' && str.constructor === String;
};

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=H5VideoPlayer.js.map