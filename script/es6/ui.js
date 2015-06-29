"use strict";
class baseUi {
	constructor(options) {
		this.x = 123;
		if (typeof options === 'object') {
			var arr = Object.keys(options);
			//let {[..arr]} = this;
			for (let i of arr ){
				this[i] = options[i];
			}
		}

	}
	open() {
		console.log(this.Zindex);

		this.mark = this.mark || document.createElement('div');
		document.body.appendChild(this.mark);
	}
}

let instanceBase = new baseUi({Zindex: 900});
instanceBase.open();