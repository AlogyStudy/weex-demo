/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/44211df0604109c2e844b767257cbec9', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/44211df0604109c2e844b767257cbec9',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "rootview"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "navication"
	      ],
	      "style": {
	        "flexDirection": "row",
	        "height": 100,
	        "background": "yellowgreen"
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flex": 0.4,
	            "justifyContent": "center",
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "上海 >"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flex": 1,
	            "background": "tan",
	            "justifyContent": "center"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "background": "#fff",
	                "justifyContent": "center",
	                "alignItems": "center",
	                "borderRadius": 4,
	                "marginLeft": 20,
	                "marginRight": 20,
	                "height": 70
	              },
	              "attr": {
	                "value": "// 图标文字"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": ""
	                  },
	                  "style": {
	                    "width": 44,
	                    "height": 44,
	                    "background": "cyan"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "搜索房源"
	                  }
	                },
	                {
	                  "type": "image",
	                  "style": {
	                    "width": 44,
	                    "height": 44,
	                    "background": "cyan"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flex": 0.4,
	            "background": "pink",
	            "flexDirection": "row",
	            "justifyContent": "center",
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "image"
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "地图"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	        data: function () {return {}},
	        methods: {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);