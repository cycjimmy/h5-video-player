/*!
 * h5-video-player v1.1.1
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/awesome-js-funcs/judgeBasic/isString.js":
/*!**************************************************************!*\
  !*** ./node_modules/awesome-js-funcs/judgeBasic/isString.js ***!
  \**************************************************************/
/*! exports provided: default */
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/style.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./src/style.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".src-style__container, .src-style__video, .src-style__mask, .src-style__playButtonWrapper, .src-style__wrapper, .src-style__videoWrapperForConstraintRatio, .src-style__playButton {\n  position: absolute;\n}\n\n.src-style__container, .src-style__video, .src-style__mask, .src-style__playButtonWrapper {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.src-style__wrapper, .src-style__videoWrapperForConstraintRatio, .src-style__playButton {\n  left: -100%;\n  top: -100%;\n  right: -100%;\n  bottom: -100%;\n  margin: auto;\n}\n\n.src-style__container {\n  z-index: 9999;\n  display: none;\n  background-color: black;\n  overflow: hidden;\n}\n\n.src-style__container.src-style__show {\n  display: block;\n}\n\n.src-style__wrapper {\n  z-index: 1;\n  overflow: hidden;\n  background-color: black;\n  transform-origin: 50% 50%;\n}\n\n.src-style__videoWrapperForConstraintRatio {\n  z-index: 1;\n  overflow: hidden;\n}\n\n.src-style__video {\n  z-index: -1;\n  object-fit: fill;\n  object-position: 50% 50%;\n}\n\n.src-style__mask {\n  z-index: 10;\n}\n\n.src-style__playButtonWrapper {\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.src-style__playButton {\n  max-width: 60px;\n  max-height: 60px;\n  cursor: pointer;\n  opacity: .6;\n}\n\n.src-style__playButtonSvg {\n  max-width: 60px;\n  max-height: 60px;\n  fill: #fff;\n}\n", ""]);

// exports
exports.locals = {
	"container": "src-style__container",
	"video": "src-style__video",
	"mask": "src-style__mask",
	"playButtonWrapper": "src-style__playButtonWrapper",
	"wrapper": "src-style__wrapper",
	"videoWrapperForConstraintRatio": "src-style__videoWrapperForConstraintRatio",
	"playButton": "src-style__playButton",
	"show": "src-style__show",
	"playButtonSvg": "src-style__playButtonSvg"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
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
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return H5VideoPlayer; });
/* harmony import */ var _playButton_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playButton.pug */ "./src/playButton.pug");
/* harmony import */ var _playButton_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playButton_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper.pug */ "./src/wrapper.pug");
/* harmony import */ var _wrapper_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wrapper_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! awesome-js-funcs/judgeBasic/isString */ "./node_modules/awesome-js-funcs/judgeBasic/isString.js");
// template

 // style

 // lib



