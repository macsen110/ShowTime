"use strict";
let zIndex = 100;
class baseUi {
	constructor(options) {
		this.title = '';
		this.content = '';
		this.action = '';
		this.eleClass = ''
		this.type = 'dialog';
		this.container = document.createElement('div');
		this.container.id = 'dialog';
		this.container.className = "wrap-dialog-container "+this.eleClass;
		this.mask = '<div class="bg-mask"></div>'
		if (typeof options === 'object') {			
			Object.assign(this, options);
		}
	}
	handleEvent(e) {
		var target = e.target;
		var classList = target.classList;
		
		//点击遮罩层,不做任何事情,直接摧毁弹框
		if (classList.contains('bg-mask')) {
			this.destory();
			return
		}
		//点击确定按钮
		if (classList.contains('bth-dialog-ok')) {
			this.afterOk()
			return
		}
		//点击取消按钮,或者关闭的图标
		if (classList.contains('btn-dialog-cancel') || classList.contains('icon-dialog-cancel')) {
			this.close()
		}

	}
	open() {
		this.main = `<div data-type=${this.type} class="dialog-container">${this.title}</div>`;
		this.container.innerHTML = this.main + this.mask;
		var body = document.body;
		var self = this;
		this.container.style.zIndex = zIndex+=10
		body.appendChild(this.container);
		//remeber do not write like this
		//this.container.addEventLister('click', this.close) 
		//this replay for the current object in the event callback functions

		this.afterOpen();

		this.container.addEventListener('click',this)

	}
	afterOpen() {
		//do something after the dialog open;
	}
	afterOk() {
		//default event is destory;
		this.destory()
	}
	close() {
		this.afterClose();
		this.destory();

	}
	afterClose() {
		//do something after the dialog close;
	}
	destory() {
		var self = this;
		console.log(self);
		var body = document.body;
		body.removeChild(this.container);
	}
}
class ui_alert extends baseUi {
	constructor(options) {
		
		super(options);
		//this.type = 'aaa';
		this.action = "action";
		this.title = "title";
		//this.action = `<div class="wrap-action"><button class="btn-ok"></button></div>`
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
