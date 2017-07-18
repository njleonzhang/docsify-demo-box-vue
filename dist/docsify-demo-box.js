(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("marked"), require("vue"), require("Prism"));
	else if(typeof define === 'function' && define.amd)
		define(["marked", "vue", "Prism"], factory);
	else if(typeof exports === 'object')
		exports["DemoBox"] = factory(require("marked"), require("vue"), require("Prism"));
	else
		root["DemoBox"] = factory(root["marked"], root["Vue"], root["Prism"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

exports.strip = function (str, tags) {
  var dummyNode = document.createElement("DIV");
  dummyNode.innerHTML = str;

  tags = tags ? [].concat(tags) : [];

  tags.forEach(function (tag) {
    var targetNode = dummyNode.querySelector(tag);
    if (targetNode) {
      dummyNode.removeChild(targetNode);
    }
  });

  return dummyNode.innerHTML.trim();
};

exports.fetch = function (str, tag) {
  var dummyNode = document.createElement("DIV");
  dummyNode.innerHTML = str;

  return dummyNode.querySelector(tag) ? dummyNode.querySelector(tag).innerHTML.trim() : "";
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(11)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(8),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".demo-block{border:1px solid #eaeefb;border-radius:4px;transition:.2s}.demo-block.hover{box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)}.demo-block code{font-family:Menlo,Monaco,Consolas,Courier,monospace}.demo-block .demo-button{float:right}.demo-block .source{padding:24px}.demo-block .meta{background-color:#f9fafc;border-top:1px solid #eaeefb;clear:both;overflow:hidden;height:0;transition:height .2s}.demo-block .description{padding:18px 24px;width:40%;box-sizing:border-box;border-left:1px solid #eaeefb;float:right;font-size:14px;line-height:1.8;color:#5e6d82;word-break:break-word}.demo-block .description p{margin:0 0 12px;line-height:1.8}.demo-block .description code{color:#5e6d82;background-color:#e6effb;margin:0 4px;display:inline-block;padding:1px 5px;font-size:12px;border-radius:3px;height:18px;line-height:18px}.demo-block .description button{height:36px;line-height:36px;text-align:center;background:#20a0ff;border:none;border-radius:5px;color:#fff;display:block;font-size:14px;padding-left:10px;padding-right:10px}.demo-block .description button:hover{background:#4db3ff}.demo-block .highlight{width:60%;border-right:1px solid #eaeefb}.demo-block .highlight pre{margin:0}.demo-block .highlight code.hljs{margin:0;border:none;max-height:none;border-radius:0}.demo-block .highlight code.hljs:before{content:none}.demo-block .demo-block-control{border-top:1px solid #eaeefb;height:36px;box-sizing:border-box;background-color:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px;text-align:center;margin-top:-1px;color:#d3dce6;cursor:pointer;transition:.2s;position:relative}.demo-block .demo-block-control i{font-size:12px;line-height:36px;transition:.3s}.demo-block .demo-block-control i.hovering{-webkit-transform:translateX(-40px);transform:translateX(-40px)}.demo-block .demo-block-control span{position:absolute;-webkit-transform:translateX(-30px);transform:translateX(-30px);font-size:14px;line-height:36px;transition:.3s;display:inline-block}.demo-block .demo-block-control:hover{color:#20a0ff;background-color:#f9fafc}.demo-block .demo-block-control .text-slide-enter,.demo-block .demo-block-control .text-slide-leave-active{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}", ""]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demo-block",
    class: {
      'hover': _vm.hovering
    },
    on: {
      "mouseenter": function($event) {
        _vm.hovering = true
      },
      "mouseleave": function($event) {
        _vm.hovering = false
      }
    }
  }, [_vm._t("source"), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('div', {
    staticClass: "description"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.desc)
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "go",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.goJsfiddle
    }
  }, [_vm._v("Try in Jsfiddle!")])]), _vm._v(" "), _c('div', {
    staticClass: "highlight",
    domProps: {
      "innerHTML": _vm._s(_vm.codePrismed)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "demo-block-control",
    on: {
      "click": function($event) {
        _vm.isExpanded = !_vm.isExpanded
      }
    }
  }, [_c('transition', {
    attrs: {
      "name": "arrow-slide"
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "text-slide"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.controlText))])])], 1)], 2)
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(10)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("7218c7ce", content, true);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(13)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_strip_tags__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_strip_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__util_strip_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'demo-block',
  data: function data() {
    return {
      hovering: false,
      isExpanded: false
    };
  },


  props: {
    jsfiddle: {
      default: function _default() {
        return {};
      },

      type: Object
    },
    desc: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: ''
    },
    jsResources: {
      type: String,
      default: ''
    },
    cssResources: {
      type: String,
      default: ''
    },
    bootCode: {
      type: String,
      default: ''
    }
  },

  methods: {
    goJsfiddle: function goJsfiddle() {
      var _jsfiddle = this.jsfiddle,
          script = _jsfiddle.script,
          html = _jsfiddle.html,
          style = _jsfiddle.style;

      var jsTpl = this.bootCode + (script || '').replace(/export default/, 'var Main =').trim();
      var htmlTpl = this.jsResources + '\n<div id="app">\n' + html.trim() + '\n</div>';
      var cssTpl = this.cssResources + '\n' + (style || '').trim() + '\n';

      jsTpl = jsTpl ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')' : 'new Vue().$mount(\'#app\')';

      var data = {
        js: jsTpl,
        css: cssTpl,
        html: htmlTpl,
        panel_js: 3,
        panel_css: 1
      };
      var form = document.getElementById('fiddle-form') || document.createElement('form');
      form.innerHTML = '';
      var node = document.createElement('textarea');

      form.method = 'post';
      form.action = 'https://jsfiddle.net/api/post/library/pure/';
      form.target = '_blank';

      for (var name in data) {
        node.name = name;
        node.value = data[name].toString();
        form.appendChild(node.cloneNode());
      }
      form.setAttribute('id', 'fiddle-form');
      form.style.display = 'none';
      document.body.appendChild(form);

      form.submit();
    }
  },

  computed: {
    controlText: function controlText() {
      return this.isExpanded ? 'Hide' : 'Expand';
    },
    codeArea: function codeArea() {
      return this.$el.getElementsByClassName('meta')[0];
    },
    codeAreaHeight: function codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return Math.max(this.$el.getElementsByClassName('description')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight);
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight;
    },
    codePrismed: function codePrismed() {
      var hl = __WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.highlight(__WEBPACK_IMPORTED_MODULE_0__util_strip_tags___default.a.strip(this.code, ['desc', 'lang']).replace(/\/\*.*\*\/\s*/, ''), __WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.languages[this.lang] || __WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.languages.markup);
      return '<pre v-pre data-lang="' + this.lang + '"><code class="lang-' + this.lang + '">' + hl + '</code></pre>';
    }
  },

  watch: {
    isExpanded: function isExpanded(val) {
      this.codeArea.style.height = val ? this.codeAreaHeight + 1 + 'px' : '0';
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var highlight = _this.$el.getElementsByClassName('highlight')[0];
      if (_this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%';
        highlight.borderRight = 'none';
      }
    });
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComponent", function() { return generateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_strip_tags__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_strip_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_strip_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_block__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__demo_block__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_marked__);