var H5VideoPlayer =
/*#__PURE__*/
function () {
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
  function H5VideoPlayer(source, _ref) {
    var _ref$context = _ref.context,
        context = _ref$context === void 0 ? 'body' : _ref$context,
        _ref$control = _ref.control,
        control = _ref$control === void 0 ? false : _ref$control,
        _ref$positioned = _ref.positioned,
        positioned = _ref$positioned === void 0 ? false : _ref$positioned,
        _ref$autoPlay = _ref.autoPlay,
        autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
        _ref$autoClose = _ref.autoClose,
        autoClose = _ref$autoClose === void 0 ? true : _ref$autoClose,
        _ref$preload = _ref.preload,
        preload = _ref$preload === void 0 ? true : _ref$preload,
        _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
        _ref$aspectRatio = _ref.aspectRatio,
        aspectRatio = _ref$aspectRatio === void 0 ? 9 / 16 : _ref$aspectRatio,
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
    this.context = Object(awesome_js_funcs_judgeBasic_isString__WEBPACK_IMPORTED_MODULE_3__["default"])(context) ? document.querySelector(context) : context;
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
      hookInStop: hookInStop
    }; // set context position

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
  }

  var _proto = H5VideoPlayer.prototype;

  _proto.initContainer = function initContainer() {
    // container
    this.container = document.createElement('div');
    this.container.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container);
  };

  _proto.initWrapper = function initWrapper() {
    // wrapper
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper);
    this.wrapper.innerHTML = _wrapper_pug__WEBPACK_IMPORTED_MODULE_1___default()({
      source: this.options.source,
      orientation: this.options.orientation,
      _style: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a
    });
    this.container.appendChild(this.wrapper); // video

    this.videoWrapperForConstraintRatio = this.wrapper.querySelector('.' + _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.videoWrapperForConstraintRatio);
    this.video = this.wrapper.querySelector('.' + _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.video); // mask: used to control video

    this.mask = document.createElement('div');
    this.mask.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mask);
    this.container.appendChild(this.mask); // playButton

    if (this.options.control) {
      this.playButton = document.createElement('div');
      this.playButton.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.playButtonWrapper); // picMode

      if (!this.options.picMode) {
        this.playButton.innerHTML = _playButton_pug__WEBPACK_IMPORTED_MODULE_0___default()({
          _style: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a
        });
      }

      this.container.appendChild(this.playButton);
    }
  };

  _proto.init = function init() {
    this.context.appendChild(this.container);
  };

  _proto.load = function load() {
    if (!this.context.contains(this.container)) {
      this.init();
    }

    this.container.classList.add(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.show);

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
    } else if (this.options.fixAndroidWechatContinue) {
      this.video.addEventListener('click', function () {
        if (!_this._isPlaying()) {
          _this.play();
        }
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

  _proto.play = function play() {
    this.video.play();

    this._hiddenPlayBtn();

    this.options.hookInPlay();
  };

  _proto.pause = function pause() {
    this.video.pause();

    this._showPlayBtn();

    this.options.hookInPause();
  };

  _proto._showPlayBtn = function _showPlayBtn() {
    if (this.playButton) {
      this.playButton.style.display = 'block';
    }
  };

  _proto._hiddenPlayBtn = function _hiddenPlayBtn() {
    if (this.playButton) {
      this.playButton.style.display = 'none';
    }
  };

  _proto._isPlaying = function _isPlaying() {
    return this.video.currentTime > 0 && !this.video.paused && !this.video.ended && this.video.readyState > 2;
  };

  _proto._remove = function _remove() {
    this.context.removeChild(this.container);
  };

  _proto._assignWrapperStyle = function _assignWrapperStyle() {
    var _this2 = this;

    var containerRect = function containerRect() {
      return _this2.container.getBoundingClientRect();
    },
        _changeStyle = function _changeStyle() {
      var containerRectWidth = containerRect().width,
          containerRectHeight = containerRect().height;

      if (_judgePhoneOrientation() === _this2.options.orientation) {
        _addStyles(_this2.wrapper, {
          width: containerRectWidth + 'px',
          height: containerRectHeight + 'px',
          transform: ''
        });
      } else {
        // Adjust the video orientation
        _addStyles(_this2.wrapper, {
          width: containerRectHeight + 'px',
          height: containerRectWidth + 'px',
          transform: 'rotate(-90deg)'
        });
      } // set videoWrapperForConstraintRatio width&height


      setTimeout(function () {
        var wrapperWidth = Number.parseInt(_this2.wrapper.style.width),
            wrapperHeight = Number.parseInt(_this2.wrapper.style.height),
            preComputedHeight = wrapperWidth / _this2.options.aspectRatio;
        console.log(wrapperWidth);

        if (preComputedHeight >= wrapperHeight) {
          // based on wrapperWidth
          _addStyles(_this2.videoWrapperForConstraintRatio, {
            width: wrapperWidth + 'px',
            height: preComputedHeight + 'px'
          });
        } else {
          // based on wrapperHeight
          _addStyles(_this2.videoWrapperForConstraintRatio, {
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
      _addStyles(this.wrapper, {
        width: containerRect().width + 'px',
        height: containerRect().height + 'px'
      });
    }
  };

  return H5VideoPlayer;
}(); // private




var _addStyles = function _addStyles(element, styles) {
  for (var name in styles) {
    element.style[name] = styles[name];
  }
},
    _orientationchangeEvt = "onorientationchange" in window ? "orientationchange" : "resize",
    _judgePhoneOrientation = function _judgePhoneOrientation() {
  var clientWidth = document.documentElement.clientWidth,
      clientHeight = document.documentElement.clientHeight,
      result = '';

  if (clientWidth > clientHeight) {
    result = 'landscape';
  } else {
    result = 'portrait';
  }

  console.log('_judgePhoneOrientation: ' + result);
  return result;
};

/***/ }),

/***/ "./src/playButton.pug":
/*!****************************!*\
  !*** ./src/playButton.pug ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (_style) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([_style.playButton], [true]), false, true)) + "\u003E\u003Csvg" + (pug.attr("class", pug.classes([_style.playButtonSvg], [true]), false, true)+" viewBox=\"0 0 64 64\"") + "\u003E\u003Cpath d=\"M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";}.call(this,"_style" in locals_for_with?locals_for_with._style:typeof _style!=="undefined"?_style:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/sass-loader/lib/loader.js??ref--5-2!./style.scss */ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/wrapper.pug":
/*!*************************!*\
  !*** ./src/wrapper.pug ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, Object, String, _style, orientation, source) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([_style.videoWrapperForConstraintRatio], [true]), false, true)) + "\u003E\u003Cvideo" + (pug.attr("class", pug.classes([_style.video], [true]), false, true)+" width=\"100%\" preload x-webkit-airplay=\"allow\" webkit-playsinline=\"true\" playsinline x5-video-player-type=\"h5\" x5-video-player-fullscreen=\"true\""+pug.attr("x5-video-orientation", orientation, true, true)) + "\u003E";
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

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=H5VideoPlayer.js.map