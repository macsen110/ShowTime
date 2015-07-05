"use strict";
class baseUi {
	constructor(options) {
		if (typeof options === 'object') {
			Object.assign(this, options);
			//var arr = Object.keys(options);
			//let {[..arr]} = this;
			// for (let i of arr ){
			// 	this[i] = options[i];
			// }
		}

	}
	open() {
		this.mask = this.mask || document.createElement('div');
		this.mask.className = 'bg-mask-container';
		document.body.appendChild(this.mask);
	}
}

let instanceBase = new baseUi({Zindex: 900});
instanceBase.open();