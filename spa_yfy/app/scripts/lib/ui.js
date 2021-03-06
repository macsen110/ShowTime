define(function () {
    /****************
    tab 切换插件
    参数:
    tabNav:表示tab click item
    tabCon: 内容区域显示
    tabNavItems 触发切换的element
    tabConItems  显示区域的内容elements
    curIndex 当前显示的index
    *****/
    function TabWidget(args) {
        if(args && ("object" == typeof args)){
            for(var arg in args){
                this[arg] = args[arg];
            }
        }
        this.tabNavContainer = this.tabNavContainer || document.querySelector('.tab-nav-container');
        this.tabConContainer = this.tabConContainer || document.querySelector('.tab-con-container');
        this.tabNavContainer && (this.tabNavItems = this.tabNavItems || this.tabNavContainer.children);
        this.tabConContainer && (this.tabConItems = this.tabConItems || this.tabConContainer.children);
        this.curIdex = this.curIdex || 0;
        this.init()
    }

    TabWidget.prototype = {
        constructor: TabWidget,
        init: function () {
            var self = this;
            self.change(this.curIdex);
            if (self.tabNavItems) {
                [].forEach.call(self.tabNavItems, function (item, index) {
                    item.addEventListener('click', function () {
                        if (!this.classList.contains('on')) self.change(index);				
                    })
                })            
            }
        },
        change: function(index) {
            var self = this;
            if (self.tabNavItems) {
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
            else {
                [].forEach.call(self.tabConItems, function (item, i) {
                    if (i !== index) item.classList.remove('on');
                    else item.classList.add('on');
                })
                
            } 
            if (self.callback) self.callback(index);           
        }
            
    }
    /***
     * *dialog 页面弹框组件
     * *
     * *****/    
    //弹框
    function Dialog(options) {
        this.title = null;
        this.content = null;
        this.foot = null;
        this.canMaskClose = true;
        this.className = ''
        this.type = 'dialog';
        this.container = document.createElement('div');
        this.mask = '<div class="dialog-mask-bg"></div>';
        this.config(options).open()
        return this;
    }
    Dialog.prototype = {
        constructor: Dialog,
        config: function (options) {
            if (typeof options === 'object') {			
                for (var i in options) {
                    this[i] = options[i]
                }
            }
            return this;
        },
        handleEvent: function (e) {
            var target = e.target;
            var classList = target.classList;
            
            //点击遮罩层,不做任何事情,直接摧毁弹框
            if (classList.contains('dialog-mask-bg')) {
                this.canMaskClose ? this.close() : null; 			
                return
            }
            //点击确定按钮
            if (classList.contains('btn-dialog-ok')) {
                this.afterOk()
                return
            }
            //点击取消按钮,或者关闭的图标
            if (classList.contains('btn-dialog-cancel') || classList.contains('icon-dialog-cancel')) {
                this.close()
            }
        },
        open: function() {
            this.container.className = "widget-dialog "+this.className;
            this.title = this.title ? '<div class="title">' + this.title + '</div>' :'';
            this.content = this.content ? '<div class="content">' + this.content + '</div>' : '';
            this.foot = this.foot ? '<div class="foot">' + this.foot + '</div>' : ''; 
            this.main = this.title + this.content + this.foot;
            this.container.innerHTML = '<div class="main">' + this.main + '</div>' + this.mask;
            var body = document.body;
            var self = this;
            body.appendChild(this.container);
            //remeber do not write like this
            //this.container.addEventLister('click', this.close) 
            //this replay for the current object in the event callback functions
        
            this.afterOpen();
        
            this.container.addEventListener('click',this)
        
        },
        afterOpen: function () {
            //do something after the dialog open;
        },
        afterOk: function () {
            //default event is destory;
            this.destory()
        },
        close: function () {
            this.afterClose();
            this.destory();
        
        },
        afterClose: function () {
            //do something after the dialog close;
        },
        destory: function () {
            var body = document.body;
            body.removeChild(this.container);
        }
    };
    /**
     * *easy Move
     * *页面滑动插件
     * *******/
	function easyMove (element, options) {
		var isTouch = 'ontouchstart' in window;
		if (!element) return null;      
		this.element = element;
        this.parentEle = options.parentEle || this.element;
		this.child = element.children[0]; //选取一个子元素,以便可以随时获取其宽度
		this.length = element.children.length;
        this.focusIndex = options.focusIndex || 0;
		this.index = options.index || 0; //初始选中元素序号
		this.speed = options.speed || 300; //矫正动画时间ms
		this.offset = options.offset || 0; //选中点偏移
		this.limitBorder = options.limitBorder || false; //滑动后是否会回顶到边界，优先级高于offset
		this.showNum = options.showNum || this.length; //显示的元素个数（可选,只在limitBorder为true时需要）
		this.deltaX = 0;
		this.deltaY = 0;
		this.callback = options.callback || function () {}; //矫正动画完成后的回调函数
        this.touchMoveCb = options.touchMoveCb || function () {}; //监听动画滑动
		this.hasMoved = false; //是否触发过onTouchMove，用以区分点击与滑动
		if (this.parentEle.addEventListener) {
	  		this.parentEle.addEventListener(isTouch?'touchstart':'mousedown', this, false);
	    	this.element.addEventListener('webkitTransitionEnd', this, false);
	    	this.element.addEventListener('transitionend', this, false);
	    }
	    this.init();
	}
	easyMove.prototype = {
		init: function () {
			var self = this;
			self.element.style.MozTransform = self.element.style.webkitTransform = 'translate3d(' + (-(self.index-self.focusIndex) * self.child.offsetWidth) + 'px,0,0)';
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
	        		self.parentEle.addEventListener('touchmove', self, false);
	        		self.parentEle.addEventListener('touchend', self, false);
	        		self.onTouchStart(e);
	        		break;
	      		case 'touchmove':
	      			self.onTouchMove(e);
	      			break;
	      		case 'touchend':
	        		self.parentEle.removeEventListener('touchmove', self, false);
	        		self.parentEle.removeEventListener('touchend', self, false);
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
            
			//若有多个touch或者被缩放则不滑动		
			if(e.touches.length > 1 || e.scale && e.scale !== 1) return;
			self.deltaX = e.touches[0].pageX - self.start.pageX;
			self.deltaY = e.touches[0].pageY - self.start.pageY;
			//判断是否想垂直滑动，若是则不做滑动
			if (Math.abs(self.deltaX) > Math.abs(self.deltaY)) {
				e.preventDefault();
                if (!self.hasMoved) {
                    self.touchMoveCb &&  self.touchMoveCb(self.index)   
                }
				self.element.style.MozTransform = self.element.style.webkitTransform = 'translate3d(' + (self.deltaX - (self.index-self.focusIndex) * self.child.offsetWidth) + 'px,0,0)';
			}
            
            
			self.hasMoved = true;
            
            
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
            if (self.callback) {
				var choseId = self.index + self.offset;
				self.callback(self.index);
			}
		},
		transitionEnd: function (e) {
			var self = this;
			
		},
		autoMove: function (targetIndex) {
			var self = this;
			var style = this.element.style;
			var width = self.child.offsetWidth;
	    	style.webkitTransition = "-webkit-transform "+self.speed+"ms";
	    	style.MozTransform = style.webkitTransform = 'translate3d(' + (-targetIndex * width) + 'px,0,0)';
	    	self.index = targetIndex + self.focusIndex;
            
		},
		move: function (targetIndex) {
			var self = this;
			targetIndex -= self.offset; 
			targetIndex = self.limitIndex(targetIndex);
			var style = this.element.style;
			var width = self.child.offsetWidth;
			style.webkitTransition = "-webkit-transform "+self.speed+"ms";
	    	style.MozTransform = style.webkitTransform = 'translate3d(' + (-targetIndex * width) + 'px,0,0)';
	    	self.index = targetIndex + self.focusIndex;
            if (self.callback) {
				//var choseId = self.index + self.offset;
				self.callback(self.index);
			}
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
				} else if (targetIndex > self.length - self.showNum + self.focusIndex) {
					targetIndex = self.length -(self.showNum - self.focusIndex);
				}
			}
			return targetIndex -self.focusIndex;
		}
	}


    return {
        TabWidget: function (args) {return new TabWidget(args)},
        Dialog: function (args) {return new Dialog(args)},
        easyMove: function (dom, args) { return new easyMove(dom, args)}
    }
})