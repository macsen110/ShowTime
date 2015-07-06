"use strict";
class baseUi {
	constructor(options) {
		if (typeof options === 'object') {			
			Object.assign(this, options)
		}
	}
	open() {
		var body = document.body;
		this.type = this.type || 'dialog';
		this.container = this.container || `<div data-type=${this.type}>11111</div>`;
		this.mask = this.mask || document.createElement('div');
		this.mask.className = 'bg-mask-container';
		body.appendChild(this.mask);
		body.insertAdjacentHTML('beforeend', this.container);
		//console.log(document.querySelector('.bg-mask-container'))
		//document.body.appendChild(this.container);
		//document.body.appendChild(this.mask);

	}
}
class ui_alert extends baseUi {
	constructor(options) {
		super(options)
	}
		
}

export default {
	base(options) {
		return new baseUi(options)
	},
	ui_alert(options) {
		return new ui_alert(options)
	}
}
