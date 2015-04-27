	/*************

		构造函数中使用,call和原型继承的思考
	*********/
    'use strict'
    function rang(min, max) {
        for(let i = Math.ceil(min); i <= max; i++) {
            return i;
        }
    }
    rang(3,8);

	var Fun1 = function () {
		var ccc = 'static ccc';
		this.static = ccc;
		this.bbb = 'Funbbb';
		//this.aaa = 'Fun1aaa';
		// this.getAttr = function () {

		// 	console.log(ccc)

		// }
		//console.log(this.aaa)
		//return this; 
	}
	Fun1.prototype = {
		constructor : Fun1,
		getAttr : function () {
			console.log(this.aaa +' ' + this.bbb + ' ' + this.static)
		}
	}
	var Fun2 = function () {
		this.aaa = 'aaa';
		//Fun1.call(this);
		
		//console.log(this.aaa)
		
	}
	Fun2.prototype = new Fun1();
	Fun2.prototype.constructor = Fun2;
	 var cccc = new Fun2();
	 //console.log(cccc.constructor === Fun2)
	cccc.getAttr();


var length = 10;
function fn() {
  console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();//这里是把arguments看成了对象
  }
};
 
obj.method(fn, 1);

/****************
类数组转换成数组
*************/

console.log('<br>类数组转换成数组');

var elementsDom = document.getElementsByTagName('*');
elementsDom = Array.prototype.slice.call(elementsDom);
elementsDom.forEach( function(i) {

	console.log(i.nodeName)
})
console.log(typeof elementsDom)