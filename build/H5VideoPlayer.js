/*!
 * h5-video-player v1.2.0
 * Homepage: https://github.com/cycdpo/h5-video-player#readme
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["H5VideoPlayer"] = factory();
	else
		root["H5VideoPlayer"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return H5VideoPlayer; });
/* harmony import */ var _playButton_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _playButton_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playButton_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _wrapper_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wrapper_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cycjimmy_awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _cycjimmy_awesome_js_funcs_dom_addStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _cycjimmy_awesome_js_funcs_media_isVideoPlaying__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
// template

 // style

 // lib





var H5VideoPlayer =
/*#__PURE__*/
function () {
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
        _ref$hookInPlay = _ref.hookInPlay,
        hookInPlay = _ref$hookInPlay === void 0 ? function () {} : _ref$hookInPlay,
        _ref$hookInPause = _ref.hookInPause,
        hookInPause = _ref$hookInPause === void 0 ? function () {} : _ref$hookInPause,
        _ref$hookInStop = _ref.hookInStop,
        hookInStop = _ref$hookInStop === void 0 ? function () {} : _ref$hookInStop;
    this.context = Object(_cycjimmy_awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_3__["default"])(context) ? document.querySelector(context) : context;
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
      fixAndroidWechatContinue: fixAndroidWechatContinue,
      hookInPlay: hookInPlay,
      hookInPause: hookInPause,
      hookInStop: hookInStop
    }; // set context position

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

  var _proto = H5VideoPlayer.prototype;

  _proto.initContainer = function initContainer() {
    // container
    this.els.container = document.createElement('div');
    this.els.container.classList.add(_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container);
  };

  _proto.initWrapper = function initWrapper() {
    // wrapper
    this.els.wrapper = document.createElement('div');
    this.els.wrapper.classList.add(_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper);
    this.els.wrapper.innerHTML = _wrapper_pug__WEBPACK_IMPORTED_MODULE_1___default()({
      source: this.options.source,
      orientation: this.options.orientation,
      _style: _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a
    });
    this.els.container.appendChild(this.els.wrapper); // video

    this.els.videoWrapperForConstraintRatio = this.els.wrapper.querySelector('.' + _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.videoWrapperForConstraintRatio);
    this.els.video = this.els.wrapper.querySelector('.' + _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.video); // mask: used to control video

    this.els.mask = document.createElement('div');
    this.els.mask.classList.add(_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mask);
    this.els.container.appendChild(this.els.mask); // playButton

    if (this.options.control) {
      this.els.playButton = document.createElement('div');
      this.els.playButton.classList.add(_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.playButtonWrapper); // picMode

      if (!this.options.picMode) {
        this.els.playButton.innerHTML = _playButton_pug__WEBPACK_IMPORTED_MODULE_0___default()({
          _style: _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a
        });
      }

      this.els.container.appendChild(this.els.playButton);
    }
  };

  _proto.init = function init() {
    this.context.appendChild(this.els.container);
  };

  _proto.load = function load() {
    if (!this.context.contains(this.els.container)) {
      this.init();
    }

    this.els.container.classList.add(_style_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.show);

    this._assignWrapperStyle();

    this.eventBind();

    if (this.options.autoPlay) {
      this.play();
    }

    return this;
  };

  _proto.eventBind = function eventBind() {
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
      console.log('ended');

      _this._showPlayBtn();

      if (_this.options.autoClose) {
        _this._remove();
      }

      _this.options.hookInStop();
    });
  };

  _proto.play = function play() {
    this.els.video.play();

    this._hiddenPlayBtn();

    this.options.hookInPlay();
  };

  _proto.pause = function pause() {
    this.els.video.pause();

    this._showPlayBtn();

    this.options.hookInPause();
  };

  _proto._showPlayBtn = function _showPlayBtn() {
    if (this.els.playButton) {
      this.els.playButton.style.display = 'block';
    }
  };

  _proto._hiddenPlayBtn = function _hiddenPlayBtn() {
    if (this.els.playButton) {
      this.els.playButton.style.display = 'none';
    }
  };

  _proto._isPlaying = function _isPlaying() {
    return Object(_cycjimmy_awesome_js_funcs_media_isVideoPlaying__WEBPACK_IMPORTED_MODULE_5__["default"])(this.els.video);
  };

  _proto._remove = function _remove() {
    this.context.removeChild(this.els.container);
  };

  _proto._assignWrapperStyle = function _assignWrapperStyle() {
    var _this2 = this;

    var containerRect = function containerRect() {
      return _this2.els.container.getBoundingClientRect();
    },
        _changeStyle = function _changeStyle() {
      var containerRectWidth = containerRect().width,
          containerRectHeight = containerRect().height;

      if (_judgePhoneOrientation() === _this2.options.orientation) {
        Object(_cycjimmy_awesome_js_funcs_dom_addStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2.els.wrapper, {
          width: containerRectWidth + 'px',
          height: containerRectHeight + 'px',
          transform: ''
        });
      } else {
        // Adjust the video orientation
        Object(_cycjimmy_awesome_js_funcs_dom_addStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2.els.wrapper, {
          width: containerRectHeight + 'px',
          height: containerRectWidth + 'px',
          transform: 'rotate(-90deg)'
        });
      } // set videoWrapperForConstraintRatio width&height


      setTimeout(function () {
        var wrapperWidth = Number.parseInt(_this2.els.wrapper.style.width),
            wrapperHeight = Number.parseInt(_this2.els.wrapper.style.height),
            preComputedHeight = wrapperWidth / _this2.options.aspectRatio;

        if (preComputedHeight >= wrapperHeight) {
          // based on wrapperWidth
          Object(_cycjimmy_awesome_js_funcs_dom_addStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2.els.videoWrapperForConstraintRatio, {
            width: wrapperWidth + 'px',
            height: preComputedHeight + 'px'
          });
        } else {
          // based on wrapperHeight
          Object(_cycjimmy_awesome_js_funcs_dom_addStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2.els.videoWrapperForConstraintRatio, {
            width: wrapperHeight * _this2.options.aspectRatio + 'px',
            height: wrapperHeight + 'px'
          });
        }
      }, 0);
    },
        _changeOrientation = function _changeOrientation() {
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
      Object(_cycjimmy_awesome_js_funcs_dom_addStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(this.els.wrapper, {
        width: containerRect().width + 'px',
        height: containerRect().height + 'px'
      });
    }
  };

  return H5VideoPlayer;
}(); // private




