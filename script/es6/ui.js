"use strict";
class baseUi {
	constructor(options) {
		this.x = 123;
		if (typeof options === 'object') {
			var arr = Object.keys(options);
			for (let i of arr ){
				this[i] = options[i];
			}
		}

	}
	open() {		
		this.mark = this.mark || document.createElement('div');
		document.body.appendChild(this.mark);
	}
}
class ui_alert extends baseUi {
	constructor(options) {
		super(options)
		console.log(this.x)
	}
	child_open() {
		console.log('oops '+ this.Zindex)
	}
	
	
}



let instanceBase = new baseUi();
instanceBase.open();

let instanceBase2 = new baseUi();
instanceBase2.open();

let instancechild = new ui_alert({childIndex: 'childOpen',Zindex:0});
instancechild.child_open();
instancechild.open();





function ProBase() {
	this.a1 = 0	
}
ProBase.prototype = {
	constructor: ProBase,
	//a1: 0,
	a2: function () {
		var self = this;
		console.log(this);
		this.a1 += 1;
		//ProBase.prototype.a1 += 1;
		//console.log(ProBase.prototype.a1)
	}
 }

function Child() {}

Child.prototype = new ProBase;
Child.prototype.constructor = Child;

var child = new Child;

console.log('a1 '+child.a1);
child.a2();
console.log('a1 '+child.a1);

var child2 = new Child;
console.log('a1 '+child2.a1);
child2.a2()