'use strict';
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
	Array.from = (function () {
		var toStr = Object.prototype.toString;
		var isCallable = function (fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function (value) {
			var number = Number(value);
			if (isNaN(number)) { return 0; }
			if (number === 0 || !isFinite(number)) { return number; }
			return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function (value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};

		// The length property of the from method is 1.
		return function from(arrayLike/*, mapFn, thisArg */) {
			// 1. Let C be the this value.
			var C = this;

			// 2. Let items be ToObject(arrayLike).
			var items = Object(arrayLike);

			// 3. ReturnIfAbrupt(items).
			if (arrayLike == null) {
				throw new TypeError("Array.from requires an array-like object - not null or undefined");
			}

			// 4. If mapfn is undefined, then let mapping be false.
			var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
			var T;
			if (typeof mapFn !== 'undefined') {
				// 5. else
				// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
				if (!isCallable(mapFn)) {
					throw new TypeError('Array.from: when provided, the second argument must be a function');
				}

				// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
				if (arguments.length > 2) {
					T = arguments[2];
				}
			}

			// 10. Let lenValue be Get(items, "length").
			// 11. Let len be ToLength(lenValue).
			var len = toLength(items.length);

			// 13. If IsConstructor(C) is true, then
			// 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
			// 14. a. Else, Let A be ArrayCreate(len).
			var A = isCallable(C) ? Object(new C(len)) : new Array(len);

			// 16. Let k be 0.
			var k = 0;
			// 17. Repeat, while k < len… (also steps a - h)
			var kValue;
			while (k < len) {
				kValue = items[k];
				if (mapFn) {
					A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					A[k] = kValue;
				}
				k += 1;
			}
			// 18. Let putStatus be Put(A, "length", len, true).
			A.length = len;
			// 20. Return A.
			return A;
		};
	}());
}
class Greeter {
	constructor(message) {
		this.message = message;
	}

	greet() {
		var element = document.querySelector('#message');
		element.innerHTML = this.message;
	}
}

var greeter = new Greeter('Hello, world!');
greeter.greet();
//set 是一种数据结构,类似于数组,类型为对象,不是数组
let testSet = new Set();
testSet.add(1)
console.log(testSet.has(1));

let testSetArr = new Set([1,1,2,2,4]);



for (let i of testSetArr) {
    console.log('testSetArr'+ i)
}

testSetArr.forEach((value, key) => value*2 );

console.log(typeof testSetArr);
//很方便数组去重,貌似某些brower 不支持
var uniqueArr = Array.from(new Set([1,4]));
console.log(uniqueArr);
//另外的一种去重
let uniqueArr2 = [...testSetArr];
console.log(uniqueArr2)

//实现交集,并集

let a = new Set([1,2,3]);let b = new Set([4,3,2]);
let union = new Set([...a, ...b]);
console.log('并集实现' + [...union]);
// [1,2,3,4]
let intersect = new Set([...a].filter(x => b.has(x)));
console.log('交集实现' + [...intersect]);

//Map

//Generator 函数
function* f() {
    for(var i = 0; true; i++) {
        var reset = yield i;
        if (reset) {
            i = -1
        }
    }
}

var g =f();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));



