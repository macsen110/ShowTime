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

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var baseUi = (function () {
		function baseUi(options) {
			_classCallCheck(this, baseUi);

			this.x = 123;
			if (typeof options === 'object') {
				var arr = Object.keys(options);
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var i = _step.value;

						this[i] = options[i];
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator['return']) {
							_iterator['return']();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}

		_createClass(baseUi, [{
			key: 'open',
			value: function open() {
				console.log('Zindex: ' + this.oops);
				this.mark = this.mark || document.createElement('div');
				document.body.appendChild(this.mark);
			}
		}]);

		return baseUi;
	})();

	var ui_alert = (function (_baseUi) {
		function ui_alert() {
			_classCallCheck(this, ui_alert);

			_get(Object.getPrototypeOf(ui_alert.prototype), 'constructor', this).apply(this, arguments);
		}

		_inherits(ui_alert, _baseUi);

		_createClass(ui_alert, [{
			key: 'child_open',

			// constructor(options) {
			// 	super(options)
			// }
			value: function child_open() {
				console.log('oops ' + this.oops);
			}
		}]);

		return ui_alert;
	})(baseUi);

	var instanceBase = new baseUi();
	instanceBase.open();

	var instanceBase2 = new baseUi();
	instanceBase2.open();

	var instancechild = new ui_alert({ childIndex: 'childOpen', Zindex: 0 });
	instancechild.child_open();
	instancechild.open();

	function ProBase() {
		this.a1 = 0;
	}
	ProBase.prototype = {
		constructor: ProBase,
		//a1: 0,
		a2: function a2() {
			var self = this;
			console.log(this);
			this.a1 += 1;
			//ProBase.prototype.a1 += 1;
			//console.log(ProBase.prototype.a1)
		}
	};

	function Child() {}

	Child.prototype = new ProBase();
	Child.prototype.constructor = Child;

	var child = new Child();

	console.log('a1 ' + child.a1);
	child.a2();
	console.log('a1 ' + child.a1);

	var child2 = new Child();
	console.log('a1 ' + child2.a1);
	child2.a2();

/***/ }
/******/ ]);