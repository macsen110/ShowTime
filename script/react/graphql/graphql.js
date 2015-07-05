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

	var GraphQL = __webpack_require__(1);

	var schema = new GraphQL.GraphQLSchema({
	  query: new GraphQL.GraphQLObjectType({
	    name: 'RootQueryType',
	    fields: {
	      hello: {
	        type: GraphQL.GraphQLString,
	        resolve: function resolve() {
	          return 'world';
	        }
	      }
	    }
	  })
	});

	var query = '{ hello }';

	GraphQL.graphql(schema, query).then(function (result) {

	  // Prints
	  // {
	  //   data: { hello: "world" }
	  // }
	  console.log(result);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// The primary entry point into fulfilling a GraphQL request.
	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _graphql = __webpack_require__(6);

	Object.defineProperty(exports, 'graphql', {
	  enumerable: true,
	  get: function get() {
	    return _graphql.graphql;
	  }
	});

	// Produce a GraphQL type schema.

	var _typeSchema = __webpack_require__(105);

	Object.defineProperty(exports, 'GraphQLSchema', {
	  enumerable: true,
	  get: function get() {
	    return _typeSchema.GraphQLSchema;
	  }
	});

	var _typeDefinition = __webpack_require__(59);

	Object.defineProperty(exports, 'GraphQLScalarType', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLScalarType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInterfaceType', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLInterfaceType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLUnionType', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLUnionType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLEnumType', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLEnumType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLInputObjectType', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLInputObjectType;
	  }
	});
	Object.defineProperty(exports, 'GraphQLList', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLList;
	  }
	});
	Object.defineProperty(exports, 'GraphQLNonNull', {
	  enumerable: true,
	  get: function get() {
	    return _typeDefinition.GraphQLNonNull;
	  }
	});

	var _typeScalars = __webpack_require__(72);

	Object.defineProperty(exports, 'GraphQLInt', {
	  enumerable: true,
	  get: function get() {
	    return _typeScalars.GraphQLInt;
	  }
	});
	Object.defineProperty(exports, 'GraphQLFloat', {
	  enumerable: true,
	  get: function get() {
	    return _typeScalars.GraphQLFloat;
	  }
	});
	Object.defineProperty(exports, 'GraphQLString', {
	  enumerable: true,
	  get: function get() {
	    return _typeScalars.GraphQLString;
	  }
	});
	Object.defineProperty(exports, 'GraphQLBoolean', {
	  enumerable: true,
	  get: function get() {
	    return _typeScalars.GraphQLBoolean;
	  }
	});
	Object.defineProperty(exports, 'GraphQLID', {
	  enumerable: true,
	  get: function get() {
	    return _typeScalars.GraphQLID;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 4 */
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

	var $ = module.exports = __webpack_require__(5)({
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Promise = __webpack_require__(7)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.graphql = graphql;

	/**
	 * The result of a GraphQL parse, validation and execution.
	 *
	 * `data` is the result of a successful execution of the query.
	 * `errors` is included when any errors occurred as a non-empty array.
	 */

	var _languageSource = __webpack_require__(36);

	var _languageParser = __webpack_require__(38);

	var _validator = __webpack_require__(43);

	var _executorExecutor = __webpack_require__(102);

	var _error = __webpack_require__(48);

	/**
	 * This is the primary entry point function for fulfilling GraphQL operations
	 * by parsing, validating, and executing a GraphQL document along side a
	 * GraphQL schema.
	 *
	 * More sophisticated GraphQL servers, such as those which persist queries,
	 * may wish to separate the validation and execution phases to a static time
	 * tooling step, and a server runtime step.
	 */

	function graphql(schema, requestString, rootObject, variableValues, operationName) {
	  return new _Promise(function (resolve) {
	    var source = new _languageSource.Source(requestString || '', 'GraphQL request');
	    var ast = (0, _languageParser.parse)(source);
	    var validationResult = (0, _validator.validateDocument)(schema, ast);
	    if (!validationResult.isValid) {
	      resolve({ errors: validationResult.errors });
	    }
	    resolve((0, _executorExecutor.execute)(schema, rootObject, ast, operationName, variableValues));
	  })['catch'](function (error) {
	    return { errors: [(0, _error.formatError)(error)] };
	  });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(15);
	__webpack_require__(21);
	__webpack_require__(24);
	module.exports = __webpack_require__(4).core.Promise;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(10)
	  , tmp = {};
	tmp[__webpack_require__(11)('toStringTag')] = 'z';
	if(__webpack_require__(4).FW && cof(tmp) != 'z'){
	  __webpack_require__(14)(Object.prototype, 'toString', function toString(){
	    return '[object ' + cof.classof(this) + ']';
	  }, true);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , TAG      = __webpack_require__(11)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4).g
	  , store  = __webpack_require__(12)('wks');
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(13).safe('Symbol.' + name));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $      = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = $.g[SHARED] || ($.g[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
	}
	uid.safe = __webpack_require__(4).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).hide;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(4).set
	  , $at   = __webpack_require__(16)(true)
	  , ITER  = __webpack_require__(13).safe('iter')
	  , $iter = __webpack_require__(17)
	  , step  = $iter.step;

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(19)(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = $at(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(4);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String($.assertDefined(that))
	      , i = $.toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , cof               = __webpack_require__(10)
	  , classof           = cof.classof
	  , assert            = __webpack_require__(18)
	  , assertObject      = assert.obj
	  , SYMBOL_ITERATOR   = __webpack_require__(11)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = __webpack_require__(12)('iterators')
	  , IteratorPrototype = {};
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}

	module.exports = {
	  // Safari has buggy iterators w/o `next`
	  BUGGY: 'keys' in [] && !('next' in [].keys()),
	  Iterators: Iterators,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol;
	    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
	      || SYMBOL_ITERATOR in O
	      || $.has(Iterators, classof(O));
	  },
	  get: function(it){
	    var Symbol = $.g.Symbol
	      , getIter;
	    if(it != undefined){
	      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
	        || it[SYMBOL_ITERATOR]
	        || Iterators[classof(it)];
	    }
	    assert($.isFunction(getIter), it, ' is not iterable!');
	    return assertObject(getIter.call(it));
	  },
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var $def            = __webpack_require__(20)
	  , $redef          = __webpack_require__(14)
	  , $               = __webpack_require__(4)
	  , cof             = __webpack_require__(10)
	  , $iter           = __webpack_require__(17)
	  , SYMBOL_ITERATOR = __webpack_require__(11)('iterator')
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values'
	  , Iterators       = $iter.Iterators;
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iter.create(Constructor, NAME, next);
	  function createMethod(kind){
	    function $$(that){
	      return new Constructor(that, kind);
	    }
	    switch(kind){
	      case KEYS: return function keys(){ return $$(this); };
	      case VALUES: return function values(){ return $$(this); };
	    } return function entries(){ return $$(this); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = $.getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    cof.set(IteratorPrototype, TAG, true);
	    // FF fix
	    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
	  }
	  // Define iterator
	  if($.FW || FORCE)$iter.set(proto, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = $.that;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	var $           = __webpack_require__(4)
	  , Iterators   = __webpack_require__(17).Iterators
	  , ITERATOR    = __webpack_require__(11)('iterator')
	  , ArrayValues = Iterators.Array
	  , NL          = $.g.NodeList
	  , HTC         = $.g.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype;
	if($.FW){
	  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
	  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , setUnscope = __webpack_require__(23)
	  , ITER       = __webpack_require__(13).safe('iter')
	  , $iter      = __webpack_require__(17)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(19)(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(4)
	  , ctx      = __webpack_require__(26)
	  , cof      = __webpack_require__(10)
	  , $def     = __webpack_require__(20)
	  , assert   = __webpack_require__(18)
	  , forOf    = __webpack_require__(27)
	  , setProto = __webpack_require__(29).set
	  , same     = __webpack_require__(25)
	  , species  = __webpack_require__(30)
	  , SPECIES  = __webpack_require__(11)('species')
	  , RECORD   = __webpack_require__(13).safe('record')
	  , PROMISE  = 'Promise'
	  , global   = $.g
	  , process  = global.process
	  , isNode   = cof(process) == 'process'
	  , asap     = process && process.nextTick || __webpack_require__(31).set
	  , P        = global[PROMISE]
	  , isFunction     = $.isFunction
	  , isObject       = $.isObject
	  , assertFunction = assert.fn
	  , assertObject   = assert.obj
	  , Wrapper;

	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = isFunction(P) && isFunction(P.resolve) && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && $.DESC){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(!$.FW && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = assertObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  if(isObject(it))then = it.then;
	  return isFunction(then) ? then : false;
	}
	function notify(record){
	  var chain = record.c;
	  // strange IE + webpack dev server bug - use .call(global)
	  if(chain.length)asap.call(global, function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this
	    , promise;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  setTimeout(function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    asap.call(global, function(){
	      if(isUnhandled(promise = record.p)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(global.console && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      }
	      record.a = undefined;
	    });
	  }, 1);
	  notify(record);
	}
	function $resolve(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	}

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    assertFunction(executor);
	    var record = {
	      p: assert.inst(this, P, PROMISE),       // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false                                // <- handled rejection
	    };
	    $.hide(this, RECORD, record);
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(34)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = assertObject(assertObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   isFunction(onFulfilled) ? onFulfilled : true,
	        fail: isFunction(onRejected)  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = assertFunction(res);
	        react.rej = assertFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	cof.set(P, PROMISE);
	species(P);
	species(Wrapper = $.core[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new (getConstructor(this))(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(35)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var assertFunction = __webpack_require__(18).fn;
	module.exports = function(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var ctx  = __webpack_require__(26)
	  , get  = __webpack_require__(17).get
	  , call = __webpack_require__(28);
	module.exports = function(iterable, entries, fn, that){
	  var iterator = get(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done){
	    if(call(iterator, f, step.value, entries) === false){
	      return call.close(iterator);
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var assertObject = __webpack_require__(18).obj;
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)assertObject(ret.call(iterator));
	}
	function call(iterator, fn, value, entries){
	  try {
	    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	}
	call.close = close;
	module.exports = call;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var $      = __webpack_require__(4)
	  , assert = __webpack_require__(18);
	function check(O, proto){
	  assert.obj(O);
	  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(26)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(4)
	  , SPECIES = __webpack_require__(11)('species');
	module.exports = function(C){
	  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: $.that
	  });
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(4)
	  , ctx    = __webpack_require__(26)
	  , cof    = __webpack_require__(10)
	  , invoke = __webpack_require__(32)
	  , cel    = __webpack_require__(33)
	  , global             = $.g
	  , isFunction         = $.isFunction
	  , html               = $.html
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if($.has(queue, id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!isFunction(setTask) || !isFunction(clearTask)){
	  setTask = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(cof(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(global.addEventListener && isFunction(global.postMessage) && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id, '*');
	    };
	    global.addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , document = $.g.document
	  , isObject = $.isObject
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(14);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(11)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * A representation of source input to GraphQL. The name is optional,
	 * but is mostly useful for clients who store GraphQL documents in
	 * souce files; for example, if the GraphQL input is in a file Foo.graphql,
	 * it might be useful for name to be "Foo.graphql".
	 */
	'use strict';

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var Source = function Source(body, name) {
	  _classCallCheck(this, Source);

	  this.body = body;
	  this.name = name || 'GraphQL';
	};

	exports.Source = Source;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Configuration options to control parser behavior
	 */

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.parse = parse;

	var _source = __webpack_require__(36);

	var _error = __webpack_require__(39);

	var _lexer = __webpack_require__(41);

	var _kinds = __webpack_require__(42);

	/**
	 * Given a GraphQL source, parses it into a Document. Throws on error.
	 */

	function parse(source, options) {
	  var sourceObj = source instanceof _source.Source ? source : new _source.Source(source);
	  var parser = makeParser(sourceObj, options || {});
	  return parseDocument(parser);
	}

	/**
	 * Returns the parser object that is used to store state throughout the
	 * process of parsing.
	 */
	function makeParser(source, options) {
	  var _lexToken = (0, _lexer.lex)(source);
	  return {
	    _lexToken: _lexToken,
	    source: source,
	    options: options,
	    prevEnd: 0,
	    token: _lexToken()
	  };
	}

	/**
	 * Returns a location object, used to identify the place in
	 * the source that created a given parsed object.
	 */
	function loc(parser, start) {
	  if (parser.options.noLocation) {
	    return null;
	  }
	  if (parser.options.noSource) {
	    return {
	      start: start,
	      end: parser.prevEnd
	    };
	  }
	  return {
	    start: start,
	    end: parser.prevEnd,
	    source: parser.source
	  };
	}

	/**
	 * Moves the internal parser object to the next lexed token.
	 */
	function advance(parser) {
	  var prevEnd = parser.token.end;
	  parser.prevEnd = prevEnd;
	  parser.token = parser._lexToken(prevEnd);
	}

	/**
	 * Determines if the next token is of a given kind
	 */
	function peek(parser, kind) {
	  return parser.token.kind === kind;
	}

	/**
	 * If the next token is of the given kind, return true after advancing
	 * the parser. Otherwise, do not change the parser state and return false.
	 */
	function skip(parser, kind) {
	  var match = parser.token.kind === kind;
	  if (match) {
	    advance(parser);
	  }
	  return match;
	}

	/**
	 * If the next token is of the given kind, return that token after advancing
	 * the parser. Otherwise, do not change the parser state and return false.
	 */
	function expect(parser, kind) {
	  var token = parser.token;
	  if (token.kind === kind) {
	    advance(parser);
	    return token;
	  }
	  throw (0, _error.error)(parser.source, token.start, 'Expected ' + (0, _lexer.getTokenKindDesc)(kind) + ', found ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * If the next token is a keyword with the given value, return that token after
	 * advancing the parser. Otherwise, do not change the parser state and return
	 * false.
	 */
	function expectKeyword(parser, value) {
	  var token = parser.token;
	  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
	    advance(parser);
	    return token;
	  }
	  throw (0, _error.error)(parser.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * Helper function for creating an error when an unexpected lexed token
	 * is encountered.
	 */
	function unexpected(parser, atToken) {
	  var token = atToken || parser.token;
	  return (0, _error.error)(parser.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
	}

	/**
	 * Returns a possibly empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function any(parser, openKind, parseFn, closeKind) {
	  expect(parser, openKind);
	  var nodes = [];
	  while (!skip(parser, closeKind)) {
	    nodes.push(parseFn(parser));
	  }
	  return nodes;
	}

	/**
	 * Returns a non-empty list of parse nodes, determined by
	 * the parseFn. This list begins with a lex token of openKind
	 * and ends with a lex token of closeKind. Advances the parser
	 * to the next lex token after the closing token.
	 */
	function many(parser, openKind, parseFn, closeKind) {
	  expect(parser, openKind);
	  var nodes = [parseFn(parser)];
	  while (!skip(parser, closeKind)) {
	    nodes.push(parseFn(parser));
	  }
	  return nodes;
	}

	/**
	 * Converts a name lex token into a name parse node.
	 */
	function parseName(parser) {
	  var token = expect(parser, _lexer.TokenKind.NAME);
	  return {
	    kind: _kinds.NAME,
	    value: token.value,
	    loc: loc(parser, token.start)
	  };
	}

	// Implements the parsing rules in the Document section.

	function parseDocument(parser) {
	  var start = parser.token.start;
	  var definitions = [];
	  do {
	    if (peek(parser, _lexer.TokenKind.BRACE_L)) {
	      definitions.push(parseOperationDefinition(parser));
	    } else if (peek(parser, _lexer.TokenKind.NAME)) {
	      if (parser.token.value === 'query' || parser.token.value === 'mutation') {
	        definitions.push(parseOperationDefinition(parser));
	      } else if (parser.token.value === 'fragment') {
	        definitions.push(parseFragmentDefinition(parser));
	      } else {
	        throw unexpected(parser);
	      }
	    } else {
	      throw unexpected(parser);
	    }
	  } while (!skip(parser, _lexer.TokenKind.EOF));
	  return {
	    kind: _kinds.DOCUMENT,
	    definitions: definitions,
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Operations section.

	function parseOperationDefinition(parser) {
	  var start = parser.token.start;
	  if (peek(parser, _lexer.TokenKind.BRACE_L)) {
	    return {
	      kind: _kinds.OPERATION_DEFINITION,
	      operation: 'query',
	      name: null,
	      variableDefinitions: null,
	      directives: [],
	      selectionSet: parseSelectionSet(parser),
	      loc: loc(parser, start)
	    };
	  }
	  var operationToken = expect(parser, _lexer.TokenKind.NAME);
	  var operation = operationToken.value;
	  return {
	    kind: _kinds.OPERATION_DEFINITION,
	    operation: operation,
	    name: parseName(parser),
	    variableDefinitions: parseVariableDefinitions(parser),
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	function parseVariableDefinitions(parser) {
	  return peek(parser, _lexer.TokenKind.PAREN_L) ? many(parser, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
	}

	function parseVariableDefinition(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.VARIABLE_DEFINITION,
	    variable: parseVariable(parser),
	    type: (expect(parser, _lexer.TokenKind.COLON), parseType(parser)),
	    defaultValue: skip(parser, _lexer.TokenKind.EQUALS) ? parseValue(parser, true) : null,
	    loc: loc(parser, start)
	  };
	}

	function parseVariable(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.DOLLAR);
	  return {
	    kind: _kinds.VARIABLE,
	    name: parseName(parser),
	    loc: loc(parser, start)
	  };
	}

	function parseSelectionSet(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.SELECTION_SET,
	    selections: many(parser, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
	    loc: loc(parser, start)
	  };
	}

	function parseSelection(parser) {
	  return peek(parser, _lexer.TokenKind.SPREAD) ? parseFragment(parser) : parseField(parser);
	}

	/**
	 * Corresponds to both Field and Alias in the spec
	 */
	function parseField(parser) {
	  var start = parser.token.start;

	  var nameOrAlias = parseName(parser);
	  var alias;
	  var name;
	  if (skip(parser, _lexer.TokenKind.COLON)) {
	    alias = nameOrAlias;
	    name = parseName(parser);
	  } else {
	    alias = null;
	    name = nameOrAlias;
	  }

	  return {
	    kind: _kinds.FIELD,
	    alias: alias,
	    name: name,
	    arguments: parseArguments(parser),
	    directives: parseDirectives(parser),
	    selectionSet: peek(parser, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(parser) : null,
	    loc: loc(parser, start)
	  };
	}

	function parseArguments(parser) {
	  return peek(parser, _lexer.TokenKind.PAREN_L) ? many(parser, _lexer.TokenKind.PAREN_L, parseArgument, _lexer.TokenKind.PAREN_R) : [];
	}

	function parseArgument(parser) {
	  var start = parser.token.start;
	  return {
	    kind: _kinds.ARGUMENT,
	    name: parseName(parser),
	    value: (expect(parser, _lexer.TokenKind.COLON), parseValue(parser, false)),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Fragments section.

	/**
	 * Corresponds to both FragmentSpread and InlineFragment in the spec
	 */
	function parseFragment(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.SPREAD);
	  if (parser.token.value === 'on') {
	    advance(parser);
	    return {
	      kind: _kinds.INLINE_FRAGMENT,
	      typeCondition: parseName(parser),
	      directives: parseDirectives(parser),
	      selectionSet: parseSelectionSet(parser),
	      loc: loc(parser, start)
	    };
	  }
	  return {
	    kind: _kinds.FRAGMENT_SPREAD,
	    name: parseName(parser),
	    directives: parseDirectives(parser),
	    loc: loc(parser, start)
	  };
	}

	function parseFragmentDefinition(parser) {
	  var start = parser.token.start;
	  expectKeyword(parser, 'fragment');
	  return {
	    kind: _kinds.FRAGMENT_DEFINITION,
	    name: parseName(parser),
	    typeCondition: (expectKeyword(parser, 'on'), parseName(parser)),
	    directives: parseDirectives(parser),
	    selectionSet: parseSelectionSet(parser),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Values section.

	function parseVariableValue(parser) {
	  return parseValue(parser, false);
	}

	function parseConstValue(parser) {
	  return parseValue(parser, true);
	}

	function parseValue(parser, isConst) {
	  var token = parser.token;
	  switch (token.kind) {
	    case _lexer.TokenKind.BRACKET_L:
	      return parseArray(parser, isConst);
	    case _lexer.TokenKind.BRACE_L:
	      return parseObject(parser, isConst);
	    case _lexer.TokenKind.INT:
	      advance(parser);
	      return {
	        kind: _kinds.INT,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.FLOAT:
	      advance(parser);
	      return {
	        kind: _kinds.FLOAT,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.STRING:
	      advance(parser);
	      return {
	        kind: _kinds.STRING,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.NAME:
	      advance(parser);
	      switch (token.value) {
	        case 'true':
	        case 'false':
	          return {
	            kind: _kinds.BOOLEAN,
	            value: token.value === 'true',
	            loc: loc(parser, token.start)
	          };
	      }
	      return {
	        kind: _kinds.ENUM,
	        value: token.value,
	        loc: loc(parser, token.start)
	      };
	    case _lexer.TokenKind.DOLLAR:
	      if (!isConst) {
	        return parseVariable(parser);
	      }
	      break;
	  }
	  throw unexpected(parser);
	}

	function parseArray(parser, isConst) {
	  var start = parser.token.start;
	  var item = isConst ? parseConstValue : parseVariableValue;
	  return {
	    kind: _kinds.ARRAY,
	    values: any(parser, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
	    loc: loc(parser, start)
	  };
	}

	function parseObject(parser, isConst) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.BRACE_L);
	  var fieldNames = {};
	  var fields = [];
	  while (!skip(parser, _lexer.TokenKind.BRACE_R)) {
	    fields.push(parseObjectField(parser, isConst, fieldNames));
	  }
	  return {
	    kind: _kinds.OBJECT,
	    fields: fields,
	    loc: loc(parser, start)
	  };
	}

	function parseObjectField(parser, isConst, fieldNames) {
	  var start = parser.token.start;
	  var name = parseName(parser);
	  if (fieldNames.hasOwnProperty(name.value)) {
	    throw (0, _error.error)(parser.source, start, 'Duplicate input object field ' + name.value + '.');
	  }
	  fieldNames[name.value] = true;
	  return {
	    kind: _kinds.OBJECT_FIELD,
	    name: name,
	    value: (expect(parser, _lexer.TokenKind.COLON), parseValue(parser, isConst)),
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Directives section.

	function parseDirectives(parser) {
	  var directives = [];
	  while (peek(parser, _lexer.TokenKind.AT)) {
	    directives.push(parseDirective(parser));
	  }
	  return directives;
	}

	function parseDirective(parser) {
	  var start = parser.token.start;
	  expect(parser, _lexer.TokenKind.AT);
	  return {
	    kind: _kinds.DIRECTIVE,
	    name: parseName(parser),
	    value: skip(parser, _lexer.TokenKind.COLON) ? parseValue(parser, false) : null,
	    loc: loc(parser, start)
	  };
	}

	// Implements the parsing rules in the Types section.

	/**
	 * Handles the Type: TypeName, ListType, and NonNullType parsing rules.
	 */
	function parseType(parser) {
	  var start = parser.token.start;
	  var type;
	  if (skip(parser, _lexer.TokenKind.BRACKET_L)) {
	    type = parseType(parser);
	    expect(parser, _lexer.TokenKind.BRACKET_R);
	    type = {
	      kind: _kinds.LIST_TYPE,
	      type: type,
	      loc: loc(parser, start)
	    };
	  } else {
	    type = parseName(parser);
	  }
	  if (skip(parser, _lexer.TokenKind.BANG)) {
	    return {
	      kind: _kinds.NON_NULL_TYPE,
	      type: type,
	      loc: loc(parser, start)
	    };
	  }
	  return type;
	}

	/**
	 * By default, the parser creates AST nodes that know the location
	 * in the source that they correspond to. This configuration flag
	 * disables that behavior for performance or testing.
	 */

	/**
	 * By default, the parser creates AST nodes that contain a reference
	 * to the source that they were created from. This configuration flag
	 * disables that behavior for performance or testing.
	 */

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.error = error;

	var _location = __webpack_require__(40);

	function error(source, position, description) {
	  var location = (0, _location.getLocation)(source, position);
	  var syntaxError = new Error('Syntax Error ' + source.name + ' (' + location.line + ':' + location.column + ') ' + description + '\n\n' + highlightSourceAtLocation(source, location));
	  syntaxError.source = source;
	  syntaxError.position = position;
	  syntaxError.location = location;
	  return syntaxError;
	}

	function highlightSourceAtLocation(source, location) {
	  var line = location.line;
	  var prevLineNum = (line - 1).toString();
	  var lineNum = line.toString();
	  var nextLineNum = (line + 1).toString();
	  var padLen = nextLineNum.length;
	  var lines = source.body.split(/\r\n|[\n\r\u2028\u2029]/g);
	  return (line >= 2 ? lpad(padLen, prevLineNum) + ': ' + lines[line - 2] + '\n' : '') + lpad(padLen, lineNum) + ': ' + lines[line - 1] + '\n' + Array(2 + padLen + location.column).join(' ') + '^\n' + (line < lines.length ? lpad(padLen, nextLineNum) + ': ' + lines[line] + '\n' : '');
	}

	function lpad(len, str) {
	  return Array(len - str.length + 1).join(' ') + str;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Represents a location in a Source.
	 */

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.getLocation = getLocation;

	/**
	 * Takes a Source and a UTF-8 character offset, and returns the corresponding
	 * line and column as a SourceLocation.
	 */

	function getLocation(source, position) {
	  var line = 1;
	  var column = position + 1;
	  var lineRegexp = /\r\n|[\n\r\u2028\u2029]/g;
	  var match;
	  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
	    line += 1;
	    column = position + 1 - (match.index + match[0].length);
	  }
	  return { line: line, column: column };
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow /
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * A representation of a lexed Token. Value is optional, is it is
	 * not needed for punctuators like BANG or PAREN_L.
	 */

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.lex = lex;
	exports.getTokenDesc = getTokenDesc;
	exports.getTokenKindDesc = getTokenKindDesc;

	var _error = __webpack_require__(39);

	/**
	 * Given a Source object, this returns a Lexer for that source.
	 * A Lexer is a function that acts like a generator in that every time
	 * it is called, it returns the next token in the Source. Assuming the
	 * source lexes, the final Token omitted by the lexer will be of kind
	 * EOF, after which the lexer will repeatedly return EOF tokens whenever
	 * called.
	 *
	 * The argument to the lexer function is optional, and can be used to
	 * rewind or fast forward the lexer to a new position in the source.
	 */

	function lex(source) {
	  var prevPosition = 0;
	  return function nextToken(resetPosition) {
	    var token = readToken(source, resetPosition === undefined ? prevPosition : resetPosition);
	    prevPosition = token.end;
	    return token;
	  };
	}

	/**
	 * An enum describing the different kinds of tokens that the lexer omits.
	 */
	var TokenKind = {
	  EOF: 1,
	  BANG: 2,
	  DOLLAR: 3,
	  PAREN_L: 4,
	  PAREN_R: 5,
	  SPREAD: 6,
	  COLON: 7,
	  EQUALS: 8,
	  AT: 9,
	  BRACKET_L: 10,
	  BRACKET_R: 11,
	  BRACE_L: 12,
	  PIPE: 13,
	  BRACE_R: 14,
	  NAME: 15,
	  VARIABLE: 16,
	  INT: 17,
	  FLOAT: 18,
	  STRING: 19
	};

	exports.TokenKind = TokenKind;
	/**
	 * A helper function to describe a token as a string for debugging
	 */

	function getTokenDesc(token) {
	  return token.value ? '' + getTokenKindDesc(token.kind) + ' "' + token.value + '"' : getTokenKindDesc(token.kind);
	}

	/**
	 * A helper function to describe a token kind as a string for debugging
	 */

	function getTokenKindDesc(kind) {
	  return tokenDescription[kind];
	}

	var tokenDescription = {};
	tokenDescription[TokenKind.EOF] = 'EOF';
	tokenDescription[TokenKind.BANG] = '!';
	tokenDescription[TokenKind.DOLLAR] = '$';
	tokenDescription[TokenKind.PAREN_L] = '(';
	tokenDescription[TokenKind.PAREN_R] = ')';
	tokenDescription[TokenKind.SPREAD] = '...';
	tokenDescription[TokenKind.COLON] = ':';
	tokenDescription[TokenKind.EQUALS] = '=';
	tokenDescription[TokenKind.AT] = '@';
	tokenDescription[TokenKind.BRACKET_L] = '[';
	tokenDescription[TokenKind.BRACKET_R] = ']';
	tokenDescription[TokenKind.BRACE_L] = '{';
	tokenDescription[TokenKind.PIPE] = '|';
	tokenDescription[TokenKind.BRACE_R] = '}';
	tokenDescription[TokenKind.NAME] = 'Name';
	tokenDescription[TokenKind.VARIABLE] = 'Variable';
	tokenDescription[TokenKind.INT] = 'Int';
	tokenDescription[TokenKind.FLOAT] = 'Float';
	tokenDescription[TokenKind.STRING] = 'String';

	var charCodeAt = String.prototype.charCodeAt;
	var fromCharCode = String.fromCharCode;
	var slice = String.prototype.slice;

	/**
	 * Helper function for constructing the Token object.
	 */
	function makeToken(kind, start, end, value) {
	  return { kind: kind, start: start, end: end, value: value };
	}

	/**
	 * Gets the next token from the source starting at the given position.
	 *
	 * This skips over whitespace and comments until it finds the next lexable
	 * token, then lexes punctuators immediately or calls the appropriate helper
	 * fucntion for more complicated tokens.
	 */
	function readToken(source, fromPosition) {
	  var body = source.body;
	  var bodyLength = body.length;

	  var position = positionAfterWhitespace(body, fromPosition);
	  var code = charCodeAt.call(body, position);

	  if (position >= bodyLength) {
	    return makeToken(TokenKind.EOF, position, position);
	  }

	  switch (code) {
	    // !
	    case 33:
	      return makeToken(TokenKind.BANG, position, position + 1);
	    // $
	    case 36:
	      return makeToken(TokenKind.DOLLAR, position, position + 1);
	    // (
	    case 40:
	      return makeToken(TokenKind.PAREN_L, position, position + 1);
	    // )
	    case 41:
	      return makeToken(TokenKind.PAREN_R, position, position + 1);
	    // .
	    case 46:
	      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
	        return makeToken(TokenKind.SPREAD, position, position + 3);
	      }
	      break;
	    // :
	    case 58:
	      return makeToken(TokenKind.COLON, position, position + 1);
	    // =
	    case 61:
	      return makeToken(TokenKind.EQUALS, position, position + 1);
	    // @
	    case 64:
	      return makeToken(TokenKind.AT, position, position + 1);
	    // [
	    case 91:
	      return makeToken(TokenKind.BRACKET_L, position, position + 1);
	    // ]
	    case 93:
	      return makeToken(TokenKind.BRACKET_R, position, position + 1);
	    // {
	    case 123:
	      return makeToken(TokenKind.BRACE_L, position, position + 1);
	    // |
	    case 124:
	      return makeToken(TokenKind.PIPE, position, position + 1);
	    // }
	    case 125:
	      return makeToken(TokenKind.BRACE_R, position, position + 1);
	    // A-Z
	    case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
	    case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
	    case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
	    case 89:case 90:
	    // _
	    case 95:
	    // a-z
	    case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
	    case 105:case 106:case 107:case 108:case 109:case 110:case 111:
	    case 112:case 113:case 114:case 115:case 116:case 117:case 118:
	    case 119:case 120:case 121:case 122:
	      return readName(source, position);
	    // -
	    case 45:
	    // 0-9
	    case 48:case 49:case 50:case 51:case 52:
	    case 53:case 54:case 55:case 56:case 57:
	      return readNumber(source, position, code);
	    // "
	    case 34:
	      return readString(source, position);
	  }

	  throw (0, _error.error)(source, position, 'Unexpected character "' + fromCharCode(code) + '"');
	}

	/**
	 * Reads from body starting at startPosition until it finds a non-whitespace
	 * or commented character, then returns the position of that character for
	 * lexing.
	 */
	function positionAfterWhitespace(body, startPosition) {
	  var bodyLength = body.length;
	  var position = startPosition;
	  while (position < bodyLength) {
	    var code = charCodeAt.call(body, position);
	    // Skip whitespace
	    if (code === 32 || // space
	    code === 44 || // comma
	    code === 160 || // '\xa0'
	    code === 8232 || // line separator
	    code === 8233 || // paragraph separator
	    code > 8 && code < 14 // whitespace
	    ) {
	      ++position;
	      // Skip comments
	    } else if (code === 35) {
	      // #
	      ++position;
	      while (position < bodyLength && (code = charCodeAt.call(body, position)) && code !== 10 && code !== 13 && code !== 8232 && code !== 8233) {
	        ++position;
	      }
	    } else {
	      break;
	    }
	  }
	  return position;
	}

	/**
	 * Reads a number token from the source file, either a float
	 * or an int depending on whether a decimal point appears.
	 *
	 * Int:   -?(0|[1-9][0-9]*)
	 * Float: -?(0|[1-9][0-9]*)\.[0-9]+(e-?[0-9]+)?
	 */
	function readNumber(source, start, firstCode) {
	  var code = firstCode;
	  var body = source.body;
	  var position = start;
	  var isFloat = false;

	  if (code === 45) {
	    // -
	    code = charCodeAt.call(body, ++position);
	  }

	  if (code === 48) {
	    // 0
	    code = charCodeAt.call(body, ++position);
	  } else if (code >= 49 && code <= 57) {
	    // 1 - 9
	    do {
	      code = charCodeAt.call(body, ++position);
	    } while (code >= 48 && code <= 57); // 0 - 9
	  } else {
	    throw (0, _error.error)(source, position, 'Invalid number');
	  }

	  if (code === 46) {
	    // .
	    isFloat = true;

	    code = charCodeAt.call(body, ++position);
	    if (code >= 48 && code <= 57) {
	      // 0 - 9
	      do {
	        code = charCodeAt.call(body, ++position);
	      } while (code >= 48 && code <= 57); // 0 - 9
	    } else {
	      throw (0, _error.error)(source, position, 'Invalid number');
	    }

	    if (code === 101) {
	      // e
	      code = charCodeAt.call(body, ++position);
	      if (code === 45) {
	        // -
	        code = charCodeAt.call(body, ++position);
	      }
	      if (code >= 48 && code <= 57) {
	        // 0 - 9
	        do {
	          code = charCodeAt.call(body, ++position);
	        } while (code >= 48 && code <= 57); // 0 - 9
	      } else {
	        throw (0, _error.error)(source, position, 'Invalid number');
	      }
	    }
	  }

	  return makeToken(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, slice.call(body, start, position));
	}

	/**
	 * Reads a string token from the source file.
	 *
	 * "([^"\\\u000A\u000D\u2028\u2029]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
	 */
	function readString(source, start) {
	  var body = source.body;
	  var position = start + 1;
	  var chunkStart = position;
	  var code;
	  var value = '';

	  while (position < body.length && (code = charCodeAt.call(body, position)) && code !== 34 && code !== 10 && code !== 13 && code !== 8232 && code !== 8233) {
	    ++position;
	    if (code === 92) {
	      // \
	      value += slice.call(body, chunkStart, position - 1);
	      code = charCodeAt.call(body, position);
	      switch (code) {
	        case 34:
	          value += '"';break;
	        case 47:
	          value += '/';break;
	        case 92:
	          value += '\\';break;
	        case 98:
	          value += '\b';break;
	        case 102:
	          value += '\f';break;
	        case 110:
	          value += '\n';break;
	        case 114:
	          value += '\r';break;
	        case 116:
	          value += '\t';break;
	        case 117:
	          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
	          if (charCode < 0) {
	            throw (0, _error.error)(source, position, 'Bad character escape sequence');
	          }
	          value += fromCharCode(charCode);
	          position += 4;
	          break;
	        default:
	          throw (0, _error.error)(source, position, 'Bad character escape sequence');
	      }
	      ++position;
	      chunkStart = position;
	    }
	  }

	  if (code !== 34) {
	    throw (0, _error.error)(source, position, 'Unterminated string');
	  }

	  value += slice.call(body, chunkStart, position);
	  return makeToken(TokenKind.STRING, start, position + 1, value);
	}

	/**
	 * Converts four hexidecimal chars to the integer that the
	 * string represents. For example, uniCharCode('0','0','0','f')
	 * will return 15, and uniCharCode('0','0','f','f') returns 255.
	 *
	 * Returns a negative number on error, if a char was invalid.
	 *
	 * This is implemented by noting that char2hex() returns -1 on error,
	 * which means the result of ORing the char2hex() will also be negative.
	 */
	function uniCharCode(a, b, c, d) {
	  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
	}

	/**
	 * Converts a hex character to its integer value.
	 * '0' becomes 0, '9' becomes 9
	 * 'A' becomes 10, 'F' becomes 15
	 * 'a' becomes 10, 'f' becomes 15
	 *
	 * Returns -1 on error.
	 */
	function char2hex(a) {
	  return a >= 48 && a <= 57 ? a - 48 : // 0-9
	  a >= 65 && a <= 70 ? a - 55 : // A-F
	  a >= 97 && a <= 102 ? a - 87 : // a-f
	  -1;
	}

	/**
	 * Reads an alphanumeric + underscore name from the source.
	 *
	 * [_A-Za-z][_0-9A-Za-z]*
	 */
	function readName(source, position) {
	  var body = source.body;
	  var bodyLength = body.length;
	  var end = position + 1;
	  var code;
	  while (end !== bodyLength && (code = charCodeAt.call(body, end)) && (code === 95 || // _
	  code >= 48 && code <= 57 || // 0-9
	  code >= 65 && code <= 90 || // A-Z
	  code >= 97 && code <= 122 // a-z
	  )) {
	    ++end;
	  }
	  return makeToken(TokenKind.NAME, position, end, slice.call(body, position, end));
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Name

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var NAME = 'Name';

	exports.NAME = NAME;
	// Document

	var DOCUMENT = 'Document';
	exports.DOCUMENT = DOCUMENT;
	var OPERATION_DEFINITION = 'OperationDefinition';
	exports.OPERATION_DEFINITION = OPERATION_DEFINITION;
	var VARIABLE_DEFINITION = 'VariableDefinition';
	exports.VARIABLE_DEFINITION = VARIABLE_DEFINITION;
	var VARIABLE = 'Variable';
	exports.VARIABLE = VARIABLE;
	var SELECTION_SET = 'SelectionSet';
	exports.SELECTION_SET = SELECTION_SET;
	var FIELD = 'Field';
	exports.FIELD = FIELD;
	var ARGUMENT = 'Argument';

	exports.ARGUMENT = ARGUMENT;
	// Fragments

	var FRAGMENT_SPREAD = 'FragmentSpread';
	exports.FRAGMENT_SPREAD = FRAGMENT_SPREAD;
	var INLINE_FRAGMENT = 'InlineFragment';
	exports.INLINE_FRAGMENT = INLINE_FRAGMENT;
	var FRAGMENT_DEFINITION = 'FragmentDefinition';

	exports.FRAGMENT_DEFINITION = FRAGMENT_DEFINITION;
	// Values

	var INT = 'IntValue';
	exports.INT = INT;
	var FLOAT = 'FloatValue';
	exports.FLOAT = FLOAT;
	var STRING = 'StringValue';
	exports.STRING = STRING;
	var BOOLEAN = 'BooleanValue';
	exports.BOOLEAN = BOOLEAN;
	var ENUM = 'EnumValue';
	exports.ENUM = ENUM;
	var ARRAY = 'ArrayValue';
	exports.ARRAY = ARRAY;
	var OBJECT = 'ObjectValue';
	exports.OBJECT = OBJECT;
	var OBJECT_FIELD = 'ObjectField';

	exports.OBJECT_FIELD = OBJECT_FIELD;
	// Directives

	var DIRECTIVE = 'Directive';

	exports.DIRECTIVE = DIRECTIVE;
	// Types

	var TYPE = 'Type';
	exports.TYPE = TYPE;
	var LIST_TYPE = 'ListType';
	exports.LIST_TYPE = LIST_TYPE;
	var NON_NULL_TYPE = 'NonNullType';
	exports.NON_NULL_TYPE = NON_NULL_TYPE;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * The result of validation. `isValid` is true if validation is successful.
	 * `errors` is null if no errors occurred, and is a non-empty array if any
	 * validation errors occurred.
	 */

	var _createClass = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	var _interopRequireWildcard = __webpack_require__(46)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.validateDocument = validateDocument;

	var _utilsInvariant = __webpack_require__(47);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var _error = __webpack_require__(48);

	var _languageVisitor = __webpack_require__(51);

	var _languageKinds = __webpack_require__(42);

	var Kind = _interopRequireWildcard(_languageKinds);

	var _utilsTypeInfo = __webpack_require__(58);

	var _utilsTypeInfo2 = _interopRequireDefault(_utilsTypeInfo);

	var _allRules = __webpack_require__(75);

	/**
	 * Implements the "Evaluating requests" section of the spec.
	 *
	 * Rules is a list of function which return visitors
	 * (see the language/visitor API)
	 *
	 * Visitors are expected to return Error objects when invalid.
	 *
	 * Visitors can also supply `visitSpreadFragments: true` which will alter the
	 * behavior of the visitor to skip over top level defined fragments, and instead
	 * visit those fragments at every point a spread is encountered.
	 */

	function validateDocument(schema, ast, rules) {
	  (0, _utilsInvariant2['default'])(schema, 'Must provide schema');
	  (0, _utilsInvariant2['default'])(ast, 'Must provide document');
	  var errors = visitUsingRules(schema, ast, rules || _allRules.allRules);
	  var isValid = errors.length === 0;
	  return { isValid: isValid, errors: isValid ? null : errors.map(_error.formatError) };
	}

	/**
	 * This uses a specialized visitor which runs multiple visitors in parallel,
	 * while maintaining the visitor skip and break API.
	 */
	function visitUsingRules(schema, documentAST, rules) {
	  var typeInfo = new _utilsTypeInfo2['default'](schema);
	  var context = new ValidationContext(schema, documentAST, typeInfo);
	  var errors = [];

	  function visitInstances(ast, instances) {
	    var skipUntil = Array(instances.length);
	    var skipCount = 0;
	    (0, _languageVisitor.visit)(ast, {
	      enter: function enter(node, key) {
	        typeInfo.enter(node);
	        for (var i = 0; i < instances.length; i++) {
	          // Do not visit this instance if it returned false for a previous node
	          if (skipUntil[i]) {
	            continue;
	          }

	          var result;

	          // Do not visit top level fragment definitions if this instance will
	          // visit those fragments inline because it
	          // provided `visitSpreadFragments`.
	          if (node.kind === Kind.FRAGMENT_DEFINITION && key !== undefined && instances[i].visitSpreadFragments) {
	            result = false;
	          } else {
	            var enter = (0, _languageVisitor.getVisitFn)(instances[i], false, node.kind);
	            result = enter ? enter.apply(instances[i], arguments) : undefined;
	          }

	          if (result === false) {
	            skipUntil[i] = node;
	            skipCount++;
	            // If all instances are being skipped over, skip deeper traveral
	            if (skipCount === instances.length) {
	              for (var k = 0; k < instances.length; k++) {
	                if (skipUntil[k] === node) {
	                  skipUntil[k] = null;
	                  skipCount--;
	                }
	              }
	              return false;
	            }
	          } else if (result === _languageVisitor.BREAK) {
	            instances[i] = null;
	          } else if (result && isError(result)) {
	            append(errors, result);
	            for (var j = i - 1; j >= 0; j--) {
	              var leaveFn = (0, _languageVisitor.getVisitFn)(instances[j], true, node.kind);
	              if (leaveFn) {
	                result = leaveFn.apply(instances[j], arguments);
	                if (result === _languageVisitor.BREAK) {
	                  instances[j] = null;
	                } else if (isError(result)) {
	                  append(errors, result);
	                } else if (result !== undefined) {
	                  throw new Error('Validator cannot edit document.');
	                }
	              }
	            }
	            typeInfo.leave(node);
	            return false;
	          } else if (result !== undefined) {
	            throw new Error('Validator cannot edit document.');
	          }
	        }

	        // If any validation instances provide the flag `visitSpreadFragments`
	        // and this node is a fragment spread, validate the fragment from
	        // this point.
	        if (node.kind === Kind.FRAGMENT_SPREAD) {
	          var fragment = context.getFragment(node.name.value);
	          if (fragment) {
	            var fragVisitingInstances = instances.filter(function (inst, idx) {
	              return inst.visitSpreadFragments && !skipUntil[idx];
	            });
	            if (fragVisitingInstances.length > 0) {
	              visitInstances(fragment, fragVisitingInstances);
	            }
	          }
	        }
	      },
	      leave: function leave(node) {
	        for (var i = instances.length - 1; i >= 0; i--) {
	          if (skipUntil[i]) {
	            if (skipUntil[i] === node) {
	              skipUntil[i] = null;
	              skipCount--;
	            }
	            continue;
	          }
	          var leaveFn = (0, _languageVisitor.getVisitFn)(instances[i], true, node.kind);
	          if (leaveFn) {
	            var result = leaveFn.apply(instances[i], arguments);
	            if (result === _languageVisitor.BREAK) {
	              instances[i] = null;
	            } else if (isError(result)) {
	              append(errors, result);
	            } else if (result !== undefined) {
	              throw new Error('Validator cannot edit document.');
	            }
	          }
	        }
	        typeInfo.leave(node);
	      }
	    });
	  }

	  // Visit the whole document with instances of all provided rules.
	  var allRuleInstances = rules.map(function (rule) {
	    return rule(context);
	  });
	  visitInstances(documentAST, allRuleInstances);

	  return errors;
	}

	function isError(value) {
	  return Array.isArray(value) ? value.every(function (item) {
	    return item instanceof Error;
	  }) : value instanceof Error;
	}

	function append(arr, items) {
	  if (Array.isArray(items)) {
	    arr.push.apply(arr, items);
	  } else {
	    arr.push(items);
	  }
	}

	/**
	 * An instance of this class is passed as the "this" context to all validators,
	 * allowing access to commonly useful contextual information from within a
	 * validation rule.
	 */

	var ValidationContext = (function () {
	  function ValidationContext(schema, ast, typeInfo) {
	    _classCallCheck(this, ValidationContext);

	    this._schema = schema;
	    this._ast = ast;
	    this._typeInfo = typeInfo;
	  }

	  _createClass(ValidationContext, [{
	    key: 'getSchema',
	    value: function getSchema() {
	      return this._schema;
	    }
	  }, {
	    key: 'getDocument',
	    value: function getDocument() {
	      return this._ast;
	    }
	  }, {
	    key: 'getFragment',
	    value: function getFragment(name) {
	      var fragments = this._fragments;
	      if (!fragments) {
	        this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
	          if (statement.kind === Kind.FRAGMENT_DEFINITION) {
	            frags[statement.name.value] = statement;
	          }
	          return frags;
	        }, {});
	      }
	      return fragments[name];
	    }
	  }, {
	    key: 'getType',
	    value: function getType() {
	      return this._typeInfo.getType();
	    }
	  }, {
	    key: 'getParentType',
	    value: function getParentType() {
	      return this._typeInfo.getParentType();
	    }
	  }, {
	    key: 'getInputType',
	    value: function getInputType() {
	      return this._typeInfo.getInputType();
	    }
	  }, {
	    key: 'getFieldDef',
	    value: function getFieldDef() {
	      return this._typeInfo.getFieldDef();
	    }
	  }]);

	  return ValidationContext;
	})();

	exports.ValidationContext = ValidationContext;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(2)["default"];

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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	"use strict";

	var _Object$defineProperty = __webpack_require__(2)["default"];

	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = invariant;

	function invariant(condition, message) {
	  if (!condition) {
	    throw new Error(message);
	  }
	}

	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.formatError = formatError;

	var _utilsInvariant = __webpack_require__(47);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var _language = __webpack_require__(49);

	var GraphQLError = function GraphQLError(message,
	// A flow bug keeps us from declaring nodes as an array of Node
	nodes, stack) {
	  _classCallCheck(this, GraphQLError);

	  this.message = message;
	  this.stack = stack || message;
	  if (nodes) {
	    this.nodes = nodes;
	    var positions = nodes.map(function (node) {
	      return node.loc && node.loc.start;
	    });
	    if (positions.some(function (p) {
	      return !!p;
	    })) {
	      this.positions = positions;
	      var loc = nodes[0].loc;
	      var source = loc && loc.source;
	      if (source) {
	        this.locations = positions.map(function (pos) {
	          return (0, _language.getLocation)(source, pos);
	        });
	        this.source = source;
	      }
	    }
	  }
	};

	exports.GraphQLError = GraphQLError;

	GraphQLError.prototype = Error.prototype;

	function formatError(error) {
	  (0, _utilsInvariant2['default'])(error, 'Received null or undefined error.');
	  if (error.locations) {
	    return {
	      message: error.message || '' + error,
	      locations: error.locations || null
	    };
	  }
	  return {
	    message: error.message || '' + error
	  };
	}

	/*Node*/

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireWildcard = __webpack_require__(46)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _kinds = __webpack_require__(42);

	var Kind = _interopRequireWildcard(_kinds);

	var _location = __webpack_require__(40);

	Object.defineProperty(exports, 'getLocation', {
	  enumerable: true,
	  get: function get() {
	    return _location.getLocation;
	  }
	});
	exports.Kind = Kind;

	var _lexer = __webpack_require__(41);

	Object.defineProperty(exports, 'lex', {
	  enumerable: true,
	  get: function get() {
	    return _lexer.lex;
	  }
	});

	var _parser = __webpack_require__(38);

	Object.defineProperty(exports, 'parse', {
	  enumerable: true,
	  get: function get() {
	    return _parser.parse;
	  }
	});

	var _printer = __webpack_require__(50);

	Object.defineProperty(exports, 'print', {
	  enumerable: true,
	  get: function get() {
	    return _printer.print;
	  }
	});

	var _source = __webpack_require__(36);

	Object.defineProperty(exports, 'Source', {
	  enumerable: true,
	  get: function get() {
	    return _source.Source;
	  }
	});

	var _visitor = __webpack_require__(51);

	Object.defineProperty(exports, 'visit', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.visit;
	  }
	});
	Object.defineProperty(exports, 'BREAK', {
	  enumerable: true,
	  get: function get() {
	    return _visitor.BREAK;
	  }
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.print = print;

	var _visitor = __webpack_require__(51);

	/**
	 * Converts an AST into a string, using one set of reasonable
	 * formatting rules.
	 */

	function print(ast) {
	  return (0, _visitor.visit)(ast, {
	    leave: {
	      Name: function Name(node) {
	        return node.value;
	      },
	      Variable: function Variable(node) {
	        return '$' + node.name;
	      },

	      // Document

	      Document: function Document(node) {
	        return join(node.definitions, '\n\n') + '\n';
	      },
	      OperationDefinition: function OperationDefinition(node) {
	        var op = node.operation;
	        var name = node.name;
	        var defs = manyList('(', node.variableDefinitions, ', ', ')');
	        var directives = join(node.directives, ' ');
	        var selectionSet = node.selectionSet;
	        return !name ? selectionSet : join([op, join([name, defs]), directives, selectionSet], ' ');
	      },
	      VariableDefinition: function VariableDefinition(node) {
	        return join([node.variable + ': ' + node.type, node.defaultValue], ' = ');
	      },
	      SelectionSet: function SelectionSet(node) {
	        return blockList(node.selections, ',\n');
	      },
	      Field: function Field(node) {
	        return join([join([join([node.alias, node.name], ': '), manyList('(', node.arguments, ', ', ')')]), join(node.directives, ' '), node.selectionSet], ' ');
	      },
	      Argument: function Argument(node) {
	        return node.name + ': ' + node.value;
	      },

	      // Fragments

	      FragmentSpread: function FragmentSpread(node) {
	        return join(['...' + node.name, join(node.directives, ' ')], ' ');
	      },
	      InlineFragment: function InlineFragment(node) {
	        return join(['... on', node.typeCondition, join(node.directives, ' '), node.selectionSet], ' ');
	      },
	      FragmentDefinition: function FragmentDefinition(node) {
	        return join(['fragment', node.name, 'on', node.typeCondition, join(node.directives, ' '), node.selectionSet], ' ');
	      },

	      // Value

	      IntValue: function IntValue(node) {
	        return node.value;
	      },
	      FloatValue: function FloatValue(node) {
	        return node.value;
	      },
	      StringValue: function StringValue(node) {
	        return JSON.stringify(node.value);
	      },
	      BooleanValue: function BooleanValue(node) {
	        return node.value ? 'true' : 'false';
	      },
	      EnumValue: function EnumValue(node) {
	        return node.value;
	      },
	      ArrayValue: function ArrayValue(node) {
	        return '[' + join(node.values, ', ') + ']';
	      },
	      ObjectValue: function ObjectValue(node) {
	        return '{' + join(node.fields, ', ') + '}';
	      },
	      ObjectField: function ObjectField(node) {
	        return node.name + ': ' + node.value;
	      },

	      // Directive

	      Directive: function Directive(node) {
	        return join(['@' + node.name, node.value], ': ');
	      },

	      // Type

	      ListType: function ListType(node) {
	        return '[' + node.type + ']';
	      },
	      NonNullType: function NonNullType(node) {
	        return node.type + '!';
	      }
	    }
	  });
	}

	function blockList(list, separator) {
	  return length(list) === 0 ? null : indent('{\n' + join(list, separator)) + '\n}';
	}

	function indent(maybeString) {
	  return maybeString && maybeString.replace(/\n/g, '\n  ');
	}

	function manyList(start, list, separator, end) {
	  return length(list) === 0 ? null : start + join(list, separator) + end;
	}

	function length(maybeArray) {
	  return maybeArray ? maybeArray.length : 0;
	}

	function join(maybeArray, separator) {
	  return maybeArray ? maybeArray.filter(function (x) {
	    return !!x;
	  }).join(separator || '') : '';
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _slicedToArray = __webpack_require__(52)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.visit = visit;
	exports.getVisitFn = getVisitFn;
	var VisitorKeys = {
	  Name: [],

	  Document: ['definitions'],
	  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
	  VariableDefinition: ['variable', 'type', 'defaultValue'],
	  Variable: ['name'],
	  SelectionSet: ['selections'],
	  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
	  Argument: ['name', 'value'],

	  FragmentSpread: ['name', 'directives'],
	  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
	  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

	  IntValue: [],
	  FloatValue: [],
	  StringValue: [],
	  BooleanValue: [],
	  EnumValue: [],
	  ArrayValue: ['values'],
	  ObjectValue: ['fields'],
	  ObjectField: ['name', 'value'],

	  Directive: ['name', 'value'],

	  ListType: ['type'],
	  NonNullType: ['type']
	};

	exports.VisitorKeys = VisitorKeys;
	var BREAK = {};

	exports.BREAK = BREAK;
	/**
	 * visit() will walk through an AST using a depth first traversal, calling
	 * the visitor's enter function at each node in the traveral, and calling the
	 * leave function after visiting that node and all of it's child nodes.
	 *
	 * By returning different values from the enter and leave functions, the
	 * behavior of the visitor can be altered, including skipping over a sub-tree of
	 * the AST (by returning false), editing the AST by returning a value or null
	 * to remove the value, or to stop the whole traversal by returning BREAK.
	 *
	 * When using visit() to edit an AST, the original AST will not be modified, and
	 * a new version of the AST with the changes applied will be returned from the
	 * visit function.
	 *
	 *     var editedAST = visit(ast, {
	 *       enter(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   false: skip visiting this node
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       },
	 *       leave(node, key, parent, path, ancestors) {
	 *         // @return
	 *         //   undefined: no action
	 *         //   visitor.BREAK: stop visiting altogether
	 *         //   null: delete this node
	 *         //   any value: replace this node with the returned value
	 *       }
	 *     });
	 *
	 * Alternatively to providing enter() and leave() functions, a visitor can
	 * instead provide functions named the same as the kinds of AST nodes, or
	 * enter/leave visitors at a named key, leading to four permutations of
	 * visitor API:
	 *
	 * 1) Named visitors triggered when entering a node a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind(node) {
	 *         // enter the "Kind" node
	 *       }
	 *     })
	 *
	 * 2) Named visitors that trigger upon entering and leaving a node of
	 *    a specific kind.
	 *
	 *     visit(ast, {
	 *       Kind: {
	 *         enter(node) {
	 *           // enter the "Kind" node
	 *         }
	 *         leave(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 *
	 * 3) Generic visitors that trigger upon entering and leaving any node.
	 *
	 *     visit(ast, {
	 *       enter(node) {
	 *         // enter any node
	 *       },
	 *       leave(node) {
	 *         // leave any node
	 *       }
	 *     })
	 *
	 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
	 *
	 *     visit(ast, {
	 *       enter: {
	 *         Kind(node) {
	 *           // enter the "Kind" node
	 *         }
	 *       },
	 *       leave: {
	 *         Kind(node) {
	 *           // leave the "Kind" node
	 *         }
	 *       }
	 *     })
	 */

	function visit(root, visitor) {
	  var visitorKeys = visitor.keys || VisitorKeys;

	  var stack;
	  var inArray = Array.isArray(root);
	  var keys = [root];
	  var index = -1;
	  var edits = [];
	  var parent;
	  var path = [];
	  var ancestors = [];
	  var newRoot = root;

	  do {
	    index++;
	    var isLeaving = index === keys.length;
	    var key;
	    var node;
	    var isEdited = isLeaving && edits.length !== 0;
	    if (isLeaving) {
	      key = ancestors.length === 0 ? undefined : path.pop();
	      node = parent;
	      parent = ancestors.pop();
	      if (isEdited) {
	        if (inArray) {
	          node = node.slice();
	        } else {
	          var clone = {};
	          for (var k in node) {
	            if (node.hasOwnProperty(k)) {
	              clone[k] = node[k];
	            }
	          }
	          node = clone;
	        }
	        var editOffset = 0;
	        for (var ii = 0; ii < edits.length; ii++) {
	          var _edits$ii = _slicedToArray(edits[ii], 2);

	          var editKey = _edits$ii[0];
	          var editValue = _edits$ii[1];

	          if (inArray) {
	            editKey -= editOffset;
	          }
	          if (inArray && editValue === null) {
	            node.splice(editKey, 1);
	            editOffset++;
	          } else {
	            node[editKey] = editValue;
	          }
	        }
	      }
	      index = stack.index;
	      keys = stack.keys;
	      edits = stack.edits;
	      inArray = stack.inArray;
	      stack = stack.prev;
	    } else {
	      key = parent ? inArray ? index : keys[index] : undefined;
	      node = parent ? parent[key] : newRoot;
	      if (node === null || node === undefined) {
	        continue;
	      }
	      if (parent) {
	        path.push(key);
	      }
	    }

	    var result = undefined;
	    if (!Array.isArray(node)) {
	      if (!isNode(node)) {
	        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
	      }
	      var visitFn = getVisitFn(visitor, isLeaving, node.kind);
	      if (visitFn) {
	        result = visitFn.call(visitor, node, key, parent, path, ancestors);

	        if (result === BREAK) {
	          break;
	        }

	        if (!isLeaving && result === false) {
	          path.pop();
	          continue;
	        }

	        if (result !== undefined) {
	          edits.push([key, result]);
	          if (!isLeaving) {
	            if (isNode(result)) {
	              node = result;
	            } else {
	              path.pop();
	              continue;
	            }
	          }
	        }
	      }
	    }

	    if (result === undefined && isEdited) {
	      edits.push([key, node]);
	    }

	    if (!isLeaving) {
	      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
	      inArray = Array.isArray(node);
	      keys = inArray ? node : visitorKeys[node.kind] || [];
	      index = -1;
	      edits = [];
	      if (parent) {
	        ancestors.push(parent);
	      }
	      parent = node;
	    }
	  } while (stack !== undefined);

	  if (edits.length !== 0) {
	    newRoot = edits[0][1];
	  }

	  return newRoot;
	}

	function isNode(maybeNode) {
	  return maybeNode && typeof maybeNode.kind === 'string';
	}

	function getVisitFn(visitor, isLeaving, kind) {
	  if (!visitor) {
	    return;
	  }
	  var kindVisitor = visitor[kind];
	  if (kindVisitor) {
	    if (!isLeaving && typeof kindVisitor === 'function') {
	      // { Kind() {} }
	      return kindVisitor;
	    }
	    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
	    if (typeof kindSpecificVisitor === 'function') {
	      // { Kind: { enter() {}, leave() {} } }
	      return kindSpecificVisitor;
	    }
	    return;
	  }
	  var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
	  if (specificVisitor) {
	    if (typeof specificVisitor === 'function') {
	      // { enter() {}, leave() {} }
	      return specificVisitor;
	    }
	    var specificKindVisitor = specificVisitor[kind];
	    if (typeof specificKindVisitor === 'function') {
	      // { enter: { Kind() {} }, leave: { Kind() {} } }
	      return specificKindVisitor;
	    }
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _isIterable = __webpack_require__(53)["default"];

	var _getIterator = __webpack_require__(56)["default"];

	exports["default"] = function (arr, i) {
	  if (Array.isArray(arr)) {
	    return arr;
	  } else if (_isIterable(Object(arr))) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  } else {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	__webpack_require__(15);
	__webpack_require__(55);
	module.exports = __webpack_require__(4).core.isIterable;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(4).core
	  , $iter = __webpack_require__(17);
	core.isIterable  = $iter.is;
	core.getIterator = $iter.get;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	__webpack_require__(15);
	__webpack_require__(55);
	module.exports = __webpack_require__(4).core.getIterator;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _language = __webpack_require__(49);

	var _typeDefinition = __webpack_require__(59);

	var _typeIntrospection = __webpack_require__(71);

	var _utilsTypeFromAST = __webpack_require__(73);

	var _utilsTypeFromAST2 = _interopRequireDefault(_utilsTypeFromAST);

	var _find = __webpack_require__(74);

	var _find2 = _interopRequireDefault(_find);

	/**
	 * FieldInfo is a utility class which, given a GraphQL schema, can keep track
	 * of the current field and type definitions at any point in a GraphQL document
	 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
	 */

	var TypeInfo = (function () {
	  function TypeInfo(schema) {
	    _classCallCheck(this, TypeInfo);

	    this._schema = schema;
	    this._typeStack = [];
	    this._parentTypeStack = [];
	    this._inputTypeStack = [];
	    this._fieldDefStack = [];
	  }

	  _createClass(TypeInfo, [{
	    key: 'getType',
	    value: function getType() {
	      if (this._typeStack.length > 0) {
	        return this._typeStack[this._typeStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getParentType',
	    value: function getParentType() {
	      if (this._parentTypeStack.length > 0) {
	        return this._parentTypeStack[this._parentTypeStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getInputType',
	    value: function getInputType() {
	      if (this._inputTypeStack.length > 0) {
	        return this._inputTypeStack[this._inputTypeStack.length - 1];
	      }
	    }
	  }, {
	    key: 'getFieldDef',
	    value: function getFieldDef() {
	      if (this._fieldDefStack.length > 0) {
	        return this._fieldDefStack[this._fieldDefStack.length - 1];
	      }
	    }
	  }, {
	    key: 'enter',

	    // Flow does not yet handle this case.
	    value: function enter(node) {
	      var schema = this._schema;
	      var type;
	      switch (node.kind) {
	        case _language.Kind.SELECTION_SET:
	          var compositeType;
	          var rawType = (0, _typeDefinition.getUnmodifiedType)(this.getType());
	          if ((0, _typeDefinition.isCompositeType)(rawType)) {
	            // isCompositeType is a type refining predicate, so this is safe.
	            compositeType = rawType;
	          }
	          this._parentTypeStack.push(compositeType);
	          break;
	        case _language.Kind.FIELD:
	          var parentType = this.getParentType();
	          var fieldDef;
	          if (parentType) {
	            fieldDef = getFieldDef(schema, parentType, node);
	          }
	          this._fieldDefStack.push(fieldDef);
	          this._typeStack.push(fieldDef && fieldDef.type);
	          break;
	        case _language.Kind.OPERATION_DEFINITION:
	          if (node.operation === 'query') {
	            type = schema.getQueryType();
	          } else if (node.operation === 'mutation') {
	            type = schema.getMutationType();
	          }
	          this._typeStack.push(type);
	          break;
	        case _language.Kind.INLINE_FRAGMENT:
	        case _language.Kind.FRAGMENT_DEFINITION:
	          type = schema.getType(node.typeCondition.value);
	          this._typeStack.push(type);
	          break;
	        case _language.Kind.VARIABLE_DEFINITION:
	          this._inputTypeStack.push((0, _utilsTypeFromAST2['default'])(schema, node.type));
	          break;
	        case _language.Kind.ARGUMENT:
	          var field = this.getFieldDef();
	          var argType;
	          if (field) {
	            var argDef = (0, _find2['default'])(field.args, function (arg) {
	              return arg.name === node.name.value;
	            });
	            if (argDef) {
	              argType = argDef.type;
	            }
	          }
	          this._inputTypeStack.push(argType);
	          break;
	        case _language.Kind.DIRECTIVE:
	          var directive = schema.getDirective(node.name.value);
	          this._inputTypeStack.push(directive ? directive.type : undefined);
	          break;
	        case _language.Kind.ARRAY:
	          var arrayType = (0, _typeDefinition.getNullableType)(this.getInputType());
	          this._inputTypeStack.push(arrayType instanceof _typeDefinition.GraphQLList ? arrayType.ofType : undefined);
	          break;
	        case _language.Kind.OBJECT_FIELD:
	          var objectType = (0, _typeDefinition.getUnmodifiedType)(this.getInputType());
	          var fieldType;
	          if (objectType instanceof _typeDefinition.GraphQLInputObjectType) {
	            var inputField = objectType.getFields()[node.name.value];
	            fieldType = inputField ? inputField.type : undefined;
	          }
	          this._inputTypeStack.push(fieldType);
	          break;
	      }
	    }
	  }, {
	    key: 'leave',
	    value: function leave(node) {
	      switch (node.kind) {
	        case _language.Kind.SELECTION_SET:
	          this._parentTypeStack.pop();
	          break;
	        case _language.Kind.FIELD:
	          this._fieldDefStack.pop();
	          this._typeStack.pop();
	          break;
	        case _language.Kind.OPERATION_DEFINITION:
	        case _language.Kind.INLINE_FRAGMENT:
	        case _language.Kind.FRAGMENT_DEFINITION:
	          this._typeStack.pop();
	          break;
	        case _language.Kind.VARIABLE_DEFINITION:
	        case _language.Kind.ARGUMENT:
	        case _language.Kind.DIRECTIVE:
	        case _language.Kind.ARRAY:
	        case _language.Kind.OBJECT_FIELD:
	          this._inputTypeStack.pop();
	          break;
	      }
	    }
	  }]);

	  return TypeInfo;
	})();

	exports['default'] = TypeInfo;

	/**
	 * Not exactly the same as the executor's definition of getFieldDef, in this
	 * statically evaluated environment we do not always have an Object type,
	 * and need to handle Interface and Union types.
	 */
	function getFieldDef(schema, parentType, fieldAST) {
	  var name = fieldAST.name.value;
	  if (name === _typeIntrospection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.SchemaMetaFieldDef;
	  }
	  if (name === _typeIntrospection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.TypeMetaFieldDef;
	  }
	  if (name === _typeIntrospection.TypeNameMetaFieldDef.name && (parentType instanceof _typeDefinition.GraphQLObjectType || parentType instanceof _typeDefinition.GraphQLInterfaceType || parentType instanceof _typeDefinition.GraphQLUnionType)) {
	    return _typeIntrospection.TypeNameMetaFieldDef;
	  }
	  if (parentType instanceof _typeDefinition.GraphQLObjectType || parentType instanceof _typeDefinition.GraphQLInterfaceType) {
	    return parentType.getFields()[name];
	  }
	}
	module.exports = exports['default'];
	/*Node*/

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * These are all of the possible kinds of types.
	 */

	// Predicates

	/**
	 * These types may be used as input types for arguments and directives.
	 */

	var _createClass = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	var _Map = __webpack_require__(60)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.isInputType = isInputType;

	/**
	 * These types may be used as output types as the result of fields.
	 */
	exports.isOutputType = isOutputType;

	/**
	 * These types may describe types which may be leaf values.
	 */
	exports.isLeafType = isLeafType;

	/**
	 * These types may describe the parent context of a selection set.
	 */
	exports.isCompositeType = isCompositeType;

	/**
	 * These types may describe the parent context of a selection set.
	 */
	exports.isAbstractType = isAbstractType;

	/**
	 * These types can all accept null as a value.
	 */
	exports.getNullableType = getNullableType;

	/**
	 * These types have no modifiers like List or NonNull.
	 */
	exports.getUnmodifiedType = getUnmodifiedType;

	var _utilsInvariant = __webpack_require__(47);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var _languageKinds = __webpack_require__(42);

	function isInputType(type) {
	  var nakedType = getUnmodifiedType(type);
	  return nakedType instanceof GraphQLScalarType || nakedType instanceof GraphQLEnumType || nakedType instanceof GraphQLInputObjectType;
	}

	function isOutputType(type) {
	  var nakedType = getUnmodifiedType(type);
	  return nakedType instanceof GraphQLScalarType || nakedType instanceof GraphQLObjectType || nakedType instanceof GraphQLInterfaceType || nakedType instanceof GraphQLUnionType || nakedType instanceof GraphQLEnumType;
	}

	function isLeafType(type) {
	  var nakedType = getUnmodifiedType(type);
	  return nakedType instanceof GraphQLScalarType || nakedType instanceof GraphQLEnumType;
	}

	function isCompositeType(type) {
	  return type instanceof GraphQLObjectType || type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	}

	function isAbstractType(type) {
	  return type instanceof GraphQLInterfaceType || type instanceof GraphQLUnionType;
	}

	function getNullableType(type) {
	  return type instanceof GraphQLNonNull ? type.ofType : type;
	}

	function getUnmodifiedType(type) {
	  var unmodifiedType = type;
	  while (unmodifiedType instanceof GraphQLList || unmodifiedType instanceof GraphQLNonNull) {
	    unmodifiedType = unmodifiedType.ofType;
	  }
	  return unmodifiedType;
	}

	/**
	 * Scalar Type Definition
	 *
	 * The leaf values of any request and input values to arguments are
	 * Scalars (or Enums) and are defined with a name and a series of coercion
	 * functions used to ensure validity.
	 *
	 * Example:
	 *
	 *     var OddType = new GraphQLScalarType({
	 *       name: 'Odd',
	 *       coerce(value) {
	 *         return value % 2 === 1 ? value : null;
	 *       }
	 *     });
	 *
	 */

	var GraphQLScalarType = (function () {
	  function GraphQLScalarType(config) {
	    _classCallCheck(this, GraphQLScalarType);

	    (0, _utilsInvariant2['default'])(config.name, 'Type must be named.');
	    this.name = config.name;
	    this.description = config.description;
	    this._scalarConfig = config;
	  }

	  _createClass(GraphQLScalarType, [{
	    key: 'coerce',
	    value: function coerce(value) /*T*/{
	      var coercer = this._scalarConfig.coerce;
	      return coercer(value);
	    }
	  }, {
	    key: 'coerceLiteral',
	    value: function coerceLiteral(value) /*T*/{
	      var coercer = this._scalarConfig.coerceLiteral;
	      return coercer ? coercer(value) : null;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLScalarType;
	})();

	exports.GraphQLScalarType = GraphQLScalarType;

	/**
	 * Object Type Definition
	 *
	 * Almost all of the GraphQL types you define will be object types. Object types
	 * have a name, but most importantly describe their fields.
	 *
	 * Example:
	 *
	 *     var AddressType = new GraphQLObjectType({
	 *       name: 'Address',
	 *       fields: {
	 *         street: { type: GraphQLString },
	 *         number: { type: GraphQLInt },
	 *         formatted: {
	 *           type: GraphQLString,
	 *           resolve(obj) {
	 *             return obj.number + ' ' + obj.street
	 *           }
	 *         }
	 *       }
	 *     });
	 *
	 * When two types need to refer to each other, or a type needs to refer to
	 * itself in a field, you can use a function expression (aka a closure or a
	 * thunk) to supply the fields lazily.
	 *
	 * Example:
	 *
	 *     var PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         name: { type: GraphQLString },
	 *         bestFriend: { type: PersonType },
	 *       })
	 *     });
	 *
	 */

	var GraphQLObjectType = (function () {
	  function GraphQLObjectType(config) {
	    _classCallCheck(this, GraphQLObjectType);

	    (0, _utilsInvariant2['default'])(config.name, 'Type must be named.');
	    this.name = config.name;
	    this.description = config.description;
	    this._typeConfig = config;
	    addImplementationToInterfaces(this);
	  }

	  _createClass(GraphQLObjectType, [{
	    key: 'getFields',
	    value: function getFields() {
	      return this._fields || (this._fields = defineFieldMap(this._typeConfig.fields));
	    }
	  }, {
	    key: 'getInterfaces',
	    value: function getInterfaces() {
	      return this._typeConfig.interfaces || [];
	    }
	  }, {
	    key: 'isTypeOf',
	    value: function isTypeOf(value) {
	      var predicate = this._typeConfig.isTypeOf;
	      if (predicate) {
	        return predicate(value);
	      }
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLObjectType;
	})();

	exports.GraphQLObjectType = GraphQLObjectType;

	function defineFieldMap(fields) {
	  var fieldMap = typeof fields === 'function' ? fields() : fields;
	  _Object$keys(fieldMap).forEach(function (fieldName) {
	    var field = fieldMap[fieldName];
	    field.name = fieldName;
	    if (!field.args) {
	      field.args = [];
	    } else {
	      field.args = _Object$keys(field.args).map(function (argName) {
	        var arg = field.args[argName];
	        (0, _utilsInvariant2['default'])(arg.type, 'Arg must supply type. ' + fieldName + '.' + argName);
	        return {
	          name: argName,
	          type: arg.type,
	          defaultValue: arg.defaultValue === undefined ? null : arg.defaultValue
	        };
	      });
	    }
	  });
	  return fieldMap;
	}

	/**
	 * Update the interfaces to know about this implementation.
	 * This is an rare and unfortunate use of mutation in the type definition
	 * implementations, but avoids an expensive "getPossibleTypes"
	 * implementation for Interface types.
	 */
	function addImplementationToInterfaces(impl) {
	  impl.getInterfaces().forEach(function (type) {
	    type._implementations.push(impl);
	  });
	}

	/**
	 * Interface Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Interface type
	 * is used to describe what types are possible, what fields are in common across
	 * all types, as well as a function to determine which type is actually used
	 * when the field is resolved.
	 *
	 * Example:
	 *
	 *     var EntityType = new GraphQLInterfaceType({
	 *       name: 'Entity',
	 *       fields: {
	 *         name: { type: GraphQLString }
	 *       }
	 *     });
	 *
	 */

	var GraphQLInterfaceType = (function () {
	  function GraphQLInterfaceType(config) {
	    _classCallCheck(this, GraphQLInterfaceType);

	    (0, _utilsInvariant2['default'])(config.name, 'Type must be named.');
	    this.name = config.name;
	    this.description = config.description;
	    this._typeConfig = config;
	    this._implementations = [];
	  }

	  _createClass(GraphQLInterfaceType, [{
	    key: 'getFields',
	    value: function getFields() {
	      return this._fields || (this._fields = defineFieldMap(this._typeConfig.fields));
	    }
	  }, {
	    key: 'getPossibleTypes',
	    value: function getPossibleTypes() {
	      return this._implementations;
	    }
	  }, {
	    key: 'isPossibleType',
	    value: function isPossibleType(type) {
	      var possibleTypeNames = this._possibleTypeNames;
	      if (!possibleTypeNames) {
	        this._possibleTypeNames = possibleTypeNames = this.getPossibleTypes().reduce(function (map, possibleType) {
	          return (map[possibleType.name] = true, map);
	        }, {});
	      }
	      return possibleTypeNames[type.name] === true;
	    }
	  }, {
	    key: 'resolveType',
	    value: function resolveType(value) {
	      var resolver = this._typeConfig.resolveType;
	      return resolver ? resolver(value) : getTypeOf(value, this);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLInterfaceType;
	})();

	exports.GraphQLInterfaceType = GraphQLInterfaceType;

	function getTypeOf(value, abstractType) {
	  var possibleTypes = abstractType.getPossibleTypes();
	  for (var i = 0; i < possibleTypes.length; i++) {
	    var type = possibleTypes[i];
	    var isTypeOf = type.isTypeOf(value);
	    if (isTypeOf === undefined) {
	      // TODO: move this to a JS impl specific type system validation step
	      // so the error can be found before execution.
	      throw new Error('Non-Object Type ' + abstractType.name + ' does not implement ' + 'resolveType and Object Type ' + type.name + ' does not implement ' + 'isTypeOf. There is no way to determine if a value is of this type.');
	    }
	    if (isTypeOf) {
	      return type;
	    }
	  }
	}

	/**
	 * Union Type Definition
	 *
	 * When a field can return one of a heterogeneous set of types, a Union type
	 * is used to describe what types are possible as well as providing a function
	 * to determine which type is actually used when the field is resolved.
	 *
	 * Example:
	 *
	 *     var PetType = new GraphQLUnionType({
	 *       name: 'Pet',
	 *       types: [ DogType, CatType ],
	 *       resolveType(value) {
	 *         if (value instanceof Dog) {
	 *           return DogType;
	 *         }
	 *         if (value instanceof Cat) {
	 *           return CatType;
	 *         }
	 *       }
	 *     });
	 *
	 */

	var GraphQLUnionType = (function () {
	  function GraphQLUnionType(config) {
	    _classCallCheck(this, GraphQLUnionType);

	    (0, _utilsInvariant2['default'])(config.name, 'Type must be named.');
	    this.name = config.name;
	    this.description = config.description;
	    (0, _utilsInvariant2['default'])(config.types && config.types.length, 'Must provide types for Union ' + config.name + '.');
	    if (!config.types.every(function (x) {
	      return x instanceof GraphQLObjectType;
	    })) {
	      var nonObjectTypes = config.types.filter(function (x) {
	        return !(x instanceof GraphQLObjectType);
	      });
	      throw new Error('Union ' + config.name + ' may only contain object types, it cannot ' + ('contain: ' + nonObjectTypes.join(', ') + '.'));
	    }
	    this._types = config.types;
	    this._typeConfig = config;
	  }

	  _createClass(GraphQLUnionType, [{
	    key: 'getPossibleTypes',
	    value: function getPossibleTypes() {
	      return this._types;
	    }
	  }, {
	    key: 'isPossibleType',
	    value: function isPossibleType(type) {
	      var possibleTypeNames = this._possibleTypeNames;
	      if (!possibleTypeNames) {
	        this._possibleTypeNames = possibleTypeNames = this.getPossibleTypes().reduce(function (map, possibleType) {
	          return (map[possibleType.name] = true, map);
	        }, {});
	      }
	      return possibleTypeNames[type.name] === true;
	    }
	  }, {
	    key: 'resolveType',
	    value: function resolveType(value) {
	      var resolver = this._typeConfig.resolveType;
	      return resolver ? resolver(value) : getTypeOf(value, this);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLUnionType;
	})();

	exports.GraphQLUnionType = GraphQLUnionType;

	/**
	 * Enum Type Definition
	 *
	 * Some leaf values of requests and input values are Enums. GraphQL serializes
	 * Enum values as strings, however internally Enums can be represented by any
	 * kind of type, often integers.
	 *
	 * Example:
	 *
	 *     var RGBType = new GraphQLEnumType({
	 *       name: 'RGB',
	 *       values: {
	 *         RED: { value: 0 },
	 *         GREEN: { value: 1 },
	 *         BLUE: { value: 2 }
	 *       }
	 *     });
	 *
	 * Note: If a value is not provided in a definition, the name of the enum value
	 * will be used as it's internal value.
	 */

	var GraphQLEnumType = (function () {
	  function GraphQLEnumType(config) {
	    _classCallCheck(this, GraphQLEnumType);

	    this.name = config.name;
	    this.description = config.description;
	    this._enumConfig = config;
	  }

	  _createClass(GraphQLEnumType, [{
	    key: 'getValues',
	    value: function getValues() /*<T>*/{
	      return this._values || (this._values = this._defineValueMap());
	    }
	  }, {
	    key: 'coerce',
	    value: function coerce(value) {
	      var enumValue = this._getValueLookup().get(value);
	      return enumValue ? enumValue.name : null;
	    }
	  }, {
	    key: 'coerceLiteral',
	    value: function coerceLiteral(value) /*T*/{
	      if (value.kind === _languageKinds.ENUM) {
	        var enumValue = this._getNameLookup().get(value.value);
	        if (enumValue) {
	          return enumValue.value;
	        }
	      }
	    }
	  }, {
	    key: '_defineValueMap',
	    value: function _defineValueMap() /*<T>*/{
	      var valueMap = this._enumConfig.values;
	      _Object$keys(valueMap).forEach(function (valueName) {
	        var value = valueMap[valueName];
	        value.name = valueName;
	        if (!value.hasOwnProperty('value')) {
	          value.value = valueName;
	        }
	      });
	      return valueMap;
	    }
	  }, {
	    key: '_getValueLookup',
	    value: function _getValueLookup() {
	      if (!this._valueLookup) {
	        var lookup = new _Map();
	        var values = this.getValues();
	        _Object$keys(values).forEach(function (valueName) {
	          var value = values[valueName];
	          lookup.set(value.value, value);
	        });
	        this._valueLookup = lookup;
	      }
	      return this._valueLookup;
	    }
	  }, {
	    key: '_getNameLookup',
	    value: function _getNameLookup() {
	      if (!this._nameLookup) {
	        var lookup = new _Map();
	        var values = this.getValues();
	        _Object$keys(values).forEach(function (valueName) {
	          var value = values[valueName];
	          lookup.set(value.name, value);
	        });
	        this._nameLookup = lookup;
	      }
	      return this._nameLookup;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLEnumType;
	})();

	exports.GraphQLEnumType = GraphQLEnumType;

	/**
	 * Input Object Type Definition
	 *
	 * An input object defines a structured collection of fields which may be
	 * supplied to a field argument.
	 *
	 * Using `NonNull` will ensure that a value must be provided by the query
	 *
	 * Example:
	 *
	 *     var GeoPoint = new GraphQLInputObjectType({
	 *       name: 'GeoPoint',
	 *       fields: {
	 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
	 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
	 *         alt: { type: GraphQLFloat, defaultValue: 0 },
	 *       }
	 *     });
	 *
	 */

	var GraphQLInputObjectType = (function () {
	  function GraphQLInputObjectType(config) {
	    _classCallCheck(this, GraphQLInputObjectType);

	    (0, _utilsInvariant2['default'])(config.name, 'Type must be named.');
	    this.name = config.name;
	    this.description = config.description;
	    this._typeConfig = config;
	  }

	  _createClass(GraphQLInputObjectType, [{
	    key: 'getFields',
	    value: function getFields() {
	      return this._fields || (this._fields = this._defineFieldMap());
	    }
	  }, {
	    key: '_defineFieldMap',
	    value: function _defineFieldMap() {
	      var fields = this._typeConfig.fields;
	      var fieldMap = typeof fields === 'function' ? fields() : fields;
	      _Object$keys(fieldMap).forEach(function (fieldName) {
	        var field = fieldMap[fieldName];
	        field.name = fieldName;
	      });
	      return fieldMap;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.name;
	    }
	  }]);

	  return GraphQLInputObjectType;
	})();

	exports.GraphQLInputObjectType = GraphQLInputObjectType;

	/**
	 * List Modifier
	 *
	 * A list is a kind of type marker, a wrapping type which points to another
	 * type. Lists are often created within the context of defining the fields of
	 * an object type.
	 *
	 * Example:
	 *
	 *     var PersonType = new GraphQLObjectType({
	 *       name: 'Person',
	 *       fields: () => ({
	 *         parents: { type: new GraphQLList(Person) },
	 *         children: { type: new GraphQLList(Person) },
	 *       })
	 *     })
	 *
	 */

	var GraphQLList = (function () {
	  function GraphQLList(type) {
	    _classCallCheck(this, GraphQLList);

	    this.ofType = type;
	  }

	  _createClass(GraphQLList, [{
	    key: 'toString',
	    value: function toString() {
	      return '[' + this.ofType.toString() + ']';
	    }
	  }]);

	  return GraphQLList;
	})();

	exports.GraphQLList = GraphQLList;

	/**
	 * Non-Null Modifier
	 *
	 * A non-null is a kind of type marker, a wrapping type which points to another
	 * type. Non-null types enforce that their values are never null and can ensure
	 * an error is raised if this ever occurs during a request. It is useful for
	 * fields which you can make a strong guarantee on non-nullability, for example
	 * usually the id field of a database row will never be null.
	 *
	 * Example:
	 *
	 *     var RowType = new GraphQLObjectType({
	 *       name: 'Row',
	 *       fields: () => ({
	 *         id: { type: new GraphQLNonNull(String) },
	 *       })
	 *     })
	 *
	 * Note: the enforcement of non-nullability occurs within the executor.
	 */

	var GraphQLNonNull = (function () {
	  function GraphQLNonNull(type) {
	    _classCallCheck(this, GraphQLNonNull);

	    (0, _utilsInvariant2['default'])(!(type instanceof GraphQLNonNull), 'Cannot nest NonNull inside NonNull.');
	    this.ofType = type;
	  }

	  _createClass(GraphQLNonNull, [{
	    key: 'toString',
	    value: function toString() {
	      return this.ofType.toString() + '!';
	    }
	  }]);

	  return GraphQLNonNull;
	})();

	exports.GraphQLNonNull = GraphQLNonNull;
	/*<T>*/ /*<T>*/ /*<T>*/ /*<T>*/ /*T*/ /*T*/
	/**
	 * Optionally provide a custom type resolver function. If one is not provided,
	 * the default implemenation will call `isTypeOf` on each implementing
	 * Object type.
	 */

	/**
	 * Optionally provide a custom type resolver function. If one is not provided,
	 * the default implemenation will call `isTypeOf` on each implementing
	 * Object type.
	 */
	/*<T>*/ /*<T>*/ /*<T>*/ /*T*/ /*<T>*/ /*T*/ /*T*/ /*<T>*/ /*<T>*/ /*<T>*/ /*<T>*/ /*<T>*/ /*T*/ /*<T>*/ /*<T>*/ /*<T>*/ /*T*/

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(15);
	__webpack_require__(21);
	__webpack_require__(62);
	__webpack_require__(65);
	module.exports = __webpack_require__(4).core.Map;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(63);

	// 23.1 Map Objects
	__webpack_require__(64)('Map', function(get){
	  return function Map(){ return get(this, arguments[0]); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(4)
	  , ctx      = __webpack_require__(26)
	  , safe     = __webpack_require__(13).safe
	  , assert   = __webpack_require__(18)
	  , forOf    = __webpack_require__(27)
	  , step     = __webpack_require__(17).step
	  , $has     = $.has
	  , set      = $.set
	  , isObject = $.isObject
	  , hide     = $.hide
	  , isExtensible = Object.isExtensible || isObject
	  , ID       = safe('id')
	  , O1       = safe('O1')
	  , LAST     = safe('last')
	  , FIRST    = safe('first')
	  , ITER     = safe('iter')
	  , SIZE     = $.DESC ? safe('size') : 'size'
	  , id       = 0;

	function fastKey(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	}

	function getEntry(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that[O1][index];
	  // frozen object case
	  for(entry = that[FIRST]; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	}

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      assert.inst(that, C, NAME);
	      set(that, O1, $.create(null));
	      set(that, SIZE, 0);
	      set(that, LAST, undefined);
	      set(that, FIRST, undefined);
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(34)(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that[FIRST] = that[LAST] = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that[O1][entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that[FIRST] == entry)that[FIRST] = next;
	          if(that[LAST] == entry)that[LAST] = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments[1], 3)
	          , entry;
	        while(entry = entry ? entry.n : this[FIRST]){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if($.DESC)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return assert.def(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that[LAST] = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that[LAST],          // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that[FIRST])that[FIRST] = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that[O1][index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  // add .keys, .values, .entries, [@@iterator]
	  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	  setIter: function(C, NAME, IS_MAP){
	    __webpack_require__(19)(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , kind  = iter.k
	        , entry = iter.l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
	        // or finish the iteration
	        iter.o = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $     = __webpack_require__(4)
	  , $def  = __webpack_require__(20)
	  , $iter = __webpack_require__(17)
	  , BUGGY = $iter.BUGGY
	  , forOf = __webpack_require__(27)
	  , assertInstance = __webpack_require__(18).inst
	  , INTERNAL = __webpack_require__(13).safe('internal');

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = $.g[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!$.DESC || !$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    __webpack_require__(34)(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      assertInstance(target, C, NAME);
	      target[INTERNAL] = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var chain = KEY == 'add' || KEY == 'set';
	      if(KEY in proto)$.hide(C.prototype, KEY, function(a, b){
	        var result = this[INTERNAL][KEY](a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this[INTERNAL].size;
	      }
	    });
	  }

	  __webpack_require__(10).set(C, NAME);

	  O[NAME] = C;
	  $def($def.G + $def.W + $def.F, O);
	  __webpack_require__(30)(C);

	  if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	__webpack_require__(66)('Map');

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(20)
	  , forOf = __webpack_require__(27);
	module.exports = function(NAME){
	  $def($def.P, NAME, {
	    toJSON: function toJSON(){
	      var arr = [];
	      forOf(this, false, arr.push, arr);
	      return arr;
	    }
	  });
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(69);
	module.exports = __webpack_require__(4).core.Object.keys;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , $def     = __webpack_require__(20)
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
	  } : __webpack_require__(70).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(4)
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow weak */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _definition = __webpack_require__(59);

	var _scalars = __webpack_require__(72);

	var __Schema = new _definition.GraphQLObjectType({
	  name: '__Schema',
	  description: 'A GraphQL Schema defines the capabilities of a GraphQL ' + 'server. It exposes all available types and directives on ' + 'the server, as well as the entry points for query and ' + 'mutation operations.',
	  fields: function fields() {
	    return {
	      types: {
	        description: 'A list of all types supported by this server.',
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type))),
	        resolve: function resolve(schema) {
	          var typeMap = schema.getTypeMap();
	          return _Object$keys(typeMap).map(function (key) {
	            return typeMap[key];
	          });
	        }
	      },
	      queryType: {
	        description: 'The type that query operations will be rooted at.',
	        type: new _definition.GraphQLNonNull(__Type),
	        resolve: function resolve(schema) {
	          return schema.getQueryType();
	        }
	      },
	      mutationType: {
	        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
	        type: __Type,
	        resolve: function resolve(schema) {
	          return schema.getMutationType();
	        }
	      },
	      directives: {
	        description: 'A list of all directives supported by this server.',
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__Directive))),
	        resolve: function resolve(schema) {
	          return schema.getDirectives();
	        }
	      }
	    };
	  }
	});

	exports.__Schema = __Schema;
	var __Directive = new _definition.GraphQLObjectType({
	  name: '__Directive',
	  fields: function fields() {
	    return {
	      name: { type: _scalars.GraphQLString },
	      description: { type: _scalars.GraphQLString },
	      type: { type: __Type },
	      onOperation: { type: _scalars.GraphQLBoolean },
	      onFragment: { type: _scalars.GraphQLBoolean },
	      onField: { type: _scalars.GraphQLBoolean }
	    };
	  }
	});

	var __Type = new _definition.GraphQLObjectType({
	  name: '__Type',
	  fields: function fields() {
	    return {
	      kind: {
	        type: new _definition.GraphQLNonNull(__TypeKind),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLScalarType) {
	            return TypeKind.SCALAR;
	          } else if (type instanceof _definition.GraphQLObjectType) {
	            return TypeKind.OBJECT;
	          } else if (type instanceof _definition.GraphQLInterfaceType) {
	            return TypeKind.INTERFACE;
	          } else if (type instanceof _definition.GraphQLUnionType) {
	            return TypeKind.UNION;
	          } else if (type instanceof _definition.GraphQLEnumType) {
	            return TypeKind.ENUM;
	          } else if (type instanceof _definition.GraphQLInputObjectType) {
	            return TypeKind.INPUT_OBJECT;
	          } else if (type instanceof _definition.GraphQLList) {
	            return TypeKind.LIST;
	          } else if (type instanceof _definition.GraphQLNonNull) {
	            return TypeKind.NON_NULL;
	          } else {
	            throw new Error('Unknown kind of type: ' + type);
	          }
	        }
	      },
	      name: { type: _scalars.GraphQLString },
	      description: { type: _scalars.GraphQLString },
	      fields: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Field)),
	        args: {
	          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref) {
	          var includeDeprecated = _ref.includeDeprecated;

	          if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
	            var fieldMap = type.getFields();
	            var fields = _Object$keys(fieldMap).map(function (fieldName) {
	              return fieldMap[fieldName];
	            });
	            if (!includeDeprecated) {
	              fields = fields.filter(function (field) {
	                return !field.deprecationReason;
	              });
	            }
	            return fields;
	          }
	          return null;
	        }
	      },
	      interfaces: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLObjectType) {
	            return type.getInterfaces();
	          }
	        }
	      },
	      possibleTypes: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__Type)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLInterfaceType || type instanceof _definition.GraphQLUnionType) {
	            return type.getPossibleTypes();
	          }
	        }
	      },
	      enumValues: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__EnumValue)),
	        args: {
	          includeDeprecated: { type: _scalars.GraphQLBoolean, defaultValue: false }
	        },
	        resolve: function resolve(type, _ref2) {
	          var includeDeprecated = _ref2.includeDeprecated;

	          if (type instanceof _definition.GraphQLEnumType) {
	            var valueMap = type.getValues();
	            var values = _Object$keys(valueMap).map(function (valueName) {
	              return valueMap[valueName];
	            });
	            if (!includeDeprecated) {
	              values = values.filter(function (value) {
	                return !value.deprecationReason;
	              });
	            }
	            return values;
	          }
	        }
	      },
	      inputFields: {
	        type: new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue)),
	        resolve: function resolve(type) {
	          if (type instanceof _definition.GraphQLInputObjectType) {
	            var fieldMap = type.getFields();
	            return _Object$keys(fieldMap).map(function (fieldName) {
	              return fieldMap[fieldName];
	            });
	          }
	        }
	      },
	      ofType: { type: __Type }
	    };
	  }
	});

	var __Field = new _definition.GraphQLObjectType({
	  name: '__Field',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      args: {
	        type: new _definition.GraphQLNonNull(new _definition.GraphQLList(new _definition.GraphQLNonNull(__InputValue))),
	        resolve: function resolve(field) {
	          return field.args == null ? [] : field.args;
	        }
	      },
	      type: { type: new _definition.GraphQLNonNull(__Type) },
	      isDeprecated: {
	        type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	        resolve: function resolve(field) {
	          return !!field.deprecationReason;
	        }
	      },
	      deprecationReason: {
	        type: _scalars.GraphQLString
	      }
	    };
	  }
	});

	var __InputValue = new _definition.GraphQLObjectType({
	  name: '__InputValue',
	  fields: function fields() {
	    return {
	      name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	      description: { type: _scalars.GraphQLString },
	      type: { type: new _definition.GraphQLNonNull(__Type) },
	      defaultValue: {
	        type: _scalars.GraphQLString,
	        resolve: function resolve(inputVal) {
	          return inputVal.defaultValue == null ? null : JSON.stringify(inputVal.defaultValue);
	        }
	      }
	    };
	  }
	});

	var __EnumValue = new _definition.GraphQLObjectType({
	  name: '__EnumValue',
	  fields: {
	    name: { type: new _definition.GraphQLNonNull(_scalars.GraphQLString) },
	    description: { type: _scalars.GraphQLString },
	    isDeprecated: {
	      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	      resolve: function resolve(enumValue) {
	        return !!enumValue.deprecationReason;
	      }
	    },
	    deprecationReason: {
	      type: _scalars.GraphQLString
	    }
	  }
	});

	var TypeKind = {
	  SCALAR: 0,
	  OBJECT: 1,
	  INTERFACE: 2,
	  UNION: 3,
	  ENUM: 4,
	  INPUT_OBJECT: 5,
	  LIST: 6,
	  NON_NULL: 7
	};

	var __TypeKind = new _definition.GraphQLEnumType({
	  name: '__TypeKind',
	  description: 'An enum describing what kind of type a given __Type is',
	  values: {
	    SCALAR: {
	      value: TypeKind.SCALAR,
	      description: 'Indicates this type is a scalar.'
	    },
	    OBJECT: {
	      value: TypeKind.OBJECT,
	      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
	    },
	    INTERFACE: {
	      value: TypeKind.INTERFACE,
	      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
	    },
	    UNION: {
	      value: TypeKind.UNION,
	      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
	    },
	    ENUM: {
	      value: TypeKind.ENUM,
	      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
	    },
	    INPUT_OBJECT: {
	      value: TypeKind.INPUT_OBJECT,
	      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
	    },
	    LIST: {
	      value: TypeKind.LIST,
	      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
	    },
	    NON_NULL: {
	      value: TypeKind.NON_NULL,
	      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
	    }
	  }
	});

	/**
	 * Note that these are GraphQLFieldDefinition and not GraphQLFieldConfig,
	 * so the format for args is different.
	 */

	var SchemaMetaFieldDef = {
	  name: '__schema',
	  type: new _definition.GraphQLNonNull(__Schema),
	  description: 'Access the current type schema of this server.',
	  args: [],
	  resolve: function resolve(source, args, root, fieldAST, fieldType, parentType, schema) {
	    return schema;
	  }
	};

	exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
	var TypeMetaFieldDef = {
	  name: '__type',
	  type: __Type,
	  description: 'Request the type information of a single type.',
	  args: [{ name: 'name', type: new _definition.GraphQLNonNull(_scalars.GraphQLString) }],
	  resolve: function resolve(source, _ref3, root, fieldAST, fieldType, parentType, schema) {
	    var name = _ref3.name;
	    return schema.getType(name);
	  }
	};

	exports.TypeMetaFieldDef = TypeMetaFieldDef;
	var TypeNameMetaFieldDef = {
	  name: '__typename',
	  type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
	  description: 'The name of the current Object type at runtime.',
	  args: [],
	  resolve: function resolve(source, args, root, fieldAST, fieldType, parentType) {
	    return parentType.name;
	  }
	};
	exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _definition = __webpack_require__(59);

	var _language = __webpack_require__(49);

	// Integers are only safe when between -(2^53 - 1) and 2^53 - 1 due to being
	// encoded in JavaScript and represented in JSON as double-precision floating
	// point numbers, as specified by IEEE 754.
	var MAX_INT = 9007199254740991;
	var MIN_INT = -9007199254740991;

	var GraphQLInt = new _definition.GraphQLScalarType({
	  name: 'Int',
	  coerce: function coerce(value) {
	    var num = +value;
	    return num === num && num <= MAX_INT && num >= MIN_INT ? num | 0 : null;
	  },
	  coerceLiteral: function coerceLiteral(ast) {
	    if (ast.kind === _language.Kind.INT) {
	      var num = parseInt(ast.value, 10);
	      if (num <= MAX_INT && num >= MIN_INT) {
	        return num;
	      }
	    }
	  }
	});

	exports.GraphQLInt = GraphQLInt;
	var GraphQLFloat = new _definition.GraphQLScalarType({
	  name: 'Float',
	  coerce: function coerce(value) {
	    var num = +value;
	    return num === num ? num : null;
	  },
	  coerceLiteral: function coerceLiteral(ast) {
	    return ast.kind === _language.Kind.FLOAT || ast.kind === _language.Kind.INT ? parseFloat(ast.value) : null;
	  }
	});

	exports.GraphQLFloat = GraphQLFloat;
	var GraphQLString = new _definition.GraphQLScalarType({
	  name: 'String',
	  coerce: function coerce(value) {
	    return '' + value;
	  },
	  coerceLiteral: function coerceLiteral(ast) {
	    return ast.kind === _language.Kind.STRING ? ast.value : null;
	  }
	});

	exports.GraphQLString = GraphQLString;
	var GraphQLBoolean = new _definition.GraphQLScalarType({
	  name: 'Boolean',
	  coerce: function coerce(value) {
	    return !!value;
	  },
	  coerceLiteral: function coerceLiteral(ast) {
	    return ast.kind === _language.Kind.BOOLEAN ? ast.value : null;
	  }
	});

	exports.GraphQLBoolean = GraphQLBoolean;
	var GraphQLID = new _definition.GraphQLScalarType({
	  name: 'ID',
	  coerce: function coerce(value) {
	    return '' + value;
	  },
	  coerceLiteral: function coerceLiteral(ast) {
	    return ast.kind === _language.Kind.STRING || ast.kind === _language.Kind.INT ? ast.value : null;
	  }
	});
	exports.GraphQLID = GraphQLID;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = typeFromAST;

	var _invariant = __webpack_require__(47);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _languageKinds = __webpack_require__(42);

	var _typeDefinition = __webpack_require__(59);

	function typeFromAST(schema, inputTypeAST) {
	  var innerType;
	  if (inputTypeAST.kind === _languageKinds.LIST_TYPE) {
	    innerType = typeFromAST(schema, inputTypeAST.type);
	    return innerType && new _typeDefinition.GraphQLList(innerType);
	  }
	  if (inputTypeAST.kind === _languageKinds.NON_NULL_TYPE) {
	    innerType = typeFromAST(schema, inputTypeAST.type);
	    return innerType && new _typeDefinition.GraphQLNonNull(innerType);
	  }
	  (0, _invariant2['default'])(inputTypeAST.kind === _languageKinds.NAME, 'Must be a type name.');
	  return schema.getType(inputTypeAST.value);
	}

	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	"use strict";

	var _Object$defineProperty = __webpack_require__(2)["default"];

	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = find;

	function find(list, predicate) {
	  for (var i = 0; i < list.length; i++) {
	    if (predicate(list[i])) {
	      return list[i];
	    }
	  }
	}

	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Spec Section: Fragment Spread Type Existence
	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _rulesKnownTypeNames = __webpack_require__(82);

	var _rulesKnownTypeNames2 = _interopRequireDefault(_rulesKnownTypeNames);

	// Spec Section: Fragments on Composite Types

	var _rulesFragmentsOnCompositeTypes = __webpack_require__(83);

	var _rulesFragmentsOnCompositeTypes2 = _interopRequireDefault(_rulesFragmentsOnCompositeTypes);

	// Spec Section: Variables are Input Types

	var _rulesVariablesAreInputTypes = __webpack_require__(84);

	var _rulesVariablesAreInputTypes2 = _interopRequireDefault(_rulesVariablesAreInputTypes);

	// Spec Section: "Leaf Field Selections"

	var _rulesScalarLeafs = __webpack_require__(85);

	var _rulesScalarLeafs2 = _interopRequireDefault(_rulesScalarLeafs);

	// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

	var _rulesFieldsOnCorrectType = __webpack_require__(86);

	var _rulesFieldsOnCorrectType2 = _interopRequireDefault(_rulesFieldsOnCorrectType);

	// Spec Section: "Fragment spread target defined"

	var _rulesKnownFragmentNames = __webpack_require__(87);

	var _rulesKnownFragmentNames2 = _interopRequireDefault(_rulesKnownFragmentNames);

	// Spec Section: "Fragments must be used"

	var _rulesNoUnusedFragments = __webpack_require__(88);

	var _rulesNoUnusedFragments2 = _interopRequireDefault(_rulesNoUnusedFragments);

	// Spec Section "Fragment spread is possible"

	var _rulesPossibleFragmentSpreads = __webpack_require__(89);

	var _rulesPossibleFragmentSpreads2 = _interopRequireDefault(_rulesPossibleFragmentSpreads);

	// Spec Section "Fragments must not form cycles"

	var _rulesNoFragmentCycles = __webpack_require__(76);

	var _rulesNoFragmentCycles2 = _interopRequireDefault(_rulesNoFragmentCycles);

	// Spec Section "All Variables Used"

	var _rulesNoUnusedVariables = __webpack_require__(91);

	var _rulesNoUnusedVariables2 = _interopRequireDefault(_rulesNoUnusedVariables);

	// Spec Section "All Variable Used Defined"

	var _rulesNoUndefinedVariables = __webpack_require__(92);

	var _rulesNoUndefinedVariables2 = _interopRequireDefault(_rulesNoUndefinedVariables);

	// Spec Section: "Argument Names"

	var _rulesKnownArgumentNames = __webpack_require__(93);

	var _rulesKnownArgumentNames2 = _interopRequireDefault(_rulesKnownArgumentNames);

	// TODO

	var _rulesKnownDirectives = __webpack_require__(94);

	var _rulesKnownDirectives2 = _interopRequireDefault(_rulesKnownDirectives);

	// Spec Section "Argument Values Type Correctness"

	var _rulesArgumentsOfCorrectType = __webpack_require__(95);

	var _rulesArgumentsOfCorrectType2 = _interopRequireDefault(_rulesArgumentsOfCorrectType);

	// TODO

	var _rulesDirectivesOfCorrectType = __webpack_require__(98);

	var _rulesDirectivesOfCorrectType2 = _interopRequireDefault(_rulesDirectivesOfCorrectType);

	// Spec Section "Variable Default Values Are Correctly Typed"

	var _rulesDefaultValuesOfCorrectType = __webpack_require__(99);

	var _rulesDefaultValuesOfCorrectType2 = _interopRequireDefault(_rulesDefaultValuesOfCorrectType);

	// Spec Section "All Variable Usages Are Allowed"

	var _rulesVariablesInAllowedPosition = __webpack_require__(100);

	var _rulesVariablesInAllowedPosition2 = _interopRequireDefault(_rulesVariablesInAllowedPosition);

	// TODO

	var _rulesOverlappingFieldsCanBeMerged = __webpack_require__(101);

	var _rulesOverlappingFieldsCanBeMerged2 = _interopRequireDefault(_rulesOverlappingFieldsCanBeMerged);

	/**
	 * This default set of rules includes all validation rules defined by the
	 * GraphQL spec. The order of these rules is important as errors encountered in
	 * earlier rules will skip later rules, leading to less noise in error output.
	 */
	var allRules = [_rulesKnownTypeNames2['default'], _rulesFragmentsOnCompositeTypes2['default'], _rulesVariablesAreInputTypes2['default'], _rulesScalarLeafs2['default'], _rulesFieldsOnCorrectType2['default'], _rulesKnownFragmentNames2['default'], _rulesNoUnusedFragments2['default'], _rulesPossibleFragmentSpreads2['default'], _rulesNoFragmentCycles2['default'], _rulesNoUndefinedVariables2['default'], _rulesNoUnusedVariables2['default'], _rulesKnownArgumentNames2['default'], _rulesArgumentsOfCorrectType2['default'], _rulesKnownDirectives2['default'], _rulesDirectivesOfCorrectType2['default'], _rulesDefaultValuesOfCorrectType2['default'], _rulesVariablesInAllowedPosition2['default'], _rulesOverlappingFieldsCanBeMerged2['default']];
	exports.allRules = allRules;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Set = __webpack_require__(77)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = NoFragmentCycles;

	var _error = __webpack_require__(48);

	var _languageKinds = __webpack_require__(42);

	var _languageVisitor = __webpack_require__(51);

	var _errors = __webpack_require__(81);

	function NoFragmentCycles(context) {

	  // Gather all the fragment spreads ASTs for each fragment definition.
	  // Importantly this does not include inline fragments.
	  var definitions = context.getDocument().definitions;
	  var spreadsInFragment = definitions.reduce(function (map, node) {
	    if (node.kind === _languageKinds.FRAGMENT_DEFINITION) {
	      map[node.name.value] = gatherSpreads(node);
	    }
	    return map;
	  }, {});

	  // Tracks spreads known to lead to cycles to ensure that cycles are not
	  // redundantly reported.
	  var knownToLeadToCycle = new _Set();

	  return {
	    FragmentDefinition: function FragmentDefinition(node) {
	      var errors = [];
	      var initialName = node.name.value;

	      // Array of AST nodes used to produce meaningful errors
	      var spreadPath = [];

	      // This does a straight-forward DFS to find cycles.
	      // It does not terminate when a cycle was found but continues to explore
	      // the graph to find all possible cycles.
	      function detectCycleRecursive(fragmentName) {
	        var spreadNodes = spreadsInFragment[fragmentName];
	        for (var i = 0; i < spreadNodes.length; ++i) {
	          var spreadNode = spreadNodes[i];
	          if (knownToLeadToCycle.has(spreadNode)) {
	            continue;
	          }
	          if (spreadNode.name.value === initialName) {
	            var cyclePath = spreadPath.concat(spreadNode);
	            cyclePath.forEach(function (spread) {
	              return knownToLeadToCycle.add(spread);
	            });
	            errors.push(new _error.GraphQLError((0, _errors.cycleErrorMessage)(initialName, spreadPath.map(function (s) {
	              return s.name.value;
	            })), cyclePath));
	            continue;
	          }
	          if (spreadPath.some(function (spread) {
	            return spread === spreadNode;
	          })) {
	            continue;
	          }

	          spreadPath.push(spreadNode);
	          detectCycleRecursive(spreadNode.name.value);
	          spreadPath.pop();
	        }
	      }

	      detectCycleRecursive(initialName);

	      if (errors.length > 0) {
	        return errors;
	      }
	    }
	  };
	}

	/**
	 * Given an operation or fragment AST node, gather all the
	 * named spreads defined within the scope of the fragment
	 * or operation
	 */
	function gatherSpreads(node) {
	  var spreadNodes = [];
	  (0, _languageVisitor.visit)(node, {
	    FragmentSpread: function FragmentSpread(spread) {
	      spreadNodes.push(spread);
	    }
	  });
	  return spreadNodes;
	}
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(15);
	__webpack_require__(21);
	__webpack_require__(79);
	__webpack_require__(80);
	module.exports = __webpack_require__(4).core.Set;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(63);

	// 23.2 Set Objects
	__webpack_require__(64)('Set', function(get){
	  return function Set(){ return get(this, arguments[0]); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	__webpack_require__(66)('Set');

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _slicedToArray = __webpack_require__(52)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.missingArgMessage = missingArgMessage;
	exports.badValueMessage = badValueMessage;
	exports.defaultForNonNullArgMessage = defaultForNonNullArgMessage;
	exports.badValueForDefaultArgMessage = badValueForDefaultArgMessage;
	exports.undefinedFieldMessage = undefinedFieldMessage;
	exports.fragmentOnNonCompositeErrorMessage = fragmentOnNonCompositeErrorMessage;
	exports.inlineFragmentOnNonCompositeErrorMessage = inlineFragmentOnNonCompositeErrorMessage;
	exports.unknownArgMessage = unknownArgMessage;
	exports.unknownTypeMessage = unknownTypeMessage;
	exports.undefinedVarMessage = undefinedVarMessage;
	exports.undefinedVarByOpMessage = undefinedVarByOpMessage;
	exports.unusedFragMessage = unusedFragMessage;
	exports.unusedVariableMessage = unusedVariableMessage;
	exports.typeIncompatibleSpreadMessage = typeIncompatibleSpreadMessage;
	exports.typeIncompatibleAnonSpreadMessage = typeIncompatibleAnonSpreadMessage;
	exports.noSubselectionAllowedMessage = noSubselectionAllowedMessage;
	exports.requiredSubselectionMessage = requiredSubselectionMessage;
	exports.nonInputTypeOnVarMessage = nonInputTypeOnVarMessage;
	exports.cycleErrorMessage = cycleErrorMessage;
	exports.unknownDirectiveMessage = unknownDirectiveMessage;
	exports.misplacedDirectiveMessage = misplacedDirectiveMessage;
	exports.missingDirectiveValueMessage = missingDirectiveValueMessage;
	exports.noDirectiveValueMessage = noDirectiveValueMessage;
	exports.badDirectiveValueMessage = badDirectiveValueMessage;
	exports.badVarPosMessage = badVarPosMessage;
	exports.fieldsConflictMessage = fieldsConflictMessage;

	function missingArgMessage(fieldName, argName, typeName) {
	  return 'Field ' + fieldName + ' argument ' + argName + ' of type ' + typeName + ', is ' + 'required but not provided.';
	}

	function badValueMessage(argName, typeName, value) {
	  return 'Argument ' + argName + ' expected type ' + typeName + ' but got: ' + value + '.';
	}

	function defaultForNonNullArgMessage(varName, typeName, guessTypeName) {
	  return 'Variable $' + varName + ' of type ' + typeName + ' ' + 'is required and will never use the default value. ' + ('Perhaps you meant to use type ' + guessTypeName + '.');
	}

	function badValueForDefaultArgMessage(varName, typeName, value) {
	  return 'Variable $' + varName + ' of type ' + typeName + ' has invalid default ' + ('value: ' + value + '.');
	}

	function undefinedFieldMessage(field, type) {
	  return 'Cannot query field ' + field + ' on ' + type;
	}

	function fragmentOnNonCompositeErrorMessage(fragName, typeName) {
	  return 'Fragment "' + fragName + '" cannot condition on non composite ' + ('type "' + typeName + '".');
	}

	function inlineFragmentOnNonCompositeErrorMessage(typeName) {
	  return 'Fragment cannot condition on non composite type "' + typeName + '".';
	}

	function unknownArgMessage(argName, fieldName, typeName) {
	  return 'Unknown argument ' + argName + ' on field ' + fieldName + ' ' + ('of type ' + typeName + '.');
	}

	function unknownTypeMessage(typeName) {
	  return 'Unknown type ' + typeName + '.';
	}

	function undefinedVarMessage(varName) {
	  return 'Variable $' + varName + ' is not defined.';
	}

	function undefinedVarByOpMessage(varName, opName) {
	  return 'Variable $' + varName + ' is not defined by operation ' + opName + '.';
	}

	function unusedFragMessage(fragName) {
	  return 'Fragment ' + fragName + ' is not used.';
	}

	function unusedVariableMessage(varName) {
	  return 'Variable $' + varName + ' is not used.';
	}

	function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
	  return 'Fragment "' + fragName + '" cannot be spread here as objects of ' + ('type "' + parentType + '" can never be of type "' + fragType + '".');
	}

	function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
	  return 'Fragment cannot be spread here as objects of ' + ('type "' + parentType + '" can never be of type "' + fragType + '".');
	}

	function noSubselectionAllowedMessage(field, type) {
	  return 'Field "' + field + '" of type ' + type + ' must not have a sub selection.';
	}

	function requiredSubselectionMessage(field, type) {
	  return 'Field "' + field + '" of type ' + type + ' must have a sub selection.';
	}

	function nonInputTypeOnVarMessage(variableName, typeName) {
	  return 'Variable $' + variableName + ' cannot be non ' + ('input type ' + typeName + '.');
	}

	function cycleErrorMessage(fragmentName, spreadNames) {
	  return 'Cannot spread fragment ' + fragmentName + ' within itself' + (spreadNames.length ? ' via ' + spreadNames.join(', ') + '.' : '.');
	}

	function unknownDirectiveMessage(directiveName) {
	  return 'Unknown directive ' + directiveName + '.';
	}

	function misplacedDirectiveMessage(directiveName, placement) {
	  return 'Directive ' + directiveName + ' may not be used on ' + placement + '.';
	}

	function missingDirectiveValueMessage(directiveName, typeName) {
	  return 'Directive ' + directiveName + ' expects a value of type ' + typeName + '.';
	}

	function noDirectiveValueMessage(directiveName) {
	  return 'Directive ' + directiveName + ' expects no value.';
	}

	function badDirectiveValueMessage(directiveName, typeName, value) {
	  return 'Directive ' + directiveName + ' expected type ' + typeName + ' but ' + ('got: ' + value + '.');
	}

	function badVarPosMessage(varName, varType, expectedType) {
	  return 'Variable $' + varName + ' of type ' + varType + ' used in position expecting ' + ('type ' + expectedType + '.');
	}

	function fieldsConflictMessage(responseName, reason) {
	  return 'Fields ' + responseName + ' conflict because ' + reasonMessage(reason) + '.';
	}

	function reasonMessage(reason) {
	  if (Array.isArray(reason)) {
	    return reason.map(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2);

	      var responseName = _ref2[0];
	      var subreason = _ref2[1];
	      return 'subfields ' + responseName + ' conflict because ' + reasonMessage(subreason);
	    }).join(' and ');
	  }
	  return reason;
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = KnownTypeNames;

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	/**
	 * Known type names
	 *
	 * A GraphQL document is only valid if referenced types (specifically
	 * variable definitions and fragment conditions) are defined by the type schema.
	 */

	function KnownTypeNames(context) {
	  return {
	    Name: function Name(node, key) {
	      if (key === 'type' || key === 'typeCondition') {
	        var typeName = node.value;
	        var type = context.getSchema().getType(typeName);
	        if (!type) {
	          return new _error.GraphQLError((0, _errors.unknownTypeMessage)(typeName), [node]);
	        }
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = FragmentsOnCompositeType;

	var _error = __webpack_require__(48);

	var _typeDefinition = __webpack_require__(59);

	var _errors = __webpack_require__(81);

	/**
	 * Fragments on composite type
	 *
	 * Fragments use a type condition to determine if they apply, since fragments
	 * can only be spread into a composite type (object, interface, or union), the
	 * type condition must also be a composite type.
	 */

	function FragmentsOnCompositeType(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var typeName = node.typeCondition.value;
	      var type = context.getSchema().getType(typeName);
	      var isCompositeType = type instanceof _typeDefinition.GraphQLObjectType || type instanceof _typeDefinition.GraphQLInterfaceType || type instanceof _typeDefinition.GraphQLUnionType;
	      if (!isCompositeType) {
	        return new _error.GraphQLError('Fragment cannot condition on non composite type "' + typeName + '".', [node.typeCondition]);
	      }
	    },
	    FragmentDefinition: function FragmentDefinition(node) {
	      var typeName = node.typeCondition.value;
	      var type = context.getSchema().getType(typeName);
	      var isCompositeType = type instanceof _typeDefinition.GraphQLObjectType || type instanceof _typeDefinition.GraphQLInterfaceType || type instanceof _typeDefinition.GraphQLUnionType;
	      if (!isCompositeType) {
	        return new _error.GraphQLError((0, _errors.fragmentOnNonCompositeErrorMessage)(node.name.value, typeName), [node.typeCondition]);
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = VariablesAreInputTypes;

	var _utilsInvariant = __webpack_require__(47);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var _error = __webpack_require__(48);

	var _languagePrinter = __webpack_require__(50);

	var _languageKinds = __webpack_require__(42);

	var _typeDefinition = __webpack_require__(59);

	var _errors = __webpack_require__(81);

	/**
	 * Variables are input types
	 *
	 * A GraphQL operation is only valid if all the variables it defines are of
	 * input types (scalar, enum, or input object).
	 */

	function VariablesAreInputTypes(context) {
	  return {
	    VariableDefinition: function VariableDefinition(node) {
	      var typeName = getTypeASTName(node.type);
	      var type = context.getSchema().getType(typeName);
	      var isInputType = type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType || type instanceof _typeDefinition.GraphQLInputObjectType;
	      if (!isInputType) {
	        var variableName = node.variable.name.value;
	        return new _error.GraphQLError((0, _errors.nonInputTypeOnVarMessage)(variableName, (0, _languagePrinter.print)(node.type)), [node.type]);
	      }
	    }
	  };
	}

	function getTypeASTName(_x) {
	  var _again = true;

	  _function: while (_again) {
	    var typeAST = _x;
	    _again = false;

	    if (typeAST.kind === _languageKinds.NAME) {
	      return typeAST.value;
	    }
	    (0, _utilsInvariant2['default'])(typeAST.type, 'Must be wrapping type');
	    _x = typeAST.type;
	    _again = true;
	    continue _function;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ScalarLeafs;

	var _error = __webpack_require__(48);

	var _typeDefinition = __webpack_require__(59);

	var _errors = __webpack_require__(81);

	/**
	 * Scalar leafs
	 *
	 * A GraphQL document is valid only if all leaf fields (fields without
	 * sub selections) are of scalar or enum types.
	 */

	function ScalarLeafs(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getType();
	      if (type) {
	        if ((0, _typeDefinition.isLeafType)(type)) {
	          if (node.selectionSet) {
	            return new _error.GraphQLError((0, _errors.noSubselectionAllowedMessage)(node.name.value, type), [node.selectionSet]);
	          }
	        } else if (!node.selectionSet) {
	          return new _error.GraphQLError((0, _errors.requiredSubselectionMessage)(node.name.value, type), [node]);
	        }
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = FieldsOnCorrectType;

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	/**
	 * Fields on correct type
	 *
	 * A GraphQL document is only valid if all fields selected are defined by the
	 * parent type, or are an allowed meta field such as __typenamme
	 */

	function FieldsOnCorrectType(context) {
	  return {
	    Field: function Field(node) {
	      var type = context.getParentType();
	      if (type) {
	        var fieldDef = context.getFieldDef();
	        if (!fieldDef) {
	          return new _error.GraphQLError((0, _errors.undefinedFieldMessage)(node.name.value, type.name), [node]);
	        }
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = KnownFragmentNames;

	var _error = __webpack_require__(48);

	/**
	 * Known fragment names
	 *
	 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
	 * to fragments defined in the same document.
	 */

	function KnownFragmentNames(context) {
	  return {
	    FragmentSpread: function FragmentSpread(node) {
	      var fragmentName = node.name.value;
	      var fragment = context.getFragment(fragmentName);
	      if (!fragment) {
	        return new _error.GraphQLError('Undefined fragment ' + fragmentName + '.', [node.name]);
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = NoUnusedFragments;

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	/**
	 * No unused fragments
	 *
	 * A GraphQL document is only valid if all fragment definitions are spread
	 * within operations, or spread within other fragments spread within operations.
	 */

	function NoUnusedFragments(context) {
	  var fragmentDefs = [];
	  var spreadsWithinOperation = [];
	  var fragAdjacencies = {};
	  var spreadNames = {};

	  return {
	    OperationDefinition: function OperationDefinition() {
	      spreadNames = {};
	      spreadsWithinOperation.push(spreadNames);
	    },
	    FragmentDefinition: function FragmentDefinition(def) {
	      fragmentDefs.push(def);
	      spreadNames = {};
	      fragAdjacencies[def.name.value] = spreadNames;
	    },
	    FragmentSpread: function FragmentSpread(spread) {
	      spreadNames[spread.name.value] = true;
	    },
	    Document: {
	      leave: function leave() {
	        var fragmentNameUsed = {};
	        var reduceSpreadFragments = function reduceSpreadFragments(spreads) {
	          var keys = _Object$keys(spreads);
	          keys.forEach(function (fragName) {
	            if (fragmentNameUsed[fragName] !== true) {
	              fragmentNameUsed[fragName] = true;
	              reduceSpreadFragments(fragAdjacencies[fragName]);
	            }
	          });
	        };
	        spreadsWithinOperation.forEach(reduceSpreadFragments);
	        var errors = fragmentDefs.filter(function (def) {
	          return fragmentNameUsed[def.name.value] !== true;
	        }).map(function (def) {
	          return new _error.GraphQLError((0, _errors.unusedFragMessage)(def.name.value), [def]);
	        });
	        if (errors.length > 0) {
	          return errors;
	        }
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = PossibleFragmentSpreads;

	var _error = __webpack_require__(48);

	var _typeDefinition = __webpack_require__(59);

	var _utilsKeyMap = __webpack_require__(90);

	var _utilsKeyMap2 = _interopRequireDefault(_utilsKeyMap);

	var _errors = __webpack_require__(81);

	/**
	 * Possible fragment spread
	 *
	 * A fragment spread is only valid if the type condition could ever possibly
	 * be true: if there is a non-empty intersection of the possible parent types,
	 * and possible types which pass the type condition.
	 */

	function PossibleFragmentSpreads(context) {
	  return {
	    InlineFragment: function InlineFragment(node) {
	      var fragType = (0, _typeDefinition.getUnmodifiedType)(context.getType());
	      var parentType = context.getParentType();
	      if (fragType && parentType && !doTypesOverlap(fragType, parentType)) {
	        return new _error.GraphQLError((0, _errors.typeIncompatibleAnonSpreadMessage)(parentType, fragType), [node]);
	      }
	    },
	    FragmentSpread: function FragmentSpread(node) {
	      var fragName = node.name.value;
	      var fragType = (0, _typeDefinition.getUnmodifiedType)(getFragmentType(context, fragName));
	      var parentType = context.getParentType();
	      if (fragType && parentType && !doTypesOverlap(fragType, parentType)) {
	        return new _error.GraphQLError((0, _errors.typeIncompatibleSpreadMessage)(fragName, parentType, fragType), [node]);
	      }
	    }
	  };
	}

	function getFragmentType(context, name) {
	  var frag = context.getFragment(name);
	  return frag && context.getSchema().getType(frag.typeCondition.value);
	}

	function doTypesOverlap(t1, t2) {
	  if (t1 === t2) {
	    return true;
	  }
	  if (t1 instanceof _typeDefinition.GraphQLObjectType) {
	    if (t2 instanceof _typeDefinition.GraphQLObjectType) {
	      return false;
	    }
	    return t2.getPossibleTypes().indexOf(t1) !== -1;
	  }
	  if (t1 instanceof _typeDefinition.GraphQLInterfaceType || t1 instanceof _typeDefinition.GraphQLUnionType) {
	    if (t2 instanceof _typeDefinition.GraphQLObjectType) {
	      return t1.getPossibleTypes().indexOf(t2) !== -1;
	    }
	    var t1TypeNames = (0, _utilsKeyMap2['default'])(t1.getPossibleTypes(), function (type) {
	      return type.name;
	    });
	    return t2.getPossibleTypes().some(function (type) {
	      return t1TypeNames[type.name];
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	"use strict";

	var _Object$defineProperty = __webpack_require__(2)["default"];

	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = keyMap;

	function keyMap(list, keyFn) {
	  return list.reduce(function (map, item) {
	    return (map[keyFn(item)] = item, map);
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = NoUnusedVariables;

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	/**
	 * No unused variables
	 *
	 * A GraphQL operation is only valid if all variables defined by an operation
	 * are used, either directly or within a spread fragment.
	 */

	function NoUnusedVariables(context) {
	  var visitedFragmentNames = {};
	  var variableDefs = [];
	  var variableNameUsed = {};

	  return {
	    // Visit FragmentDefinition after visiting FragmentSpread
	    visitSpreadFragments: true,

	    OperationDefinition: {
	      enter: function enter() {
	        visitedFragmentNames = {};
	        variableDefs = [];
	        variableNameUsed = {};
	      },
	      leave: function leave() {
	        var errors = variableDefs.filter(function (def) {
	          return variableNameUsed[def.variable.name.value] !== true;
	        }).map(function (def) {
	          return new _error.GraphQLError((0, _errors.unusedVariableMessage)(def.variable.name.value), [def]);
	        });
	        if (errors.length > 0) {
	          return errors;
	        }
	      }
	    },
	    VariableDefinition: function VariableDefinition(def) {
	      variableDefs.push(def);
	      // Do not visit deeper, or else the defined variable name will be visited.
	      return false;
	    },
	    Variable: function Variable(variable) {
	      variableNameUsed[variable.name.value] = true;
	    },
	    FragmentSpread: function FragmentSpread(spreadAST) {
	      // Only visit fragments of a particular name once per operation
	      if (visitedFragmentNames[spreadAST.name.value] === true) {
	        return false;
	      }
	      visitedFragmentNames[spreadAST.name.value] = true;
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = NoUndefinedVariables;

	var _error = __webpack_require__(48);

	var _languageKinds = __webpack_require__(42);

	var _errors = __webpack_require__(81);

	/**
	 * No undefined variables
	 *
	 * A GraphQL operation is only valid if all variables encountered, both directly
	 * and via fragment spreads, are defined by that operation.
	 */

	function NoUndefinedVariables(context) {
	  var operation;
	  var visitedFragmentNames = {};
	  var definedVariableNames = {};

	  return {
	    // Visit FragmentDefinition after visiting FragmentSpread
	    visitSpreadFragments: true,

	    OperationDefinition: function OperationDefinition(node) {
	      operation = node;
	      visitedFragmentNames = {};
	      definedVariableNames = {};
	    },
	    VariableDefinition: function VariableDefinition(def) {
	      definedVariableNames[def.variable.name.value] = true;
	    },
	    Variable: function Variable(variable, key, parent, path, ancestors) {
	      var varName = variable.name.value;
	      if (definedVariableNames[varName] !== true) {
	        var withinFragment = ancestors.some(function (node) {
	          return node.kind === _languageKinds.FRAGMENT_DEFINITION;
	        });
	        if (withinFragment && operation && operation.name) {
	          return new _error.GraphQLError((0, _errors.undefinedVarByOpMessage)(varName, operation.name.value), [variable, operation]);
	        }
	        return new _error.GraphQLError((0, _errors.undefinedVarMessage)(varName), [variable]);
	      }
	    },
	    FragmentSpread: function FragmentSpread(spreadAST) {
	      // Only visit fragments of a particular name once per operation
	      if (visitedFragmentNames[spreadAST.name.value] === true) {
	        return false;
	      }
	      visitedFragmentNames[spreadAST.name.value] = true;
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = KnownArgumentNames;

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	var _utilsInvariant = __webpack_require__(47);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var _utilsFind = __webpack_require__(74);

	var _utilsFind2 = _interopRequireDefault(_utilsFind);

	/**
	 * Known argument names
	 *
	 * A GraphQL field is only valid if all supplied arguments are defined by
	 * that field.
	 */

	function KnownArgumentNames(context) {
	  return {
	    Argument: function Argument(node) {
	      var fieldDef = context.getFieldDef();
	      if (fieldDef) {
	        var argDef = (0, _utilsFind2['default'])(fieldDef.args, function (arg) {
	          return arg.name === node.name.value;
	        });
	        if (!argDef) {
	          var parentType = context.getParentType();
	          (0, _utilsInvariant2['default'])(parentType);
	          return new _error.GraphQLError((0, _errors.unknownArgMessage)(node.name.value, fieldDef.name, parentType.name), [node]);
	        }
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = KnownDirectives;

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	var _languageKinds = __webpack_require__(42);

	var _utilsFind = __webpack_require__(74);

	var _utilsFind2 = _interopRequireDefault(_utilsFind);

	/**
	 * Known directives
	 *
	 * A GraphQL document is only valid if all `@directives` are known by the
	 * schema and legally positioned.
	 */

	function KnownDirectives(context) {
	  return {
	    Directive: function Directive(node, key, parent, path, ancestors) {
	      var directiveDef = (0, _utilsFind2['default'])(context.getSchema().getDirectives(), function (def) {
	        return def.name === node.name.value;
	      });
	      if (!directiveDef) {
	        return new _error.GraphQLError((0, _errors.unknownDirectiveMessage)(node.name.value), [node]);
	      }
	      var appliedTo = ancestors[ancestors.length - 1];
	      if (appliedTo.kind === _languageKinds.OPERATION_DEFINITION && !directiveDef.onOperation) {
	        return new _error.GraphQLError((0, _errors.misplacedDirectiveMessage)(node.name.value, 'operation'), [node]);
	      }
	      if (appliedTo.kind === _languageKinds.FIELD && !directiveDef.onField) {
	        return new _error.GraphQLError((0, _errors.misplacedDirectiveMessage)(node.name.value, 'field'), [node]);
	      }
	      if ((appliedTo.kind === _languageKinds.FRAGMENT_SPREAD || appliedTo.kind === _languageKinds.INLINE_FRAGMENT || appliedTo.kind === _languageKinds.FRAGMENT_DEFINITION) && !directiveDef.onFragment) {
	        return new _error.GraphQLError((0, _errors.misplacedDirectiveMessage)(node.name.value, 'fragment'), [node]);
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = ArgumentsOfCorrectType;

	var _error = __webpack_require__(48);

	var _languagePrinter = __webpack_require__(50);

	var _typeDefinition = __webpack_require__(59);

	var _utilsKeyMap = __webpack_require__(90);

	var _utilsKeyMap2 = _interopRequireDefault(_utilsKeyMap);

	var _utilsIsValidLiteralValue = __webpack_require__(96);

	var _utilsIsValidLiteralValue2 = _interopRequireDefault(_utilsIsValidLiteralValue);

	var _errors = __webpack_require__(81);

	/**
	 * Argument values of correct type
	 *
	 * A GraphQL document is only valid if all field argument literal values are
	 * of the type expected by their position.
	 */

	function ArgumentsOfCorrectType(context) {
	  return {
	    Field: function Field(fieldAST) {
	      var fieldDef = context.getFieldDef();
	      if (!fieldDef) {
	        return false;
	      }
	      var errors = [];
	      var argASTs = fieldAST.arguments || [];

	      var argASTMap = (0, _utilsKeyMap2['default'])(argASTs, function (arg) {
	        return arg.name.value;
	      });
	      fieldDef.args.forEach(function (argDef) {
	        var argAST = argASTMap[argDef.name];
	        if (!argAST && argDef.type instanceof _typeDefinition.GraphQLNonNull) {
	          errors.push(new _error.GraphQLError((0, _errors.missingArgMessage)(fieldAST.name.value, argDef.name, argDef.type), [fieldAST]));
	        }
	      });

	      var argDefMap = (0, _utilsKeyMap2['default'])(fieldDef.args, function (def) {
	        return def.name;
	      });
	      argASTs.forEach(function (argAST) {
	        var argDef = argDefMap[argAST.name.value];
	        if (argDef && !(0, _utilsIsValidLiteralValue2['default'])(argAST.value, argDef.type)) {
	          errors.push(new _error.GraphQLError((0, _errors.badValueMessage)(argAST.name.value, argDef.type, (0, _languagePrinter.print)(argAST.value)), [argAST.value]));
	        }
	      });

	      if (errors.length > 0) {
	        return errors;
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = isValidLiteralValue;

	var _languageKinds = __webpack_require__(42);

	var _typeDefinition = __webpack_require__(59);

	var _keyMap = __webpack_require__(90);

	var _keyMap2 = _interopRequireDefault(_keyMap);

	var _isNullish = __webpack_require__(97);

	var _isNullish2 = _interopRequireDefault(_isNullish);

	/**
	 * Utility for validators which determines if a value literal AST is valid given
	 * an input type.
	 *
	 * Note that this only validates literal values, variables are assumed to
	 * provide values of the correct type.
	 */

	function isValidLiteralValue(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var valueAST = _x,
	        type = _x2;
	    itemType = fields = fieldASTs = fieldASTMap = isMissingFields = undefined;
	    _again = false;

	    // A value can only be not provided if the type is nullable.
	    if (!valueAST) {
	      return !(type instanceof _typeDefinition.GraphQLNonNull);
	    }

	    // Unwrap non-null.
	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      _x = valueAST;
	      _x2 = type.ofType;
	      _again = true;
	      continue _function;
	    }

	    // This function only tests literals, and assumes variables will provide
	    // values of the correct type.
	    if (valueAST.kind === _languageKinds.VARIABLE) {
	      return true;
	    }

	    // Lists accept a non-list value as a list of one.
	    if (type instanceof _typeDefinition.GraphQLList) {
	      var itemType = type.ofType;
	      if (valueAST.kind === _languageKinds.ARRAY) {
	        return valueAST.values.every(function (itemAST) {
	          return isValidLiteralValue(itemAST, itemType);
	        });
	      } else {
	        _x = valueAST;
	        _x2 = itemType;
	        _again = true;
	        continue _function;
	      }
	    }

	    // Scalar/Enum input checks to ensure the type can coerce the value to
	    // a non-null value.
	    if (type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType) {
	      return !(0, _isNullish2['default'])(type.coerceLiteral(valueAST));
	    }

	    // Input objects check each defined field, ensuring it is of the correct
	    // type and provided if non-nullable.
	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      var fields = type.getFields();
	      if (valueAST.kind !== _languageKinds.OBJECT) {
	        return false;
	      }
	      var fieldASTs = valueAST.fields;
	      var fieldASTMap = (0, _keyMap2['default'])(fieldASTs, function (field) {
	        return field.name.value;
	      });
	      var isMissingFields = _Object$keys(fields).some(function (fieldName) {
	        return !fieldASTMap[fieldName] && fields[fieldName].type instanceof _typeDefinition.GraphQLNonNull;
	      });
	      if (isMissingFields) {
	        return false;
	      }
	      return fieldASTs.every(function (fieldAST) {
	        return fields[fieldAST.name.value] && isValidLiteralValue(fieldAST.value, fields[fieldAST.name.value].type);
	      });
	    }

	    // Any other kind of type is not an input type, and a literal cannot be used.
	    return false;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	/**
	 * Returns true if a value is null, undefined, or NaN.
	 */
	"use strict";

	var _Object$defineProperty = __webpack_require__(2)["default"];

	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = isNullish;

	function isNullish(value) {
	  return value === null || value === undefined || value !== value;
	}

	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = DirectivesOfCorrectType;

	var _error = __webpack_require__(48);

	var _languagePrinter = __webpack_require__(50);

	var _typeDefinition = __webpack_require__(59);

	var _utilsIsValidLiteralValue = __webpack_require__(96);

	var _utilsIsValidLiteralValue2 = _interopRequireDefault(_utilsIsValidLiteralValue);

	var _utilsFind = __webpack_require__(74);

	var _utilsFind2 = _interopRequireDefault(_utilsFind);

	var _errors = __webpack_require__(81);

	/**
	 * Directive values of correct type
	 *
	 * A GraphQL document is only valid if all literal directive values are of the
	 * correct expected type.
	 */

	function DirectivesOfCorrectType(context) {
	  return {
	    Directive: function Directive(node) {
	      var directiveName = node.name.value;
	      var valueAST = node.value;

	      var directiveDef = (0, _utilsFind2['default'])(context.getSchema().getDirectives(), function (def) {
	        return def.name === directiveName;
	      });
	      if (!directiveDef) {
	        return false;
	      }
	      var typeDef = directiveDef.type;

	      if (!valueAST && typeDef instanceof _typeDefinition.GraphQLNonNull) {
	        return new _error.GraphQLError((0, _errors.missingDirectiveValueMessage)(directiveName, typeDef), [node]);
	      }

	      if (!typeDef && valueAST) {
	        return new _error.GraphQLError((0, _errors.noDirectiveValueMessage)(directiveName), [valueAST]);
	      }

	      if (typeDef && valueAST && !(0, _utilsIsValidLiteralValue2['default'])(valueAST, typeDef)) {
	        return new _error.GraphQLError((0, _errors.badDirectiveValueMessage)(directiveName, typeDef, (0, _languagePrinter.print)(valueAST)), [valueAST]);
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = DefaultValuesOfCorrectType;

	var _error = __webpack_require__(48);

	var _languagePrinter = __webpack_require__(50);

	var _typeDefinition = __webpack_require__(59);

	var _utilsIsValidLiteralValue = __webpack_require__(96);

	var _utilsIsValidLiteralValue2 = _interopRequireDefault(_utilsIsValidLiteralValue);

	var _errors = __webpack_require__(81);

	/**
	 * Variable default values of correct type
	 *
	 * A GraphQL document is only valid if all variable default values are of the
	 * type expected by their definition.
	 */

	function DefaultValuesOfCorrectType(context) {
	  return {
	    VariableDefinition: function VariableDefinition(varDefAST) {
	      var name = varDefAST.variable.name.value;
	      var defaultValue = varDefAST.defaultValue;
	      var type = context.getInputType();
	      if (type instanceof _typeDefinition.GraphQLNonNull && defaultValue) {
	        return new _error.GraphQLError((0, _errors.defaultForNonNullArgMessage)(name, type, type.ofType), [defaultValue]);
	      }
	      if (type && defaultValue && !(0, _utilsIsValidLiteralValue2['default'])(defaultValue, type)) {
	        return new _error.GraphQLError((0, _errors.badValueForDefaultArgMessage)(name, type, (0, _languagePrinter.print)(defaultValue)), [defaultValue]);
	      }
	    }
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = VariablesInAllowedPosition;

	var _utilsTypeFromAST = __webpack_require__(73);

	var _utilsTypeFromAST2 = _interopRequireDefault(_utilsTypeFromAST);

	var _error = __webpack_require__(48);

	var _typeDefinition = __webpack_require__(59);

	var _errors = __webpack_require__(81);

	/**
	 * Variables passed to field arguments conform to type
	 */

	function VariablesInAllowedPosition(context) {
	  var varDefMap = {};
	  var visitedFragmentNames = {};

	  return {
	    // Visit FragmentDefinition after visiting FragmentSpread
	    visitSpreadFragments: true,

	    OperationDefinition: function OperationDefinition() {
	      varDefMap = {};
	      visitedFragmentNames = {};
	    },
	    VariableDefinition: function VariableDefinition(varDefAST) {
	      varDefMap[varDefAST.variable.name.value] = varDefAST;
	    },
	    FragmentSpread: function FragmentSpread(spreadAST) {
	      // Only visit fragments of a particular name once per operation
	      if (visitedFragmentNames[spreadAST.name.value]) {
	        return false;
	      }
	      visitedFragmentNames[spreadAST.name.value] = true;
	    },
	    Variable: function Variable(variableAST) {
	      var varName = variableAST.name.value;
	      var varDef = varDefMap[varName];
	      var varType = varDef && (0, _utilsTypeFromAST2['default'])(context.getSchema(), varDef.type);
	      var inputType = context.getInputType();
	      if (varType && inputType && !varTypeAllowedForType(effectiveType(varType, varDef), inputType)) {
	        return new _error.GraphQLError((0, _errors.badVarPosMessage)(varName, varType, inputType), [variableAST]);
	      }
	    }
	  };
	}

	// If a variable definition has a default value, it's effectively non-null.
	function effectiveType(varType, varDef) {
	  return !varDef.defaultValue || varType instanceof _typeDefinition.GraphQLNonNull ? varType : new _typeDefinition.GraphQLNonNull(varType);
	}

	// A var type is allowed if it is the same or more strict than the expected
	// type. It can be more strict if the variable type is non-null when the
	// expected type is nullable. If both are list types, the variable item type can
	// be more strict than the expected item type.
	function varTypeAllowedForType(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var varType = _x,
	        expectedType = _x2;
	    _again = false;

	    if (expectedType instanceof _typeDefinition.GraphQLNonNull) {
	      if (varType instanceof _typeDefinition.GraphQLNonNull) {
	        _x = varType.ofType;
	        _x2 = expectedType.ofType;
	        _again = true;
	        continue _function;
	      }
	      return false;
	    }
	    if (varType instanceof _typeDefinition.GraphQLNonNull) {
	      _x = varType.ofType;
	      _x2 = expectedType;
	      _again = true;
	      continue _function;
	    }
	    if (varType instanceof _typeDefinition.GraphQLList && expectedType instanceof _typeDefinition.GraphQLList) {
	      _x = varType.ofType;
	      _x2 = expectedType.ofType;
	      _again = true;
	      continue _function;
	    }
	    return varType === expectedType;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// Flow currently disabled for this file.
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(37)['default'];

	var _slicedToArray = __webpack_require__(52)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	var _Map = __webpack_require__(60)['default'];

	var _Set = __webpack_require__(77)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = OverlappingFieldsCanBeMerged;

	// Field name and reason, or field name and list of sub-conflicts.

	var _error = __webpack_require__(48);

	var _errors = __webpack_require__(81);

	var _languagePrinter = __webpack_require__(50);

	var _languageKinds = __webpack_require__(42);

	var _utilsTypeFromAST = __webpack_require__(73);

	var _utilsTypeFromAST2 = _interopRequireDefault(_utilsTypeFromAST);

	var _utilsFind = __webpack_require__(74);

	var _utilsFind2 = _interopRequireDefault(_utilsFind);

	/**
	 * Overlapping fields can be merged
	 *
	 * A selection set is only valid if all fields (including spreading any
	 * fragments) either correspond to distinct response names or can be merged
	 * without ambiguity.
	 */

	function OverlappingFieldsCanBeMerged(context) {
	  var comparedSet = new PairSet();

	  function findConflicts(fieldMap) {
	    var conflicts = [];
	    _Object$keys(fieldMap).forEach(function (responseName) {
	      var fields = fieldMap[responseName];
	      if (fields.length > 1) {
	        for (var i = 0; i < fields.length; i++) {
	          for (var j = i; j < fields.length; j++) {
	            var conflict = findConflict(responseName, fields[i], fields[j]);
	            if (conflict) {
	              conflicts.push(conflict);
	            }
	          }
	        }
	      }
	    });
	    return conflicts;
	  }

	  function findConflict(responseName, pair1, pair2) {
	    var _pair1 = _slicedToArray(pair1, 2);

	    var ast1 = _pair1[0];
	    var def1 = _pair1[1];

	    var _pair2 = _slicedToArray(pair2, 2);

	    var ast2 = _pair2[0];
	    var def2 = _pair2[1];

	    if (ast1 === ast2 || comparedSet.has(ast1, ast2)) {
	      return;
	    }
	    comparedSet.add(ast1, ast2);

	    var name1 = ast1.name.value;
	    var name2 = ast2.name.value;
	    if (name1 !== name2) {
	      return [[responseName, '' + name1 + ' and ' + name2 + ' are different fields'], [ast1, ast2]];
	    }

	    var type1 = def1 && def1.type;
	    var type2 = def2 && def2.type;
	    if (!sameType(type1, type2)) {
	      return [[responseName, 'they return differing types ' + type1 + ' and ' + type2], [ast1, ast2]];
	    }

	    var args1 = ast1.arguments || [];
	    var args2 = ast2.arguments || [];
	    if (!sameNameValuePairs(args1, args2)) {
	      return [[responseName, 'they have differing arguments'], [ast1, ast2]];
	    }

	    var directives1 = ast1.directives || [];
	    var directives2 = ast2.directives || [];
	    if (!sameNameValuePairs(directives1, directives2)) {
	      return [[responseName, 'they have differing directives'], [ast1, ast2]];
	    }

	    var selectionSet1 = ast1.selectionSet;
	    var selectionSet2 = ast2.selectionSet;
	    if (selectionSet1 && selectionSet2) {
	      var visitedFragmentNames = {};
	      var subfieldMap = collectFieldASTsAndDefs(context, type1, selectionSet1, visitedFragmentNames);
	      subfieldMap = collectFieldASTsAndDefs(context, type2, selectionSet2, visitedFragmentNames, subfieldMap);
	      var conflicts = findConflicts(subfieldMap);
	      if (conflicts.length > 0) {
	        return [[responseName, conflicts.map(function (_ref) {
	          var _ref2 = _slicedToArray(_ref, 1);

	          var reason = _ref2[0];
	          return reason;
	        })], conflicts.reduce(function (list, _ref3) {
	          var _ref32 = _slicedToArray(_ref3, 2);

	          var blameNodes = _ref32[1];
	          return list.concat(blameNodes);
	        }, [ast1, ast2])];
	      }
	    }
	  }

	  return {
	    SelectionSet: {
	      // Note: we validate on the reverse traversal so deeper conflicts will be
	      // caught first, for clearer error messages.
	      leave: function leave(selectionSet) {
	        var fieldMap = collectFieldASTsAndDefs(context, context.getType(), selectionSet);
	        var conflicts = findConflicts(fieldMap);
	        if (conflicts.length) {
	          return conflicts.map(function (_ref4) {
	            var _ref42 = _slicedToArray(_ref4, 2);

	            var _ref42$0 = _slicedToArray(_ref42[0], 2);

	            var responseName = _ref42$0[0];
	            var reason = _ref42$0[1];
	            var blameNodes = _ref42[1];
	            return new _error.GraphQLError((0, _errors.fieldsConflictMessage)(responseName, reason), blameNodes);
	          });
	        }
	      }
	    }
	  };
	}

	function sameNameValuePairs(pairs1, pairs2) {
	  if (pairs1.length !== pairs2.length) {
	    return false;
	  }
	  return pairs1.every(function (pair1) {
	    var pair2 = (0, _utilsFind2['default'])(pairs2, function (pair) {
	      return pair.name.value === pair1.name.value;
	    });
	    if (!pair2) {
	      return false;
	    }
	    return sameValue(pair1.value, pair2.value);
	  });
	}

	function sameValue(value1, value2) {
	  return !value1 && !value2 || (0, _languagePrinter.print)(value1) === (0, _languagePrinter.print)(value2);
	}

	function sameType(type1, type2) {
	  return !type1 && !type2 || String(type1) === String(type2);
	}

	/**
	 * Given a selectionSet, adds all of the fields in that selection to
	 * the passed in map of fields, and returns it at the end.
	 *
	 * Note: This is not the same as execution's collectFields because at static
	 * time we do not know what object type will be used, so we unconditionally
	 * spread in all fragments.
	 */
	function collectFieldASTsAndDefs(context, parentType, selectionSet, visitedFragmentNames, astAndDefs) {
	  var _visitedFragmentNames = visitedFragmentNames || {};
	  var _astAndDefs = astAndDefs || {};
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case _languageKinds.FIELD:
	        var fieldAST = selection;
	        var fieldName = fieldAST.name.value;
	        var fieldDef = parentType && parentType.getFields && parentType.getFields()[fieldName];
	        var responseName = fieldAST.alias ? fieldAST.alias.value : fieldName;
	        if (!_astAndDefs[responseName]) {
	          _astAndDefs[responseName] = [];
	        }
	        _astAndDefs[responseName].push([fieldAST, fieldDef]);
	        break;
	      case _languageKinds.INLINE_FRAGMENT:
	        var inlineFragment = selection;
	        _astAndDefs = collectFieldASTsAndDefs(context, (0, _utilsTypeFromAST2['default'])(context.getSchema(), inlineFragment.typeCondition), inlineFragment.selectionSet, _visitedFragmentNames, _astAndDefs);
	        break;
	      case _languageKinds.FRAGMENT_SPREAD:
	        var fragmentSpread = selection;
	        var fragName = fragmentSpread.name.value;
	        if (_visitedFragmentNames[fragName]) {
	          continue;
	        }
	        _visitedFragmentNames[fragName] = true;
	        var fragment = context.getFragment(fragName);
	        if (!fragment) {
	          continue;
	        }
	        _astAndDefs = collectFieldASTsAndDefs(context, (0, _utilsTypeFromAST2['default'])(context.getSchema(), fragment.typeCondition), fragment.selectionSet, _visitedFragmentNames, _astAndDefs);
	        break;
	    }
	  }
	  return _astAndDefs;
	}

	/**
	 * A way to keep track of pairs of things when the ordering of the pair does
	 * not matter. We do this by maintaining a sort of double adjacency sets.
	 */

	var PairSet = (function () {
	  function PairSet() {
	    _classCallCheck(this, PairSet);

	    this._data = new _Map();
	  }

	  _createClass(PairSet, [{
	    key: 'has',
	    value: function has(a, b) {
	      var first = this._data.get(a);
	      return first && first.has(b);
	    }
	  }, {
	    key: 'add',
	    value: function add(a, b) {
	      _pairSetAdd(this._data, a, b);
	      _pairSetAdd(this._data, b, a);
	    }
	  }]);

	  return PairSet;
	})();

	function _pairSetAdd(data, a, b) {
	  var set = data.get(a);
	  if (!set) {
	    set = new _Set();
	    data.set(a, set);
	  }
	  set.add(b);
	}
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Terminology
	 *
	 * "Definitions" are the generic name for top-level statements in the document.
	 * Examples of this include:
	 * 1) Operations (such as a query)
	 * 2) Fragments
	 *
	 * "Operations" are a generic name for requests in the document.
	 * Examples of this include:
	 * 1) query,
	 * 2) mutation
	 *
	 * "Selections" are the statements that can appear legally and at
	 * single level of the query. These include:
	 * 1) field references e.g "a"
	 * 2) fragment "spreads" e.g. "...c"
	 * 3) inline fragment "spreads" e.g. "...on Type { a }"
	 */

	/**
	 * Data that must be available at all points during query execution.
	 *
	 * Namely, schema of the type system that is currently executing,
	 * and the fragments defined in the query document
	 */

	/**
	 * The result of exeution. `data` is the result of executing the
	 * query, `errors` is null if no errors occurred, and is a
	 * non-empty array if an error occurred.
	 */

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Promise = __webpack_require__(7)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.execute = execute;

	var _error = __webpack_require__(48);

	var _utilsInvariant = __webpack_require__(47);

	var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

	var _utilsTypeFromAST = __webpack_require__(73);

	var _utilsTypeFromAST2 = _interopRequireDefault(_utilsTypeFromAST);

	var _utilsIsNullish = __webpack_require__(97);

	var _utilsIsNullish2 = _interopRequireDefault(_utilsIsNullish);

	var _language = __webpack_require__(49);

	var _values = __webpack_require__(103);

	var _typeDefinition = __webpack_require__(59);

	var _typeIntrospection = __webpack_require__(71);

	var _typeDirectives = __webpack_require__(104);

	/**
	 * Implements the "Evaluating requests" section of the spec.
	 */

	function execute(schema, root, ast, operationName, args) {
	  (0, _utilsInvariant2['default'])(schema, 'Must provide schema');
	  var errors = [];

	  return new _Promise(function (resolve) {
	    var exeContext = buildExecutionContext(schema, root, ast, operationName, args, errors);
	    resolve(executeOperation(exeContext, root, exeContext.operation));
	  })['catch'](function (error) {
	    errors.push(error);
	    return null;
	  }).then(function (data) {
	    if (!errors.length) {
	      return { data: data };
	    }
	    return {
	      data: data,
	      errors: errors.map(_error.formatError)
	    };
	  });
	}

	/**
	 * Constructs a ExecutionContext object from the arguments passed to
	 * execute, which we will pass throughout the other execution methods.
	 */
	function buildExecutionContext(schema, root, ast, operationName, args, errors) {
	  var operations = {};
	  var fragments = {};
	  ast.definitions.forEach(function (statement) {
	    switch (statement.kind) {
	      case _language.Kind.OPERATION_DEFINITION:
	        operations[statement.name ? statement.name.value : ''] = statement;
	        break;
	      case _language.Kind.FRAGMENT_DEFINITION:
	        fragments[statement.name.value] = statement;
	        break;
	    }
	  });
	  if (!operationName && _Object$keys(operations).length !== 1) {
	    throw new _error.GraphQLError('Must provide operation name if query contains multiple operations');
	  }
	  var opName = operationName || _Object$keys(operations)[0];
	  var operation = operations[opName];
	  if (!operation) {
	    throw new _error.GraphQLError('Unknown operation name: ' + opName);
	  }
	  var variables = (0, _values.getVariableValues)(schema, operation.variableDefinitions || [], args || {});
	  var exeContext = { schema: schema, fragments: fragments, root: root, operation: operation, variables: variables, errors: errors };
	  return exeContext;
	}

	/**
	 * Implements the "Evaluating operations" section of the spec.
	 */
	function executeOperation(exeContext, root, operation) {
	  var type = getOperationRootType(exeContext.schema, operation);
	  var fields = collectFields(exeContext, type, operation.selectionSet, {}, {});
	  if (operation.operation === 'mutation') {
	    return executeFieldsSerially(exeContext, type, root, fields);
	  }
	  return executeFields(exeContext, type, root, fields);
	}

	/**
	 * Extracts the root type of the operation from the schema.
	 */
	function getOperationRootType(schema, operation) {
	  switch (operation.operation) {
	    case 'query':
	      return schema.getQueryType();
	    case 'mutation':
	      var mutationType = schema.getMutationType();
	      if (!mutationType) {
	        throw new _error.GraphQLError('Schema is not configured for mutations', [operation]);
	      }
	      return mutationType;
	    default:
	      throw new _error.GraphQLError('Can only execute queries and mutations', [operation]);
	  }
	}

	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "write" mode.
	 */
	function executeFieldsSerially(exeContext, parentType, source, fields) {
	  return _Object$keys(fields).reduce(function (prevPromise, responseName) {
	    return prevPromise.then(function (results) {
	      var fieldASTs = fields[responseName];
	      var result = resolveField(exeContext, parentType, source, fieldASTs);
	      if (result === undefined) {
	        return results;
	      }
	      if (isThenable(result)) {
	        return result.then(function (resolvedResult) {
	          results[responseName] = resolvedResult;
	          return results;
	        });
	      } else {
	        results[responseName] = result;
	      }
	      return results;
	    });
	  }, _Promise.resolve({}));
	}

	/**
	 * Implements the "Evaluating selection sets" section of the spec
	 * for "read" mode.
	 */
	function executeFields(exeContext, parentType, source, fields) {
	  var containsPromise = false;

	  var finalResults = _Object$keys(fields).reduce(function (results, responseName) {
	    var fieldASTs = fields[responseName];
	    var result = resolveField(exeContext, parentType, source, fieldASTs);
	    if (result === undefined) {
	      return results;
	    }
	    results[responseName] = result;
	    if (isThenable(result)) {
	      containsPromise = true;
	    }
	    return results;
	  }, {});

	  // If there are no promises, we can just return the object
	  if (!containsPromise) {
	    return finalResults;
	  }

	  // Otherwise, results is a map from field name to the result
	  // of resolving that field, which is possibly a promise. Return
	  // a promise that will return this same map, but with any
	  // promises replaced with the values they resolved to.
	  return promiseForObject(finalResults);
	}

	/**
	 * Given a selectionSet, adds all of the fields in that selection to
	 * the passed in map of fields, and returns it at the end.
	 */
	function collectFields(exeContext, type, selectionSet, fields, visitedFragmentNames) {
	  for (var i = 0; i < selectionSet.selections.length; i++) {
	    var selection = selectionSet.selections[i];
	    switch (selection.kind) {
	      case _language.Kind.FIELD:
	        if (!shouldIncludeNode(exeContext, selection.directives)) {
	          continue;
	        }
	        var name = getFieldEntryKey(selection);
	        if (!fields[name]) {
	          fields[name] = [];
	        }
	        fields[name].push(selection);
	        break;
	      case _language.Kind.INLINE_FRAGMENT:
	        if (!shouldIncludeNode(exeContext, selection.directives) || !doesFragmentConditionMatch(exeContext, selection, type)) {
	          continue;
	        }
	        collectFields(exeContext, type, selection.selectionSet, fields, visitedFragmentNames);
	        break;
	      case _language.Kind.FRAGMENT_SPREAD:
	        var fragName = selection.name.value;
	        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection.directives)) {
	          continue;
	        }
	        visitedFragmentNames[fragName] = true;
	        var fragment = exeContext.fragments[fragName];
	        if (!fragment || !shouldIncludeNode(exeContext, fragment.directives) || !doesFragmentConditionMatch(exeContext, fragment, type)) {
	          continue;
	        }
	        collectFields(exeContext, type, fragment.selectionSet, fields, visitedFragmentNames);
	        break;
	    }
	  }
	  return fields;
	}

	/**
	 * Determines if a field should be included based on @if and @unless directives.
	 */
	function shouldIncludeNode(exeContext, directives) {
	  var ifDirective = (0, _values.getDirectiveValue)(_typeDirectives.GraphQLIfDirective, directives, exeContext.variables);
	  if (ifDirective !== undefined) {
	    return ifDirective;
	  }

	  var unlessDirective = (0, _values.getDirectiveValue)(_typeDirectives.GraphQLUnlessDirective, directives, exeContext.variables);
	  if (unlessDirective !== undefined) {
	    return !unlessDirective;
	  }

	  return true;
	}

	/**
	 * Determines if a fragment is applicable to the given type.
	 */
	function doesFragmentConditionMatch(exeContext, fragment, type) {
	  var conditionalType = (0, _utilsTypeFromAST2['default'])(exeContext.schema, fragment.typeCondition);
	  if (conditionalType === type) {
	    return true;
	  }
	  if (conditionalType instanceof _typeDefinition.GraphQLInterfaceType || conditionalType instanceof _typeDefinition.GraphQLUnionType) {
	    return conditionalType.isPossibleType(type);
	  }
	  return false;
	}

	/**
	 * A wrapper around Promise.all that operates on an object rather than an
	 * iterable.
	 *
	 * Effectively, this method transforms a `Map<string, Promise<T>>` into
	 * a `Promise<Map<string, T>>`, in the same way that `Promise.all` transforms
	 * a `Array<Promise<T>>` into a `Promise<Array<T>>`.
	 *
	 * This is akin to bluebird's `Promise.props`, but implemented only using
	 * `Promise.all` so it will work with any implementation of ES6 promises.
	 */
	function promiseForObject(object) {
	  var keys = _Object$keys(object);
	  var valuesAndPromises = keys.map(function (name) {
	    return object[name];
	  });
	  return _Promise.all(valuesAndPromises).then(function (values) {
	    return values.reduce(function (resolvedObject, value, i) {
	      resolvedObject[keys[i]] = value;
	      return resolvedObject;
	    }, {});
	  });
	}

	/**
	 * Implements the logic to compute the key of a given field’s entry
	 */
	function getFieldEntryKey(node) {
	  return node.alias ? node.alias.value : node.name.value;
	}

	/**
	 * A wrapper function for resolving the field, that catches the error
	 * and adds it to the context's global if the error is not rethrowable.
	 */
	function resolveField(exeContext, parentType, source, fieldASTs) {
	  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldASTs[0]);
	  if (!fieldDef) {
	    return;
	  }

	  // If the field type is non-nullable, then it is resolved without any
	  // protection from errors.
	  if (fieldDef.type instanceof _typeDefinition.GraphQLNonNull) {
	    return resolveFieldOrError(exeContext, parentType, source, fieldASTs, fieldDef);
	  }

	  // Otherwise, error protection is applied, logging the error and resolving
	  // a null value for this field if one is encountered.
	  try {
	    var result = resolveFieldOrError(exeContext, parentType, source, fieldASTs, fieldDef);
	    if (isThenable(result)) {
	      return result.then(undefined, function (error) {
	        exeContext.errors.push(error);
	        return _Promise.resolve(null);
	      });
	    }
	    return result;
	  } catch (error) {
	    exeContext.errors.push(error);
	    return null;
	  }
	}

	/**
	 * Resolves the field on the given source object. In particular, this
	 * figures out the object that the field returns using the resolve function,
	 * then calls completeField to corece scalars or execute the sub
	 * selection set for objects.
	 */
	function resolveFieldOrError(exeContext, parentType, source, fieldASTs, fieldDef) {
	  var fieldAST = fieldASTs[0];
	  var fieldType = fieldDef.type;
	  var resolveFn = fieldDef.resolve || defaultResolveFn;

	  // Build a JS object of arguments from the field.arguments AST, using the
	  // variables scope to fulfill any variable references.
	  // TODO: find a way to memoize, in case this field is within a Array type.
	  var args = (0, _values.getArgumentValues)(fieldDef.args, fieldAST.arguments, exeContext.variables);

	  try {
	    var result = resolveFn(source, args, exeContext.root,
	    // TODO: provide all fieldASTs, not just the first field
	    fieldAST, fieldType, parentType, exeContext.schema);
	  } catch (error) {
	    throw new _error.GraphQLError(error.message, [fieldAST], error.stack);
	  }

	  if (isThenable(result)) {
	    return result.then(function (resolvedResult) {
	      return completeField(exeContext, fieldType, fieldASTs, resolvedResult);
	    }, function (error) {
	      return _Promise.reject(new _error.GraphQLError(error.message, [fieldAST], error.stack));
	    });
	  }

	  return completeField(exeContext, fieldType, fieldASTs, result);
	}

	/**
	 * Implements the instructions for completeValue as defined in the
	 * "Field entries" section of the spec.
	 *
	 * If the field type is Non-Null, then this recursively completes the value
	 * for the inner type. It throws a field error if that completion returns null,
	 * as per the "Nullability" section of the spec.
	 *
	 * If the field type is a List, then this recursively completes the value
	 * for the inner type on each item in the list.
	 *
	 * If the field type is a Scalar or Enum, ensures the completed value is a legal
	 * value of the type by calling the `coerce` method of GraphQL type definition.
	 *
	 * Otherwise, the field type expects a sub-selection set, and will complete the
	 * value by evaluating all sub-selections.
	 */
	function completeField(exeContext, fieldType, fieldASTs, result) {
	  // If field type is NonNull, complete for inner type, and throw field error
	  // if result is null.
	  if (fieldType instanceof _typeDefinition.GraphQLNonNull) {
	    var completed = completeField(exeContext, fieldType.ofType, fieldASTs, result);
	    if (completed === null) {
	      throw new _error.GraphQLError('Cannot return null for non-nullable type.', fieldASTs);
	    }
	    return completed;
	  }

	  // If result is null-like, return null.
	  if ((0, _utilsIsNullish2['default'])(result)) {
	    return null;
	  }

	  // If field type is List, complete each item in the list with the inner type
	  if (fieldType instanceof _typeDefinition.GraphQLList) {
	    var itemType = fieldType.ofType;
	    (0, _utilsInvariant2['default'])(Array.isArray(result), 'User Error: expected iterable, but did not find one.');
	    return result.map(function (item) {
	      return completeField(exeContext, itemType, fieldASTs, item);
	    });
	  }

	  // If field type is Scalar or Enum, coerce to a valid value, returning null
	  // if coercion is not possible.
	  if (fieldType instanceof _typeDefinition.GraphQLScalarType || fieldType instanceof _typeDefinition.GraphQLEnumType) {
	    (0, _utilsInvariant2['default'])(fieldType.coerce, 'Missing coerce method on type');
	    var coercedResult = fieldType.coerce(result);
	    return (0, _utilsIsNullish2['default'])(coercedResult) ? null : coercedResult;
	  }

	  // Field type must be Object, Interface or Union and expect sub-selections.

	  var objectType = fieldType instanceof _typeDefinition.GraphQLObjectType ? fieldType : fieldType instanceof _typeDefinition.GraphQLInterfaceType || fieldType instanceof _typeDefinition.GraphQLUnionType ? fieldType.resolveType(result) : null;

	  if (!objectType) {
	    return null;
	  }

	  // Collect sub-fields to execute to complete this value.
	  var subFieldASTs = {};
	  var visitedFragmentNames = {};
	  for (var i = 0; i < fieldASTs.length; i++) {
	    var selectionSet = fieldASTs[i].selectionSet;
	    if (selectionSet) {
	      subFieldASTs = collectFields(exeContext, objectType, selectionSet, subFieldASTs, visitedFragmentNames);
	    }
	  }

	  return executeFields(exeContext, objectType, result, subFieldASTs);
	}

	/**
	 * If a resolve function is not given, then a default resolve behavior is used
	 * which takes the property of the source object of the same name as the field
	 * and returns it as the result, or if it's a function, returns the result
	 * of calling that function.
	 */
	function defaultResolveFn(source, args, root, fieldAST) {
	  var property = source[fieldAST.name.value];
	  return typeof property === 'function' ? property.call(source) : property;
	}

	/**
	 * Checks to see if this object acts like a Promise, i.e. has a "then"
	 * function.
	 */
	function isThenable(value) {
	  return value && typeof value === 'object' && typeof value.then === 'function';
	}

	/**
	 * This method looks up the field on the given type defintion.
	 * It has special casing for the two introspection fields, __schema
	 * and __typename. __typename is special becuase it can always be
	 * queried as a field, even in situations where no other fields
	 * are allowed, like on a Union. __schema could get automatically
	 * added to the query type, but that would require mutating type
	 * definitions, which would cause issues.
	 */
	function getFieldDef(schema, parentType, fieldAST) {
	  var name = fieldAST.name.value;
	  if (name === _typeIntrospection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.SchemaMetaFieldDef;
	  } else if (name === _typeIntrospection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
	    return _typeIntrospection.TypeMetaFieldDef;
	  } else if (name === _typeIntrospection.TypeNameMetaFieldDef.name) {
	    return _typeIntrospection.TypeNameMetaFieldDef;
	  }
	  return parentType.getFields()[name];
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.getVariableValues = getVariableValues;
	exports.getArgumentValues = getArgumentValues;
	exports.getDirectiveValue = getDirectiveValue;

	var _error = __webpack_require__(48);

	var _utilsKeyMap = __webpack_require__(90);

	var _utilsKeyMap2 = _interopRequireDefault(_utilsKeyMap);

	var _utilsTypeFromAST = __webpack_require__(73);

	var _utilsTypeFromAST2 = _interopRequireDefault(_utilsTypeFromAST);

	var _utilsIsNullish = __webpack_require__(97);

	var _utilsIsNullish2 = _interopRequireDefault(_utilsIsNullish);

	var _utilsFind = __webpack_require__(74);

	var _utilsFind2 = _interopRequireDefault(_utilsFind);

	var _language = __webpack_require__(49);

	var _languagePrinter = __webpack_require__(50);

	var _typeDefinition = __webpack_require__(59);

	/**
	 * Prepares an object map of variables of the correct type based on the provided
	 * variable definitions and arbitrary input. If the input cannot be coerced
	 * to match the variable definitions, a GraphQLError will be thrown.
	 */

	function getVariableValues(schema, definitionASTs, inputs) {
	  return definitionASTs.reduce(function (values, defAST) {
	    var varName = defAST.variable.name.value;
	    values[varName] = getVariableValue(schema, defAST, inputs[varName]);
	    return values;
	  }, {});
	}

	/**
	 * Prepares an object map of argument values given a list of argument
	 * definitions and list of argument AST nodes.
	 */

	function getArgumentValues(argDefs, argASTs, variables) {
	  if (!argDefs || argDefs.length === 0) {
	    return null;
	  }
	  var argASTMap = argASTs ? (0, _utilsKeyMap2['default'])(argASTs, function (arg) {
	    return arg.name.value;
	  }) : {};
	  return argDefs.reduce(function (result, argDef) {
	    var name = argDef.name;
	    var valueAST = argASTMap[name] && argASTMap[name].value;
	    result[name] = coerceValueAST(argDef.type, valueAST, variables);
	    return result;
	  }, {});
	}

	function getDirectiveValue(directiveDef, directives, variables) {
	  var directiveAST = directives && (0, _utilsFind2['default'])(directives, function (directive) {
	    return directive.name.value === directiveDef.name;
	  });
	  if (directiveAST) {
	    if (!directiveDef.type) {
	      return null;
	    }
	    return coerceValueAST(directiveDef.type, directiveAST.value, variables);
	  }
	}

	/**
	 * Given a variable definition, and any value of input, return a value which
	 * adheres to the variable definition, or throw an error.
	 */
	function getVariableValue(schema, definitionAST, input) {
	  var type = (0, _utilsTypeFromAST2['default'])(schema, definitionAST.type);
	  if (!type) {
	    return null;
	  }
	  if (isValidValue(type, input)) {
	    if ((0, _utilsIsNullish2['default'])(input)) {
	      var defaultValue = definitionAST.defaultValue;
	      if (defaultValue) {
	        return coerceValueAST(type, defaultValue);
	      }
	    }
	    return coerceValue(type, input);
	  }
	  throw new _error.GraphQLError('Variable $' + definitionAST.variable.name.value + ' expected value of type ' + ('' + (0, _languagePrinter.print)(definitionAST.type) + ' but got: ' + JSON.stringify(input) + '.'), [definitionAST]);
	}

	/**
	 * Given a type and any value, return true if that value is valid.
	 */
	function isValidValue(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var type = _x,
	        value = _x2;
	    itemType = fields = undefined;
	    _again = false;

	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      if ((0, _utilsIsNullish2['default'])(value)) {
	        return false;
	      }
	      _x = type.ofType;
	      _x2 = value;
	      _again = true;
	      continue _function;
	    }

	    if ((0, _utilsIsNullish2['default'])(value)) {
	      return true;
	    }

	    if (type instanceof _typeDefinition.GraphQLList) {
	      var itemType = type.ofType;
	      if (Array.isArray(value)) {
	        return value.every(function (item) {
	          return isValidValue(itemType, item);
	        });
	      } else {
	        _x = itemType;
	        _x2 = value;
	        _again = true;
	        continue _function;
	      }
	    }

	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      var fields = type.getFields();
	      return _Object$keys(fields).every(function (fieldName) {
	        return isValidValue(fields[fieldName].type, value[fieldName]);
	      });
	    }

	    if (type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType) {
	      return !(0, _utilsIsNullish2['default'])(type.coerce(value));
	    }

	    return false;
	  }
	}

	/**
	 * Given a type and any value, return a runtime value coerced to match the type.
	 */
	function coerceValue(_x3, _x4) {
	  var _again2 = true;

	  _function2: while (_again2) {
	    var type = _x3,
	        value = _x4;
	    itemType = fields = coerced = undefined;
	    _again2 = false;

	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      // Note: we're not checking that the result of coerceValue is non-null.
	      // We only call this function after calling isValidValue.
	      _x3 = type.ofType;
	      _x4 = value;
	      _again2 = true;
	      continue _function2;
	    }

	    if ((0, _utilsIsNullish2['default'])(value)) {
	      return null;
	    }

	    if (type instanceof _typeDefinition.GraphQLList) {
	      var itemType = type.ofType;
	      // TODO: support iterable input
	      if (Array.isArray(value)) {
	        return value.map(function (item) {
	          return coerceValue(itemType, item);
	        });
	      } else {
	        return [coerceValue(itemType, value)];
	      }
	    }

	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      var fields = type.getFields();
	      return _Object$keys(fields).reduce(function (obj, fieldName) {
	        var field = fields[fieldName];
	        var fieldValue = coerceValue(field.type, value[fieldName]);
	        obj[fieldName] = fieldValue === null ? field.defaultValue : fieldValue;
	        return obj;
	      }, {});
	    }

	    if (type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType) {
	      var coerced = type.coerce(value);
	      if (!(0, _utilsIsNullish2['default'])(coerced)) {
	        return coerced;
	      }
	    }

	    return null;
	  }
	}

	/**
	 * Given a type and a value AST node known to match this type, build a
	 * runtime value.
	 */
	function coerceValueAST(_x5, _x6, _x7) {
	  var _again3 = true;

	  _function3: while (_again3) {
	    var type = _x5,
	        valueAST = _x6,
	        variables = _x7;
	    variableName = itemType = fields = fieldASTs = coerced = undefined;
	    _again3 = false;

	    if (type instanceof _typeDefinition.GraphQLNonNull) {
	      // Note: we're not checking that the result of coerceValueAST is non-null.
	      // We're assuming that this query has been validated and the value used
	      // here is of the correct type.
	      _x5 = type.ofType;
	      _x6 = valueAST;
	      _x7 = variables;
	      _again3 = true;
	      continue _function3;
	    }

	    if (!valueAST) {
	      return null;
	    }

	    if (valueAST.kind === _language.Kind.VARIABLE) {
	      var variableName = valueAST.name.value;
	      if (!variables || !variables.hasOwnProperty(variableName)) {
	        return null;
	      }
	      // Note: we're not doing any checking that this variable is correct. We're
	      // assuming that this query has been validated and the variable usage here
	      // is of the correct type.
	      return variables[variableName];
	    }

	    if (type instanceof _typeDefinition.GraphQLList) {
	      var itemType = type.ofType;
	      if (valueAST.kind === _language.Kind.ARRAY) {
	        return valueAST.values.map(function (itemAST) {
	          return coerceValueAST(itemType, itemAST, variables);
	        });
	      } else {
	        return [coerceValueAST(itemType, valueAST, variables)];
	      }
	    }

	    if (type instanceof _typeDefinition.GraphQLInputObjectType) {
	      var fields = type.getFields();
	      if (valueAST.kind !== _language.Kind.OBJECT) {
	        return null;
	      }
	      var fieldASTs = (0, _utilsKeyMap2['default'])(valueAST.fields, function (field) {
	        return field.name.value;
	      });
	      return _Object$keys(fields).reduce(function (obj, fieldName) {
	        var field = fields[fieldName];
	        var fieldAST = fieldASTs[fieldName];
	        var fieldValue = coerceValueAST(field.type, fieldAST && fieldAST.value, variables);
	        obj[fieldName] = fieldValue === null ? field.defaultValue : fieldValue;
	        return obj;
	      }, {});
	    }

	    if (type instanceof _typeDefinition.GraphQLScalarType || type instanceof _typeDefinition.GraphQLEnumType) {
	      var coerced = type.coerceLiteral(valueAST);
	      if (!(0, _utilsIsNullish2['default'])(coerced)) {
	        return coerced;
	      }
	    }

	    return null;
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	var _definition = __webpack_require__(59);

	var _scalars = __webpack_require__(72);

	/**
	 * Directives are used by the GraphQL runtime as a way of modifying execution
	 * behavior. Type system creators will usually not create these directly.
	 */

	var GraphQLDirective = function GraphQLDirective(config) {
	  _classCallCheck(this, GraphQLDirective);

	  this.name = config.name;
	  this.description = config.description;
	  this.type = config.type;
	  this.onOperation = config.onOperation;
	  this.onFragment = config.onFragment;
	  this.onField = config.onField;
	};

	exports.GraphQLDirective = GraphQLDirective;

	/**
	 * Used to conditionally include fields
	 */
	var GraphQLIfDirective = new GraphQLDirective({
	  name: 'if',
	  description: 'Directs the executor to omit this field if the argument ' + 'provided is false.',
	  type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	  onOperation: false,
	  onFragment: false,
	  onField: true
	});

	exports.GraphQLIfDirective = GraphQLIfDirective;
	/**
	 * Used to conditionally exclude fields
	 */
	var GraphQLUnlessDirective = new GraphQLDirective({
	  name: 'unless',
	  description: 'Directs the executor to omit this field if the argument ' + 'provided is true.',
	  type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
	  onOperation: false,
	  onFragment: false,
	  onField: true
	});
	exports.GraphQLUnlessDirective = GraphQLUnlessDirective;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	/**
	 *  Copyright (c) 2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var _createClass = __webpack_require__(44)['default'];

	var _classCallCheck = __webpack_require__(37)['default'];

	var _Object$defineProperty = __webpack_require__(2)['default'];

	var _Object$keys = __webpack_require__(67)['default'];

	var _interopRequireDefault = __webpack_require__(45)['default'];

	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});

	exports.typeMapReducer = typeMapReducer;

	var _definition = __webpack_require__(59);

	var _directives2 = __webpack_require__(104);

	var _introspection = __webpack_require__(71);

	var _utilsFind = __webpack_require__(74);

	var _utilsFind2 = _interopRequireDefault(_utilsFind);

	/**
	 * Schema Definition
	 *
	 * A Schema is created by supplying the root types of each type of operation,
	 * query and mutation (optional). A schema definition is then supplied to the
	 * validator and executor.
	 *
	 * Example:
	 *
	 *     var MyAppSchema = new GraphQLSchema({
	 *       query: MyAppQueryRootType
	 *       mutation: MyAppMutationRootType
	 *     });
	 *
	 */

	var GraphQLSchema = (function () {
	  function GraphQLSchema(config) {
	    _classCallCheck(this, GraphQLSchema);

	    this._schemaConfig = config;
	  }

	  _createClass(GraphQLSchema, [{
	    key: 'getQueryType',
	    value: function getQueryType() {
	      return this._schemaConfig.query;
	    }
	  }, {
	    key: 'getMutationType',
	    value: function getMutationType() {
	      return this._schemaConfig.mutation;
	    }
	  }, {
	    key: 'getTypeMap',
	    value: function getTypeMap() {
	      return this._typeMap || (this._typeMap = [this.getQueryType(), this.getMutationType(), _introspection.__Schema].reduce(typeMapReducer, {}));
	    }
	  }, {
	    key: 'getType',
	    value: function getType(name) {
	      return this.getTypeMap()[name];
	    }
	  }, {
	    key: 'getDirectives',
	    value: function getDirectives() {
	      return this._directives || (this._directives = [_directives2.GraphQLIfDirective, _directives2.GraphQLUnlessDirective]);
	    }
	  }, {
	    key: 'getDirective',
	    value: function getDirective(name) {
	      return (0, _utilsFind2['default'])(this.getDirectives(), function (directive) {
	        return directive.name === name;
	      });
	    }
	  }]);

	  return GraphQLSchema;
	})();

	exports.GraphQLSchema = GraphQLSchema;

	function typeMapReducer(_x, _x2) {
	  var _again = true;

	  _function: while (_again) {
	    var map = _x,
	        type = _x2;
	    reducedMap = fieldMap = undefined;
	    _again = false;

	    if (type instanceof _definition.GraphQLList || type instanceof _definition.GraphQLNonNull) {
	      _x = map;
	      _x2 = type.ofType;
	      _again = true;
	      continue _function;
	    }
	    if (!type || map[type.name]) {
	      return map;
	    }
	    map[type.name] = type;

	    var reducedMap = map;

	    if (type instanceof _definition.GraphQLUnionType || type instanceof _definition.GraphQLInterfaceType) {
	      reducedMap = type.getPossibleTypes().reduce(typeMapReducer, reducedMap);
	    }

	    if (type instanceof _definition.GraphQLObjectType) {
	      reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
	    }

	    if (type instanceof _definition.GraphQLObjectType || type instanceof _definition.GraphQLInterfaceType) {
	      var fieldMap = type.getFields();
	      _Object$keys(fieldMap).forEach(function (fieldName) {
	        var field = fieldMap[fieldName];
	        if (!field.args) {
	          console.log('WTF ' + field.name + ' has no args?');
	        }
	        var fieldArgTypes = field.args.map(function (arg) {
	          return arg.type;
	        });
	        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
	        reducedMap = typeMapReducer(reducedMap, field.type);
	      });
	    }

	    return reducedMap;
	  }
	}

/***/ }
/******/ ]);