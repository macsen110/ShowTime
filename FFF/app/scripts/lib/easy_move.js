define(function () {

	function easyMove (element, options) {
		var isTouch = 'ontouchstart' in window;
		if (!element) return null;

		this.element = element;
		this.child = element.children[0]; //选取一个子元素,以便可以随时获取其宽度
		this.length = element.children.length;
		this.index = options.index || 0; //初始选中元素序号
		this.speed = options.speed || 300; //矫正动画时间ms
		this.offset = options.offset || 0; //选中点偏移
		this.limitBorder = options.limitBorder || false; //滑动后是否会回顶到边界，优先级高于offset
		this.showNum = options.showNum || this.length; //显示的元素个数（可选,只在limitBorder为true时需要）
		this.deltaX = 0;
		this.deltaY = 0;
		this.callback = options.callback || function () {}; //矫正动画完成后的回调函数
		this.hasMoved = false; //是否触发过onTouchMove，用以区分点击与滑动

		if (this.element.addEventListener) {
	  		this.element.addEventListener(isTouch?'touchstart':'mousedown', this, false);
	    	this.element.addEventListener('webkitTransitionEnd', this, false);
	    	this.element.addEventListener('transitionend', this, false);
	    }

	    this.init();
	}
	easyMove.prototype = {
		init: function () {
			var self = this;
			self.element.style.MozTransform = self.element.style.webkitTransform = 'translate3d(' + (-self.index * self.child.offsetWidth) + 'px,0,0)';
		},
		handleEvent: function (e) {
			var self = this;

	    	switch (e.type) {
	      		case 'mousedown':
	      			self.element.addEventListener('mousemove', self, false);
	   				self.element.addEventListener('mouseup', self, false);
	   				self.element.addEventListener('mouseout', self, false);
	      			self.onTouchStart(e);
					break;
	      		case 'mousemove':
	      			self.onTouchMove(e);
	      			break;
	      		case 'mouseup':
		      		self.element.removeEventListener('mousemove', self, false);
		   			self.element.removeEventListener('mouseup', self, false);
		   			self.element.removeEventListener('mouseout', self, false);
		      		self.onTouchEnd(e);
					break;
	     		case 'mouseout':
	      			self.element.removeEventListener('mousemove', self, false);
	   				self.element.removeEventListener('mouseup', self, false);
	   				self.element.removeEventListener('mouseout', self, false);
	      			self.onTouchEnd(e);
	      			break;
	    		case 'touchstart':
	        		self.element.addEventListener('touchmove', self, false);
	        		self.element.addEventListener('touchend', self, false);
	        		self.onTouchStart(e);
	        		break;
	      		case 'touchmove':
	      			self.onTouchMove(e);
	      			break;
	      		case 'touchend':
	        		self.element.removeEventListener('touchmove', self, false);
	        		self.element.removeEventListener('touchend', self, false);
	      			self.onTouchEnd(e);
	      			break;
	      		case 'webkitTransitionEnd':
	      		case 'msTransitionEnd':
	      		case 'oTransitionEnd':
	      		case 'transitionend': self.transitionEnd(e); break;
	    	}
		},
		onTouchStart: function (e) {
			var self = this;
			self.start = {
				pageX: e.touches[0].pageX,
				pageY: e.touches[0].pageY
			};
			//将动画时间设为0，以便在按下时马上结束尚在进行的动画
			self.element.style.webkitTransition = "-webkit-transform 0ms";
		},
		onTouchMove: function (e) {
			var self = this;
			self.hasMoved = true;
			//若有多个touch或者被缩放则不滑动		
			if(e.touches.length > 1 || e.scale && e.scale !== 1) return;
			self.deltaX = e.touches[0].pageX - self.start.pageX;
			self.deltaY = e.touches[0].pageY - self.start.pageY;
			//判断是否想垂直滑动，若是则不做滑动
			if (Math.abs(self.deltaX) > Math.abs(self.deltaY)) {
				e.preventDefault();
				self.element.style.MozTransform = self.element.style.webkitTransform = 'translate3d(' + (self.deltaX - self.index * self.child.offsetWidth) + 'px,0,0)';
			}
		},
		onTouchEnd: function (e) {
			var self = this;
			if (!self.hasMoved) {
				self.deltaX = 0; //若没有滑动过，则deltaX为0
			}
			self.hasMoved = false;
			//矫正位置到最贴近目标处
			var width = self.child.offsetWidth;
			var targetIndex = -Math.round((self.deltaX - self.index * width)/width);
			targetIndex = self.limitIndex(targetIndex);
			self.autoMove(targetIndex);
		},
		transitionEnd: function (e) {
			var self = this;
			if (self.callback) {
				var choseId = self.index + self.offset;
				self.callback(choseId);
			}
		},
		autoMove: function (targetIndex) {
			var self = this;
			var style = this.element.style;
			var width = self.child.offsetWidth;
	    	style.webkitTransition = "-webkit-transform "+self.speed+"ms";
	    	style.MozTransform = style.webkitTransform = 'translate3d(' + (-targetIndex * width) + 'px,0,0)';
	    	self.index = targetIndex;
		},
		move: function (targetIndex) {
			var self = this;
			targetIndex -= self.offset; 
			targetIndex = self.limitIndex(targetIndex);
			var style = this.element.style;
			var width = self.child.offsetWidth;
			style.webkitTransition = "-webkit-transform "+self.speed+"ms";
	    	style.MozTransform = style.webkitTransform = 'translate3d(' + (-targetIndex * width) + 'px,0,0)';
	    	self.index = targetIndex;
		},
		limitIndex: function (targetIndex) {
			var self = this;
			if (!self.limitBorder) {
				if (targetIndex < -self.offset) {
					targetIndex = -self.offset;	
				} else if (targetIndex > self.length - 1 - self.offset) {
					targetIndex = self.length - 1 - self.offset;
					console.log(targetIndex)
				}
			} else {
				if (targetIndex < 0) {
					targetIndex = 0;
				} else if (targetIndex > self.length - self.showNum) {
					targetIndex = self.length - self.showNum;
				}
			}
			return targetIndex;
		}
	}

	return {
        easyMove: easyMove
    };
});