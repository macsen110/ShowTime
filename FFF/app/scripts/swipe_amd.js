
define(function() {
    function Swipe(element, options) {
        if (!element) return;
		this.element = element.children[0];
		this.child = this.element.children[0]; //选取第一一个子元素,以便可以随时获取其宽度
		this.length = this.element.children.length;
		this.itemWidth = this.child.offsetWidth;
        this.width = this.itemWidth * this.length;
        this.index = options.index || 0; //初始选中元素序号
        this.speed = options.speed || 300; //矫正动画时间ms
        this.callback = options.callback || this.callback; //矫正动画完成后的回调函数
        this.hasMoved = false; //是否触发过onTouchMove，用以区分点击与滑动
        this.indicate = options.indicate || element.querySelector('.indicate-list');
        this.deltaX = 0;
		this.deltaY = 0;
        this.init();
        if (this.element.addEventListener) {
	  		this.element.addEventListener('touchstart', this, false);
	    	this.element.addEventListener('webkitTransitionEnd', this, false);
	    	this.element.addEventListener('transitionend', this, false);
	    }
        
    }
    
    Swipe.prototype = {
        constructor: Swipe,
        init: function () {
            var self = this;
            //初始化设置item和list的各自宽度
            [].forEach.call(self.element.children, function (item, index) {
                item.style.width = self.itemWidth + 'px';
            })
            self.element.style.width = self.width + 'px'; 
            self.element.children[self.index].classList.add('on');
            //初始化导航
            if (self.indicate) self.indicate.children[self.index].classList.add('on');
            self.element.style.MozTransform = self.element.style.webkitTransform = 'translate3d(' + (-self.index * self.child.offsetWidth) + 'px,0,0)';        
        },
        handleEvent: function (e) {
            var self = this;
            switch (e.type) {
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
	      		case 'transitionend': 
                    self.transitionEnd(e); 
                    break;
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
                //return;
			}
			self.hasMoved = false;
			//矫正位置到最贴近目标处
            var width = self.itemWidth;
			var targetIndex = -Math.round((self.deltaX - self.index * width)/width);
			self.autoMove(targetIndex);
        },
        transitionEnd: function (e) {
            var self = this;
			if (self.callback) {
				//var choseId = self.index + self.offset;
				self.callback(self.index);
			}
            
        },
        autoMove: function (targetIndex) {
			var self = this;
            
			var style = this.element.style;
			var width = self.child.offsetWidth;
            var maxNum = this.length - 1;
            targetIndex = targetIndex < 0 ? 0 : (targetIndex > maxNum ? maxNum : targetIndex);
            if (targetIndex == maxNum && self.index == maxNum) {
                self.callback(targetIndex)
            } 
            //如果index有变化的话
            //逻辑上先去掉上一次的状态,
            //变动结束后
            
            if (targetIndex !== self.index) self.stopPrev(self.index);
	    	style.webkitTransition = "-webkit-transform "+self.speed+"ms";
	    	style.MozTransform = style.webkitTransform = 'translate3d(' + (-targetIndex * width) + 'px,0,0)';
	    	if (targetIndex !== self.index) {
                self.index = targetIndex;
                self.startNext(targetIndex);
                
            }
        },
        stopPrev: function (index) {
            var self = this;
            self.element.children[self.index].classList.remove('on');
            //初始化导航
            if (self.indicate) self.indicate.children[self.index].classList.remove('on');
        },
        startNext: function (index) {
            var self = this;
            self.element.children[self.index].classList.add('on');
            //初始化导航
            if (self.indicate) self.indicate.children[self.index].classList.add('on');
            
        },
        move: function (targetIndex) {
            
        }
    }
    return {
        Swipe: Swipe
    }

})