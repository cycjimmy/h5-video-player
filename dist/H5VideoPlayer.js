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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
      var valB = pug_style(b[key]);
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
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
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
  if (typeof val.toJSON === 'function') {
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playButton_pug__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__playButton_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__playButton_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapper_pug__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapper_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wrapper_pug__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// template



var H5VideoPlayer = function () {
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
    this.wrapper = null;
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
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    });

    this.initWrapper();
    this.container.appendChild(this.wrapper);
  };

  H5VideoPlayer.prototype.initWrapper = function initWrapper() {
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

    this.wrapper.innerHTML = __WEBPACK_IMPORTED_MODULE_1__wrapper_pug___default()({
      source: this.options.source,
      orientation: this.options.orientation
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
      objectPosition: '50% 50%'
    });

    // mask: used to control video
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

      this.playButton.innerHTML = __WEBPACK_IMPORTED_MODULE_0__playButton_pug___default()();

      this.wrapper.appendChild(this.playButton);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(0);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv style=\"position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto; max-width: 60px;   max-height: 60px; cursor: pointer; opacity: .6;\"\u003E\u003Csvg viewBox=\"0 0 64 64\" style=\"max-width: 60px; max-height: 60px; fill: #fff;\"\u003E\u003Cpath d=\"M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(0);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, Object, String, orientation, source) {pug_html = pug_html + "\u003Cvideo" + (" width=\"100%\" preload x-webkit-airplay=\"allow\" webkit-playsinline=\"true\" playsinline x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"true\""+pug.attr("x5-video-orientation", orientation, true, true)) + "\u003E";
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
pug_html = pug_html + "I'm sorry; your browser doesn't support HTML5 video.\u003C\u002Fvideo\u003E\u003Cdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"orientation" in locals_for_with?locals_for_with.orientation:typeof orientation!=="undefined"?orientation:undefined,"source" in locals_for_with?locals_for_with.source:typeof source!=="undefined"?source:undefined));;return pug_html;};
module.exports = template;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=H5VideoPlayer.js.map