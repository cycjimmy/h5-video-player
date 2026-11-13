;(function(){try{if(typeof document!='undefined'){var e=document.createElement('style');e.appendChild(document.createTextNode(".index-module__container,.index-module__video,.index-module__mask,.index-module__play-button-wrapper{z-index:1;width:100%;height:100%;position:absolute;top:0;left:0}.index-module__play-button,.index-module__video-wrapper-for-constraint-ratio,.index-module__wrapper{margin:auto;position:absolute;top:-100%;bottom:-100%;left:-100%;right:-100%}.index-module__container{z-index:9999;background-color:#000;display:none;overflow:hidden}.index-module__container.index-module__show{display:block}.index-module__wrapper{z-index:1;transform-origin:50%;background-color:#000;overflow:hidden}.index-module__video-wrapper-for-constraint-ratio{z-index:1;overflow:hidden}.index-module__video{z-index:-1;-o-object-fit:fill;object-fit:fill;-o-object-position:50% 50%;object-position:50% 50%}.index-module__mask{z-index:10}.index-module__play-button-wrapper{z-index:100;background-color:rgba(0,0,0,.1)}.index-module__play-button{cursor:pointer;opacity:.6;max-width:60px;max-height:60px}.index-module__play-button-svg{fill:#fff;max-width:60px;max-height:60px}"));document.head.appendChild(e)}}catch(t){console.error('inject-css',t)}})();
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define([], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.H5VideoPlayer = factory());
})(this, function() {
	// node_modules/@cycjimmy/awesome-js-funcs/dist/object/entries.js
	/**
	* compatibility scheme for traversing object property methods Object.entries
	* @param obj
	* @returns {Iterator.<*>|*}
	*/
	var entries_default = (obj) => {
		const replaceFunc = (o) => {
			const arr = [];
			Object.keys(o).forEach((key) => {
				arr.push([key, o[key]]);
			});
			return arr;
		};
		if (Object.entries) return Object.entries(obj);
		return replaceFunc(obj);
	};
	// node_modules/@cycjimmy/awesome-js-funcs/dist/dom/addStyles.js
	/**
	* element add styles
	* @param element
	* @param styles (obj)
	*/
	var addStyles_default = (element, styles) => {
		entries_default(styles).forEach(([k, v]) => {
			if (Object.prototype.hasOwnProperty.call(styles, k)) element.style[k] = v;
		});
	};
	// node_modules/@cycjimmy/awesome-js-funcs/dist/judgeBasic/isString.js
	/**
	* determine a string type
	* @param str
	* @returns {boolean}
	*/
	var isString_default = (str) => typeof str === "string" && str.constructor === String;
	// node_modules/@cycjimmy/awesome-js-funcs/dist/media/isVideoPlaying.js
	/**
	* judge video playing
	* @param video
	* @return {boolean}
	*/
	var isVideoPlaying_default = (video) => video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
	var index_module_default = {
		container: "index-module__container",
		video: "index-module__video",
		mask: "index-module__mask",
		playButtonWrapper: "index-module__play-button-wrapper",
		playButton: "index-module__play-button",
		videoWrapperForConstraintRatio: "index-module__video-wrapper-for-constraint-ratio",
		wrapper: "index-module__wrapper",
		show: "index-module__show",
		playButtonSvg: "index-module__play-button-svg"
	};
	// src/templates/playButton.js
	/**
	* Render the play button markup.
	*
	* @param options The template options.
	* @param options.style The generated CSS module class names.
	* @returns The play button markup.
	*/
	var playButton_default = (options) => {
		const { style } = options;
		return `
<div class="${style.playButton}">
  <svg class="${style.playButtonSvg}" viewBox="0 0 64 64">
    <path d="M26,45.5L44,32L26,18.6v27V45.5L26,45.5z M32,2C15.4,2,2,15.5,2,32c0,16.6,13.4,30,30,30c16.6,0,30-13.4,30-30 C62,15.4,48.5,2,32,2L32,2z M32,56c-9.7,0-18.5-5.9-22.2-14.8C6.1,32.2,8.1,21.9,15,15c6.9-6.9,17.2-8.9,26.2-5.2 C50.1,13.5,56,22.3,56,32C56,45.3,45.2,56,32,56L32,56z"></path>
  </svg>
</div>
`;
	};
	// node_modules/@cycjimmy/awesome-js-funcs/dist/judgeBasic/isArray.js
	/**
	* determine an array type
	* @param arr
	* @returns {boolean}
	*/
	var isArray_default = (arr) => Object.prototype.toString.call(arr).slice(8, -1) === "Array";
	// node_modules/@cycjimmy/awesome-js-funcs/dist/judgeBasic/isObject.js
	/**
	* determine an object
	* @param o
	* @returns {boolean}
	*/
	var isObject_default = (o) => Object.prototype.toString.call(o) === "[object Object]";
	// src/templates/wrapper.js
	/**
	* Render the video wrapper markup.
	*
	* @param options The template options.
	* @param options.style The generated CSS module class names.
	* @param options.source The video source.
	* @param options.orientation `'portrait'` or `'landscape'`.
	* @returns The video wrapper markup.
	*/
	var wrapper_default = (options) => {
		const { style, source, orientation } = options;
		/**
		* Build the `<source>` tags for the configured video source.
		*
		* @returns The generated `<source>` markup.
		*/
		const handleSourceHtml = () => {
			if (isArray_default(source)) return source.map((s) => `<source src="${s.url}" type="video/${s.type}">`).reduce((previous, current) => previous + current, "");
			if (isObject_default(source)) return `<source src="${source.url}" type="video/${source.type}">`;
			if (isString_default(source)) return `<source src="${source}">`;
			return "";
		};
		return `
<div class="${style.videoWrapperForConstraintRatio}">
  <video class="${style.video}" width="100%" preload="auto"
  x-webkit-airplay="allow" webkit-playsinline="true" playsinline
  x5-video-player-type="h5" x5-video-player-fullscreen="true"
  x5-video-orientation="${orientation}">
    ${handleSourceHtml(source)}
    I'm sorry; your browser doesn't support HTML5 video.
  </video>
</div>
`;
	};
	// \0@oxc-project+runtime@0.156.0/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	// \0@oxc-project+runtime@0.156.0/helpers/esm/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	// \0@oxc-project+runtime@0.156.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	// \0@oxc-project+runtime@0.156.0/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	// \0@oxc-project+runtime@0.156.0/helpers/esm/objectSpread2.js
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	// src/index.js
	var _orientationchangeEvt = typeof window !== "undefined" && "onorientationchange" in window ? "orientationchange" : "resize";
	function _judgePhoneOrientation() {
		const { clientWidth } = document.documentElement;
		const { clientHeight } = document.documentElement;
		return clientWidth > clientHeight ? "landscape" : "portrait";
	}
	function _getElementStyle(el, styleName) {
		return window.getComputedStyle(el, null).getPropertyValue(styleName);
	}
	var H5VideoPlayer = class {
		/**
		* Create a player instance.
		*
		* @param source The video source: a url string, a `{ url, type }` object, or an array of those.
		* @param options The player options.
		* @param options.context The element, or its selector, the player is mounted into.
		* @param options.control Whether the built-in controls are shown.
		* @param options.autoPlay Whether playback starts right after `load()`.
		* @param options.autoClose Whether the player closes when the video ends.
		* @param options.preload Whether the player is appended to the context on construction.
		* @param options.orientation `'portrait'` or `'landscape'`.
		* @param options.aspectRatio The video aspect ratio; defaults from `orientation` when falsy.
		* @param options.disableRotation Whether automatic phone rotation handling is enabled.
		* @param options.picMode Whether the play button is hidden.
		* @param options.fixAndroidWechatContinue Whether the Android WeChat pause workaround is enabled.
		* @param options.hooks The playback hook callbacks.
		*/
		constructor(source, options = {}) {
			const { context = "body", control = false, autoPlay = false, autoClose = true, preload = true, orientation = "portrait", aspectRatio = 0, disableRotation = false, picMode = false, fixAndroidWechatContinue = false, hooks = {} } = options;
			this.context = isString_default(context) ? document.querySelector(context) : context;
			this.options = {
				source,
				control,
				autoPlay,
				autoClose,
				preload,
				orientation,
				aspectRatio: aspectRatio || (() => orientation === "landscape" ? 16 / 9 : 9 / 16)(),
				disableRotation,
				picMode,
				fixAndroidWechatContinue
			};
			this.hooks = _objectSpread2({
				play: () => {},
				pause: () => {},
				stop: () => {}
			}, hooks);
			if (_getElementStyle(this.context, "position") === "static") this.context.style.position = "relative";
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
			if (this.options.preload) this.init();
		}
		initContainer() {
			this.els.container = document.createElement("div");
			this.els.container.classList.add(index_module_default.container);
		}
		initWrapper() {
			this.els.wrapper = document.createElement("div");
			this.els.wrapper.classList.add(index_module_default.wrapper);
			this.els.wrapper.innerHTML = wrapper_default({
				source: this.options.source,
				orientation: this.options.orientation,
				style: index_module_default
			});
			this.els.container.appendChild(this.els.wrapper);
			this.els.videoWrapperForConstraintRatio = this.els.wrapper.querySelector(`.${index_module_default.videoWrapperForConstraintRatio}`);
			this.els.video = this.els.wrapper.querySelector(`.${index_module_default.video}`);
			this.els.mask = document.createElement("div");
			this.els.mask.classList.add(index_module_default.mask);
			this.els.container.appendChild(this.els.mask);
			if (this.options.control) {
				this.els.playButton = document.createElement("div");
				this.els.playButton.classList.add(index_module_default.playButtonWrapper);
				if (!this.options.picMode) this.els.playButton.innerHTML = playButton_default({ style: index_module_default });
				this.els.container.appendChild(this.els.playButton);
			}
		}
		init() {
			this.context.appendChild(this.els.container);
		}
		load() {
			if (!this.context.contains(this.els.container)) this.init();
			this.els.container.classList.add(index_module_default.show);
			this._assignWrapperStyle();
			this.eventBind();
			if (this.options.autoPlay) this.play();
			return this;
		}
		eventBind() {
			if (this.options.control) {
				this.els.mask.addEventListener("click", () => {
					if (this._isPlaying()) this.pause();
					else this.play();
				});
				this.els.playButton.addEventListener("click", () => {
					this.play();
				});
			} else if (this.options.fixAndroidWechatContinue) this.els.video.addEventListener("click", () => {
				if (!this._isPlaying()) this.play();
			});
			this.els.video.addEventListener("ended", () => {
				this._showPlayBtn();
				if (this.options.autoClose) this._remove();
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
			if (this.els.playButton) this.els.playButton.style.display = "block";
		}
		_hiddenPlayBtn() {
			if (this.els.playButton) this.els.playButton.style.display = "none";
		}
		_isPlaying() {
			return isVideoPlaying_default(this.els.video);
		}
		_remove() {
			this.context.removeChild(this.els.container);
		}
		_assignWrapperStyle() {
			const containerRect = () => this.els.container.getBoundingClientRect();
			const _changeStyle = () => {
				const containerRectWidth = containerRect().width;
				const containerRectHeight = containerRect().height;
				if (_judgePhoneOrientation() === this.options.orientation) addStyles_default(this.els.wrapper, {
					width: `${containerRectWidth}px`,
					height: `${containerRectHeight}px`,
					transform: ""
				});
				else addStyles_default(this.els.wrapper, {
					width: `${containerRectHeight}px`,
					height: `${containerRectWidth}px`,
					transform: "rotate(-90deg)"
				});
				setTimeout(() => {
					const wrapperWidth = Number.parseInt(this.els.wrapper.style.width, 10);
					const wrapperHeight = Number.parseInt(this.els.wrapper.style.height, 10);
					const preComputedHeight = wrapperWidth / this.options.aspectRatio;
					if (preComputedHeight >= wrapperHeight) addStyles_default(this.els.videoWrapperForConstraintRatio, {
						width: `${wrapperWidth}px`,
						height: `${preComputedHeight}px`
					});
					else addStyles_default(this.els.videoWrapperForConstraintRatio, {
						width: `${wrapperHeight * this.options.aspectRatio}px`,
						height: `${wrapperHeight}px`
					});
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
			} else addStyles_default(this.els.wrapper, {
				width: `${containerRect().width}px`,
				height: `${containerRect().height}px`
			});
		}
	};
	return H5VideoPlayer;
});
