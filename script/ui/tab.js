/****************
tab 切换插件
参数:
tabNav:表示tab click item
tabCon: 内容区域显示
tabNavItems 触发切换的element
tabConItems  显示区域的内容elements
curIndex 当前显示的index
*****/

function TabChange(args) {
	if(args && ("object" == typeof args)){
		for(var arg in args){
			this[arg] = args[arg];
		}
	}
	this.tabNavContainer = this.tabNavContainer || document.querySelector('.tab-nav-container');
	this.tabConContainer = this.tabConContainer || document.querySelector('.tab-con-container');
	this.tabNavItems = this.tabNavItems || this.tabNavContainer.children;
	this.tabConItems = this.tabConItems || this.tabConContainer.children;
	this.curIdex = this.curIdex || 0;
	this.init()
}

TabChange.prototype = {
	constructor: TabChange,
	init: function () {
		var self = this;
		self.change(this.curIdex);
		[].forEach.call(self.tabNavItems, function (item, index) {
			item.addEventListener('click', function () {
				if (!this.classList.contains('on')) self.change(index);				
			})
		})
	},
	change: function(index) {
		var self = this;
		[].forEach.call(self.tabNavItems, function (item, i) {
			if (i !== index) {
				item.classList.remove('on');
				self.tabConItems[i].classList.remove('on')
			}
			else {
				item.classList.add('on');
				self.tabConItems[i].classList.add('on')
			}
		})

	}
}
