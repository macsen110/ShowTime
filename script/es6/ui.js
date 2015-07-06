"use strict";
class baseUi {
	constructor(options) {
		if (typeof options === 'object') {			
			Object.assign(this, options)
		}
	}
	open() {
		this.mask = this.mask || document.createElement('div');
		this.mask.className = 'bg-mask-container';
		document.body.appendChild(this.mask);

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
