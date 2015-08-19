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

	'use strict';

	var _inherits = __webpack_require__(10)['default'];

	var _createClass = __webpack_require__(13)['default'];

	var _classCallCheck = __webpack_require__(16)['default'];

	var _get = __webpack_require__(17)['default'];

	var _extends = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(22)['default'];

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _xhr = __webpack_require__(23);

	var _xhr2 = _interopRequireDefault(_xhr);

	function CommJump() {}

	function back(prevLink) {
	    if (location.hash) history.back();else location.hash = prevLink;
	}

	function nextPage(nextLink) {
	    window.location.hash = nextLink;
	}

	//开始答题,说明

	var C_start = (function (_React$Component) {
	    function C_start() {
	        _classCallCheck(this, C_start);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(C_start, _React$Component);

	    _createClass(C_start, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-start' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'desc' },
	                    this.props.desc
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'flex' },
	                    _react2['default'].createElement(
	                        'button',
	                        { onClick: nextPage.bind(null, '/api/research/info'), className: 'btn' },
	                        '开始答题'
	                    )
	                )
	            );
	        }
	    }]);

	    return C_start;
	})(_react2['default'].Component);

	//用户信息,

	var C_info = (function (_React$Component2) {
	    function C_info() {
	        _classCallCheck(this, C_info);

	        if (_React$Component2 != null) {
	            _React$Component2.apply(this, arguments);
	        }
	    }

	    _inherits(C_info, _React$Component2);

	    _createClass(C_info, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(postUrl, nextLink) {
	            nextPage(nextLink);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-information' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'title t-c' },
	                    '请先填写您的资料'
	                ),
	                _react2['default'].createElement(C_info_container, { dataArr: props.dataArr }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'flex' },
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn sub', onClick: back },
	                        '返回'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn', onClick: this.handleSubmit.bind(this, null, props.nextLink) },
	                        '马上开始'
	                    )
	                )
	            );
	        }
	    }]);

	    return C_info;
	})(_react2['default'].Component);

	//用户信息输入判断

	var C_info_container = (function (_React$Component3) {
	    function C_info_container() {
	        _classCallCheck(this, C_info_container);

	        if (_React$Component3 != null) {
	            _React$Component3.apply(this, arguments);
	        }
	    }

	    _inherits(C_info_container, _React$Component3);

	    _createClass(C_info_container, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'ul',
	                { className: 'list' },
	                this.props.dataArr.map(function (item, index) {
	                    switch (item.type) {
	                        case 'ipt':
	                            return _react2['default'].createElement(C_info_ipt, _extends({}, item, { key: index }));
	                    }
	                })
	            );
	        }
	    }]);

	    return C_info_container;
	})(_react2['default'].Component);

	//填写用户信息---输入型

	var C_info_ipt = (function (_React$Component4) {
	    function C_info_ipt() {
	        _classCallCheck(this, C_info_ipt);

	        if (_React$Component4 != null) {
	            _React$Component4.apply(this, arguments);
	        }
	    }

	    _inherits(C_info_ipt, _React$Component4);

	    _createClass(C_info_ipt, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            return _react2['default'].createElement(
	                'li',
	                { className: 'item' },
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    '请填写您的',
	                    props.name,
	                    '：'
	                ),
	                _react2['default'].createElement('input', { className: 'ipt', name: props.key }),
	                props.keys == 'phone' ? _react2['default'].createElement(
	                    'p',
	                    { className: 'tip' },
	                    '*建议填写正确的手机号'
	                ) : ''
	            );
	        }
	    }]);

	    return C_info_ipt;
	})(_react2['default'].Component);

	//填写用户信息---选择型---单选

	var C_info_radio = (function (_React$Component5) {
	    function C_info_radio() {
	        _classCallCheck(this, C_info_radio);

	        if (_React$Component5 != null) {
	            _React$Component5.apply(this, arguments);
	        }
	    }

	    _inherits(C_info_radio, _React$Component5);

	    return C_info_radio;
	})(_react2['default'].Component);

	//问题类型,单选题

	var C_question_radio = (function (_React$Component6) {
	    function C_question_radio() {
	        _classCallCheck(this, C_question_radio);

	        if (_React$Component6 != null) {
	            _React$Component6.apply(this, arguments);
	        }
	    }

	    _inherits(C_question_radio, _React$Component6);

	    _createClass(C_question_radio, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;

	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-radio' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'title' },
	                    props.title
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    '*注：本题最多能选1个答案'
	                ),
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    props.data.map(function (val, index) {
	                        return _react2['default'].createElement(
	                            'li',
	                            { className: 'item', key: index },
	                            _react2['default'].createElement('input', { type: 'radio', name: 'checkColor', value: val }),
	                            val
	                        );
	                    })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'flex' },
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn sub', onClick: back.bind(null, props.btns[0].link) },
	                        props.btns[0].text
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn', onClick: this.handleSubmit.bind(this, null, props.btns[1].link) },
	                        props.btns[1].text
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(postUrl, nextLink) {
	            nextPage(nextLink);
	        }
	    }]);

	    return C_question_radio;
	})(_react2['default'].Component);

	//问题类型-复选题

	var C_question_checkbox = (function (_React$Component7) {
	    function C_question_checkbox() {
	        _classCallCheck(this, C_question_checkbox);

	        if (_React$Component7 != null) {
	            _React$Component7.apply(this, arguments);
	        }
	    }

	    _inherits(C_question_checkbox, _React$Component7);

	    _createClass(C_question_checkbox, [{
	        key: 'handleSubmit',
	        value: function handleSubmit() {
	            nextPage('/api/research/suggest');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-check' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'title' },
	                    this.props.title
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    '*注：本题能选多个答案'
	                ),
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    this.props.data.map(function (val, index) {
	                        return _react2['default'].createElement(
	                            'li',
	                            { className: 'item', key: index },
	                            _react2['default'].createElement('input', { type: 'checkbox', name: _this.props.name, value: val }),
	                            val
	                        );
	                    })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'flex' },
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn sub', onClick: back },
	                        '上一题'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn', onClick: this.handleSubmit },
	                        '下一题'
	                    )
	                )
	            );
	        }
	    }]);

	    return C_question_checkbox;
	})(_react2['default'].Component);

	//问题类型,填写内容

	var C_question_ipt = (function (_React$Component8) {
	    function C_question_ipt() {
	        _classCallCheck(this, C_question_ipt);

	        if (_React$Component8 != null) {
	            _React$Component8.apply(this, arguments);
	        }
	    }

	    _inherits(C_question_ipt, _React$Component8);

	    _createClass(C_question_ipt, [{
	        key: 'handleSubmit',
	        value: function handleSubmit() {
	            nextPage('/api/research/question_checkbox');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-input' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 'title' },
	                    this.props.title
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    null,
	                    '请输入:'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'wrap-ipt' },
	                    _react2['default'].createElement('textarea', null)
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'flex' },
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn sub', onClick: back },
	                        '上一题'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn', onClick: this.handleSubmit },
	                        '下一题'
	                    )
	                )
	            );
	        }
	    }]);

	    return C_question_ipt;
	})(_react2['default'].Component);

	//用户建议,

	var C_user_suggest = (function (_React$Component9) {
	    function C_user_suggest() {
	        _classCallCheck(this, C_user_suggest);

	        if (_React$Component9 != null) {
	            _React$Component9.apply(this, arguments);
	        }
	    }

	    _inherits(C_user_suggest, _React$Component9);

	    _createClass(C_user_suggest, [{
	        key: 'handleSubmit',
	        value: function handleSubmit() {
	            nextPage('/api/research/end');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-suggest' },
	                _react2['default'].createElement(
	                    'p',
	                    { className: 't-c' },
	                    '感谢您的参与'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'wrap-ipt' },
	                    _react2['default'].createElement('textarea', { placeholder: '有什么建议留给我们？' })
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'flex' },
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn sub', onClick: back },
	                        '返回'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { className: 'btn', onClick: this.handleSubmit },
	                        '完成'
	                    )
	                )
	            );
	        }
	    }]);

	    return C_user_suggest;
	})(_react2['default'].Component);

	//结束语

	var C_end = (function (_React$Component10) {
	    function C_end() {
	        _classCallCheck(this, C_end);

	        if (_React$Component10 != null) {
	            _React$Component10.apply(this, arguments);
	        }
	    }

	    _inherits(C_end, _React$Component10);

	    _createClass(C_end, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'comm-box-end' },
	                this.props.desc
	            );
	        }
	    }]);

	    return C_end;
	})(_react2['default'].Component);

	var Loading = (function (_React$Component11) {
	    function Loading() {
	        _classCallCheck(this, Loading);

	        if (_React$Component11 != null) {
	            _React$Component11.apply(this, arguments);
	        }
	    }

	    _inherits(Loading, _React$Component11);

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                'Loading'
	            );
	        }
	    }]);

	    return Loading;
	})(_react2['default'].Component);

	var All = (function (_React$Component12) {
	    function All(props) {
	        _classCallCheck(this, All);

	        _get(Object.getPrototypeOf(All.prototype), 'constructor', this).call(this, props);
	        var curLink = location.hash ? location.hash.slice(1) : '/api/research/start';
	        this.state = {
	            ready: false,
	            curLink: curLink
	        };
	    }

	    _inherits(All, _React$Component12);

	    _createClass(All, [{
	        key: 'loadAnsyData',
	        value: function loadAnsyData(url) {
	            this.setState({
	                ready: false
	            });
	            var self = this;
	            new _xhr2['default']({
	                url: url,
	                done: function done(obj) {
	                    if (obj.code == 0) {
	                        if (location.hash.slice(1) === url) {
	                            self.setState({
	                                ready: true,
	                                componentName: obj.componentName,
	                                dataObj: obj.dataObj
	                            });
	                        }
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var self = this;
	            new _xhr2['default']({
	                url: self.state.curLink,
	                done: function done(obj) {
	                    if (obj.code == 0) {
	                        self.setState({
	                            componentName: obj.componentName,
	                            ready: true,
	                            dataObj: obj.dataObj
	                        });
	                    }
	                }
	            });
	            window.addEventListener('hashchange', (function () {
	                var url = location.hash ? location.hash.slice(1) : '/api/research/start';
	                this.loadAnsyData(url);
	            }).bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.ready) {
	                var componentName = this.state.componentName;
	                var dataObj = this.state.dataObj;
	                var component;
	                switch (componentName) {
	                    case 'Start':
	                        component = _react2['default'].createElement(C_start, dataObj);
	                        break;
	                    case 'Information':
	                        component = _react2['default'].createElement(C_info, dataObj);
	                        break;
	                    case 'Question_radio':
	                        component = _react2['default'].createElement(C_question_radio, dataObj);
	                        break;
	                    case 'Question_checkbox':
	                        component = _react2['default'].createElement(C_question_checkbox, dataObj);
	                        break;
	                    case 'Question_input':
	                        component = _react2['default'].createElement(C_question_ipt, dataObj);
	                        break;
	                    case 'Suggest':
	                        component = _react2['default'].createElement(C_user_suggest, null);
	                        break;
	                    case 'End':
	                        component = _react2['default'].createElement(C_end, dataObj);
	                        break;
	                    default:
	                        break;
	                }

	                return _react2['default'].createElement(
	                    'div',
	                    { className: 'comm-box' },
	                    component
	                );
	            }
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(Loading, null)
	            );
	        }
	    }]);

	    return All;
	})(_react2['default'].Component);

	_react2['default'].render(_react2['default'].createElement(All, null), document.getElementById('wrap-app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(2)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(6).core.Object.assign;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(5);
	$def($def.S, 'Object', {assign: __webpack_require__(8)});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(6)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}

	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}

	var $ = module.exports = __webpack_require__(7)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(6)
	  , enumKeys = __webpack_require__(9);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = Object($.assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = $.ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(11)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(14)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(18)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(20);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(6)
	  , $def     = __webpack_require__(5)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(21).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(6)
	  , toString = {}.toString
	  , getNames = $.getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(13)['default'];

	var _classCallCheck = __webpack_require__(16)['default'];

	var _Object$defineProperty = __webpack_require__(14)['default'];

	var _Object$assign = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
		value: true
	});

	var xhr = (function () {
		function xhr(opt) {
			_classCallCheck(this, xhr);

			this.method = 'GET';
			this.aysc = true;
			this.sendData = null;
			if (typeof opt === 'object') {
				_Object$assign(this, opt);
			}

			this.send();
		}

		_createClass(xhr, [{
			key: 'send',
			value: function send() {
				var _xhr = new XMLHttpRequest();
				_xhr.open(this.method, this.url, this.aysc);
				if (this.setHeader) {
					_xhr.setRequestHeader('Content-Type', this.setHeader);
				}

				_xhr.onload = (function () {
					if (_xhr.readyState === 4) {
						if (_xhr.status === 200) {
							var sucData;
							if (_xhr.response) {
								sucData = JSON.parse(_xhr.response);
							}
							this.done(sucData);
						} else {
							var error = new Error('something went wrong');
							reject(error);
						}
					}
				}).bind(this);
				_xhr.onerror = (function (error) {
					console.log(error);
					this.faild(error);
				}).bind(this);
				_xhr.send(this.sendData);
			}
		}, {
			key: 'done',
			value: function done(data) {}
		}, {
			key: 'faild',
			value: function faild() {}
		}]);

		return xhr;
	})();

	exports['default'] = xhr;
	module.exports = exports['default'];

/***/ }
/******/ ]);