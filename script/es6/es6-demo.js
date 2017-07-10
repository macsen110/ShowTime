'use strict';
// Production steps of ECMA-262, Edition 6, 22.1.2.1
class Greeter {
	constructor(message) {
		this.message = message;
	}
	greet() {
		var element = document.querySelector('#message');
		element.innerHTML = this.message;
	}
}

var greeter = new Greeter('class test Hello, world!');
greeter.greet();
class GreeterChild extends Greeter {
	constructor(msg,oops) {
		super(msg);
		this.oops = oops
	}
	greet() {
		var element = document.querySelector('#extends-message');
		element.innerHTML = this.message + this.oops;
	}
}

var greeterChild = new GreeterChild('extend class test oops','the second argument');
greeterChild.greet();


console.log('%cSet 是一种数据结构,类似于数组,类型为对象,不是数组,具有size,add,delete,has,clear,values方法',"color:blue;font-size:x-large");
let testSet = new Set();
testSet.add(1)
console.log('Set 数据方法返回布尔值',testSet.has(1));
let testSetArr = new Set([1,1,2,2,4]);
for (let i of testSetArr) {
    console.log('for of 循环 set 数据格式'+ i)
}
//很方便数组去重,貌似某些brower 不支持
var uniqueArr = Array.from(new Set([1,4]));
console.log('数组去重Array.from(Set)',uniqueArr);
//另外的一种去重
let uniqueArr2 = [...testSetArr];
console.log('数组扩展运算符去重"[...Set]"',uniqueArr2)

//实现交集,并集

let a = new Set([1,2,3]);let b = new Set([4,3,2]);
let union = new Set([...a, ...b]);
console.log('并集实现' + [...union]);
// [1,2,3,4]
let intersect = new Set([...a].filter(x => b.has(x)));
console.log('交集实现' + [...intersect]);



console.log('%cMap 数据结构,类似与对象,键值对的集合,键的范围不限于字符串,方法size,set,get,delete,has',"color:blue;font-size:x-large");
let map = new Map([["aa","namea"],["bb","namebb"]]);
console.log("map size 属性 代表长度",map.size)

console.log('%cES6 函数扩展','color:blue;font-size:x-large')
//函数的默认参数
function defaulParamstFun(params=0) {
	console.log('函数的默认参数,必须是函数的尾部参数',params)
}
defaulParamstFun();

//函数的rest参数,(...变量名);rest 参数搭配的变量名是一个数组,该变量把多余的参数放入其中,rest参数后不能有其他参数
function restFun(...params) {
	var sum = 0;
	for (let i of params) {
		sum += i
	} 
	return sum
}

console.log('函数的rest参数,(...变量名);rest 参数搭配的变量名是一个数组,该变量把多余的参数放入其中',restFun(1,2,3))

//扩展运算符...好比rest参数的逆运算,把一个数组转换成逗号分隔的参数序列
console.log('Math.max(...[1,2,3])',Math.max(...[1,2,3]))
var spreatString = [..."hello"];
console.log('扩展运算符还可以将字符串扩展成数组', spreatString)
console.log('扩展运算符内部调用的是数据结构的Iterator接口,因此只要具有Iterator接口的对象,都可以使用扩展运算符')




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

//es6 js模板
var tempVarible = 'i \'m ok';
var c = `<div>this is template in es6</div>
<div>aa${tempVarible}aa</div>`;
document.body.insertAdjacentHTML('beforeend',c);
console.log(String.raw`aaa`);
console.log(Array.of(1,2,3,4));
let [DestructA,DestructB] = [0,1];
console.log(DestructA);
var {foo, bar} = {foo:'xxxx', bar:'yyyy'};



if (2>1) {
	let bLet = [3,2,1];
	bLet.forEach(x => {console.log('箭头函数',x);})
}




//import module in es6