var _orientationchangeEvt = "onorientationchange" in window ? "orientationchange" : "resize",
    _judgePhoneOrientation = function _judgePhoneOrientation() {
  var clientWidth = document.documentElement.clientWidth,
      clientHeight = document.documentElement.clientHeight;
  return clientWidth > clientHeight ? 'landscape' : 'portrait';
},
    _getElementStyle = function _getElementStyle(el, styleName) {
  return window.getComputedStyle(el, null).getPropertyValue(styleName);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(2);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (_style) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([_style.playButton], [true]), false, true)) + "\u003E\u003Csvg" + (pug.attr("class", pug.classes([_style.playButtonSvg], [true]), false, true)+" viewBox=\"0 0 64 64\"") + "\u003E\u003Cpath d=\"M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";}.call(this,"_style" in locals_for_with?locals_for_with._style:typeof _style!=="undefined"?_style:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(3).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(2);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, Object, String, _style, orientation, source) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([_style.videoWrapperForConstraintRatio], [true]), false, true)) + "\u003E\u003Cvideo" + (pug.attr("class", pug.classes([_style.video], [true]), false, true)+" width=\"100%\" preload=\"auto\" x-webkit-airplay=\"allow\" webkit-playsinline=\"true\""+pug.attr("playsinline", true, true, true)+" x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"true\""+pug.attr("x5-video-orientation", orientation, true, true)) + "\u003E";
