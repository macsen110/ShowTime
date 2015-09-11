/*************
 * 
 * Slider插件用于图片轮播 
 *用法: new Slider(options);
 * options 是一个对象，其属性配置为
 *    contaniner,轮播的容器
 *    items, 轮播的items集合
 *    autoPlay, 是否开启自动播放,默认为开启状态
 *    delay,间隔时间,默认为3000ms
 * 	  effect,播放效果可选值'fadeIn, fadeOut, SlideUp, SlideDown' 默认为fadeIn
 *    
 ********/


function Slider(args) {
	if(args && ("object" == typeof args)){
		for(var arg in args){
			this[arg] = args[arg];
		}
	}
	this.container = this.container || document.getElementById('sliderContainer');
	if (this.container) {
		this.index = 0;
		this.items = this.items || this.container.querySelectorAll('.list .item');
		this.autoPlay = this.autoPlay || true;
		this.delay = this.delay || 3000;

		window.addEventListener("DOMContentLoaded", function(){
			var len = this.items.length;		
			if (len > 1) {
				this.navItems = this.container.querySelectorAll('.nav-list .item');
				this.init();
			}
		}.bind(this));
	}
	return this;
}

Slider.prototype = {
	constructor: Slider,
	init: function() {
		var _self = this;
		this.container.addEventListener('mouseenter', this)
		this.container.addEventListener('mouseleave', this)
		this.interval = this.autoPlay
			? setInterval(function() { 
				++this.index;
				this.slideFn(this.effect, this.index);
			}.bind(this), this.delay) : 0;		
		[].forEach.call(this.navItems, function(item, index) {
			item.addEventListener('click', function () {
				this.slideFn(this.effect, index)
			}.bind(_self)
		)})
			
	},	
	handleEvent:function(evt){
		switch(evt.type) {
			case 'mouseenter' :
				clearInterval(this.interval);
				break;
			case 'mouseleave' :
				this.interval = this.autoPlay
					? setInterval(function() { 
						++this.index;
						this.slideFn(this.effect, this.index);
					}.bind(this), this.delay) : 0;	
				break;
			default: 
				break;
		}
		

	},
	slideFn: function(effect, index) {
		this.index = index == this.items.length ? 0 : index;
		[].forEach.call(this.container.querySelectorAll('.on'), function (item) {
			item.classList.remove('on');
		});
		switch(effect) {
			case 'fadeOut': 
				fadeOut.call(this);
				break;
			case 'fadeIn':
			default:
				fadeIn.call(this);
				break
		}
		function fadeIn() {
			this.items[this.index].classList.add('on'); 
			this.navItems[this.index].classList.add('on');
		}
	}
}

