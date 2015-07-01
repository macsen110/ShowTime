"use strict";
class baseUi {
	constructor(options) {
		if (typeof options === 'object') {			
			Object.assign(this, options)
		}

	}
	open() {
		console.log('COMMUI: ' + this.type)		
		this.mark = this.mark || document.createElement('div');
		document.body.appendChild(this.mark);
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