var install = function install() {
  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_3__demo_block___default.a.name, __WEBPACK_IMPORTED_MODULE_3__demo_block___default.a);
};

var generateComponent = function generateComponent(code, lang, jsResources, cssResources, bootCode) {
  var html = __WEBPACK_IMPORTED_MODULE_2__util_strip_tags___default.a.fetch(code, 'template');
  var style = __WEBPACK_IMPORTED_MODULE_2__util_strip_tags___default.a.fetch(code, 'style');
  var script = __WEBPACK_IMPORTED_MODULE_2__util_strip_tags___default.a.fetch(code, 'script');
  var descOrg = __WEBPACK_IMPORTED_MODULE_2__util_strip_tags___default.a.fetch(code, 'desc');
  var desc = __WEBPACK_IMPORTED_MODULE_4_marked___default.a && __WEBPACK_IMPORTED_MODULE_4_marked___default()(descOrg) || descOrg;

  var scriptStrOrg = '(' + script.replace('export default', '').trim() + ')';
  var scriptStr = Babel && Babel.transform(scriptStrOrg, { presets: ['es2015'] }).code || scriptStrOrg;

  var scriptObj = eval(scriptStr);

  scriptObj.template = html;

  var jsfiddleStr = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({ html: html, style: style, script: script });

  return {
    template: '\n      <demo-block class="demo-box"\n        :jsfiddle="jsfiddle"\n        :code="code"\n        :desc="desc"\n        :lang="lang"\n        :js-resources="jsResources"\n        :css-resources="cssResources"\n        :boot-code="bootCode">\n        <div class="source" slot="source"><my-code/></div>\n      </demo-block/>\n    ',

    components: {
      DemoBlock: __WEBPACK_IMPORTED_MODULE_3__demo_block___default.a,
      MyCode: scriptObj
    },

    data: function data() {
      return {
        jsfiddle: { html: html, style: style, script: script },
        code: code,
        desc: desc,
        lang: lang,
        jsResources: jsResources,
        cssResources: cssResources,
        bootCode: bootCode
      };
    }
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ]);
});