if (source instanceof Array) {
// iterate source
;(function(){
  var $$obj = source;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var sourceObj = $$obj[pug_index0];
pug_html = pug_html + "\u003Csource" + (pug.attr("src", sourceObj.url, true, true)+pug.attr("type", 'video/' + sourceObj.type, true, true)) + "\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var sourceObj = $$obj[pug_index0];
pug_html = pug_html + "\u003Csource" + (pug.attr("src", sourceObj.url, true, true)+pug.attr("type", 'video/' + sourceObj.type, true, true)) + "\u003E";
    }
  }
}).call(this);

}
else
if (source instanceof Object) {
pug_html = pug_html + "\u003Csource" + (pug.attr("src", source.url, true, true)+pug.attr("type", 'video/' + source.type, true, true)) + "\u003E";
}
else
if (typeof source === 'string' && source.constructor === String) {
pug_html = pug_html + "\u003Csource" + (pug.attr("src", source, true, true)) + "\u003E";
}
pug_html = pug_html + "I'm sorry; your browser doesn't support HTML5 video.\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"_style" in locals_for_with?locals_for_with._style:typeof _style!=="undefined"?_style:undefined,"orientation" in locals_for_with?locals_for_with.orientation:typeof orientation!=="undefined"?orientation:undefined,"source" in locals_for_with?locals_for_with.source:typeof source!=="undefined"?source:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(6);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(8)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, "/**\n * strip units\n */\n/**\n * calc vw\n * $designDrawingLength\n * $designDrawingWidth\n *\n * Usage:\n * @function calcVW($designDrawingLength:0) {\n *   @return call(get_function(\"designPx2VW\"), $designDrawingLength, $designDrawingWidth);\n * }\n */\n/**\n * Fix Align Center\n * $offset\n * $overwrite\n * $top\n * $right\n * $bottom\n * $left\n */\n/**\n * flex container inner elements alignment\n * $mainAxis\n * $crossAxis\n * options: false, center, flex-end, ...\n */\n/**\n * square container\n */\n/**\n * bg-image-full\n */\n.src-style-index__container, .src-style-index__video, .src-style-index__mask, .src-style-index__playButtonWrapper {\n  position: absolute;\n  z-index: 1;\n}\n\n/**\n * Fix Align Center\n * $offset\n * $overwrite\n * $top\n * $right\n * $bottom\n * $left\n */\n/**\n * flex container inner elements alignment\n * $mainAxis\n * $crossAxis\n * options: false, center, flex-end, ...\n */\n/**\n * square container\n */\n/**\n * bg-image-full\n */\n.src-style-index__container, .src-style-index__video, .src-style-index__mask, .src-style-index__playButtonWrapper {\n  position: absolute;\n  z-index: 1;\n}\n\n.src-style-index__container, .src-style-index__video, .src-style-index__mask, .src-style-index__playButtonWrapper {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.src-style-index__wrapper, .src-style-index__videoWrapperForConstraintRatio, .src-style-index__playButton {\n  position: absolute;\n  margin: auto;\n  left: -100%;\n  top: -100%;\n  right: -100%;\n  bottom: -100%;\n}\n\n.src-style-index__container {\n  z-index: 9999;\n  display: none;\n  background-color: black;\n  overflow: hidden;\n}\n\n.src-style-index__container.src-style-index__show {\n  display: block;\n}\n\n.src-style-index__wrapper {\n  z-index: 1;\n  overflow: hidden;\n  background-color: black;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n\n.src-style-index__videoWrapperForConstraintRatio {\n  z-index: 1;\n  overflow: hidden;\n}\n\n.src-style-index__video {\n  z-index: -1;\n  -o-object-fit: fill;\n     object-fit: fill;\n  -o-object-position: 50% 50%;\n     object-position: 50% 50%;\n}\n\n.src-style-index__mask {\n  z-index: 10;\n}\n\n.src-style-index__playButtonWrapper {\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.src-style-index__playButton {\n  max-width: 60px;\n  max-height: 60px;\n  cursor: pointer;\n  opacity: .6;\n}\n\n.src-style-index__playButtonSvg {\n  max-width: 60px;\n  max-height: 60px;\n  fill: #fff;\n}\n", ""]);
// Exports
exports.locals = {
	"container": "src-style-index__container",
	"video": "src-style-index__video",
	"mask": "src-style-index__mask",
	"playButtonWrapper": "src-style-index__playButtonWrapper",
	"wrapper": "src-style-index__wrapper",
	"videoWrapperForConstraintRatio": "src-style-index__videoWrapperForConstraintRatio",
	"playButton": "src-style-index__playButton",
	"show": "src-style-index__show",
	"playButtonSvg": "src-style-index__playButtonSvg"
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 判断是否字符串
 * @param str
 * @returns {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  return typeof str === 'string' && str.constructor === String;
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * element add styles
 * @param element
 * @param styles(obj)
 */
/* harmony default export */ __webpack_exports__["default"] = (function (element, styles) {
  for (var name in styles) {
    if (styles.hasOwnProperty(name)) {
      element.style[name] = styles[name];
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * judge video playing
 * @param video
 * @return {boolean}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (video) {
  return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
});

/***/ })
/******/ ])["default"];
});