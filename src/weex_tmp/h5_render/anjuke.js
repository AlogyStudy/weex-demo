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
	    "an-home"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "navication"
	      ],
	      "style": {
	        "flexDirection": "row",
	        "height": 100
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
	              "style": {
	                "color": "#ffffff",
	                "fontSize": 32
	              },
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
	            "justifyContent": "center"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "backgroundColor": "#f0f7e6",
	                "justifyContent": "center",
	                "alignItems": "center",
	                "borderRadius": 4,
	                "marginLeft": 20,
	                "marginRight": 20,
	                "height": 50,
	                "lineHeight": 50,
	                "fontSize": 14
	              },
	              "attr": {
	                "value": "// 图标文字"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.searchIcon}
	                  },
	                  "style": {
	                    "width": 44,
	                    "height": 44
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#999999"
	                  },
	                  "attr": {
	                    "value": "挑好房,上安居客"
	                  },
	                  "children": [
	                    {
	                      "type": "input",
	                      "attr": {
	                        "type": "text",
	                        "placeholder": "挑好房,上安居客"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flex": 0.4,
	            "flexDirection": "row",
	            "justifyContent": "center",
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "a",
	              "attr": {
	                "href": "#"
	              },
	              "style": {
	                "width": 30,
	                "height": 30
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.address}
	                  },
	                  "style": {
	                    "display": "inline-block",
	                    "width": 14,
	                    "height": 18,
	                    "backgroundRepeat": "no-repeat",
	                    "backgroundPosition": -150,
	                    "backgroundSize": 397,
	                    "verticalAlign": "middle"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "a",
	              "attr": {
	                "href": "#"
	              },
	              "children": [
	                {
	                  "type": "imgage",
	                  "attr": {
	                    "src": function () {return this.address}
	                  },
	                  "style": {
	                    "width": 15,
	                    "height": 18,
	                    "backgroundPosition": -397,
	                    "verticalAlign": "middle"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "value": function () {return this.bannerInfo}
	          }
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "vFor": "item in bannerInfo",
	                "value": function () {return this.item}
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

	module.exports = {
	  "navication": {
	    "backgroundColor": "#62ab00"
	  },
	  "image": {
	    "width": 700,
	    "height": 700
	  },
	  "slider": {
	    "marginTop": 25,
	    "marginLeft": 25,
	    "width": 700,
	    "height": 700,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  },
	  "frame": {
	    "width": 700,
	    "height": 700,
	    "position": "relative"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function data() {
	        return {
	            searchIcon: '',
	            address: 'http://pages.anjukestatic.com/usersite/touch/img/home/home_img3.png',
	            bannerInfo: [{ txt: '新房' }, { txt: '二手房' }, { txt: '租房' }, { txt: '商铺写字楼' }, { txt: '实房' }, { txt: '海外地产' }]
	        };
	    },
	    methods: {},
	    created: function created() {},
	    ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);