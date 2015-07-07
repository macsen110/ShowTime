"use strict";
class baseUi {
	constructor(options) {
		this.type = 'dialog';
		this.container = document.createElement('div');
		this.container.id = 'dialog';
		this.container.className = "dilog-container";
		this.main = `<div data-type=${this.type} class="dialog-container">11111</div>`;
		this.mask = '<div class="bg-dialog-mask"></div>'
		this.container.innerHTML = this.main + this.mask;
		if (typeof options === 'object') {			
			Object.assign(this, options);
		}

	}
	handleEvent() {
		this.close();
	}
	open() {
		var body = document.body;
		var self = this;
		body.appendChild(this.container);
		//remeber do not write like this
		//this.container.addEventLister('click', this.close) 
		//this replay for the current object in the event callback functions

		//
		this.container.addEventListener('click',self)

	}
	close() {
		var self = this;
		console.log(self);
		var body = document.body;
		body.removeChild(this.container);
	}
}
class ui_alert extends baseUi {
	constructor(options) {
		super(options)
	}
		
}

function test() {
	console.log(this)
}


export default {
	base(options) {
		return new baseUi(options)
	},
	ui_alert(options) {
		return new ui_alert(options)
	}
}
