/**
 * Created by wudi on 15/11/30.
 */
define(['template'], function(template){
    /**
     **pageInitObj,
     **页面初始化对象,
     **包含每个页面的名称(以dom Id的值唯一标识)
     **@params isBindCard 产检
     **@params ready 选择模板套数据
     **@params swipe 页面滚动对象
     **@parans _fillData循环填充数据
     **@params _todoResult 针对返回数据,再包装,供模版嵌套
     ***/
    var pageInitObj = {
        $rootDom:  $('#page_container'),
        ready: function (stateObj, data) {
            var self = this;
            var tplScript = require('./tpl/antenatal.html');
            if (STORE.curPathName == stateObj.pageName) {
                STORE.setRouter(stateObj, self);
                self.show(tplScript, data)  
            }           
        },
        show: function (tplScript, data) {
            var self = this;
            self.$rootDom.append(tplScript);
            var html = self.isBindCard ? template('antenatal_care_bind_template', data) 
            : template('antenatal_care_unbind_template', data); 
            self.$rootDom.prepend(html);
            if (self.isBindCard) self._fillData(data);
            self.bindUI();
            
        },
        _appendNoData: function () {
            this.$rootDom.children().remove();
            var div = document.createElement('div');
            div.className = 'none-data-container';
            div.innerHTML = '<i class="icon"></i><p class="tip">亲，您当前还未产检过~</p>';
            this.$rootDom[0].appendChild(div);
        },
        _fillData: function (data) {
            var self = this;
            if (!data.weekPregnantList.length) {
                self._appendNoData();
                return; 
            }
            var moveItemsHtml = '';
            var testItemsHtml = '';
            var tipItemsHtml = '';
            var pregnantStatusHtml = '';
            data.weekPregnantList.forEach(function (item, idx) {
                moveItemsHtml += getMoveItemHtml(item);
                pregnantStatusHtml += getPregnantStatusHtml(item);
                testItemsHtml += getTestItemsHtml(item.itemList);
                tipItemsHtml += getTipItemsHtml(item.itemList);
            });
            //apendDom to targetDom
            this.$rootDom.find('.header .tab-con-container').html(pregnantStatusHtml);
            this.$rootDom.find('.easy-move-container').html(moveItemsHtml);
            this.$rootDom.find('.test-list').html(testItemsHtml);
            this.$rootDom.find('.tip-list').html(tipItemsHtml)
            function getMoveItemHtml(item) {
                var arrTime = item.checkDate.split('-');
                var statusObj = getStatusObj(item.status);
                return '<li class="item '+statusObj.className+'">'+
                            '<div class="box">'+
                            '<p>'+arrTime[0]+'</p>'+
                            '<p>'+arrTime[1]+'.'+arrTime[2]+'</p>'+
                            '<p>孕'+item.weekPregnant+'周</p>'+
                            '</div>'+
                        '</li>' 
            }
            function getPregnantStatusHtml(item) {
                var statusObj = getStatusObj(item.status);
                return '<li class="item">'+
                        '<p>'+ statusObj.text +'</p>'+
                        '<p><i class="icon"></i>'+item.checkWeek+' '+item.checkTime+'</p>'+
                    '</li>'
            }
            function getTestItemsHtml(list) {
                var html = '<li class="item">';

                list.forEach(function (item, idx) {
                    var isReported = item.isReported ? 'reported' : '';
                    html += '<p class="bind-location '+ isReported +'" data-href="report" data-options={"RepType":"'+item.RepType+'"}>'+ (idx + 1) + '.' + item.name +'<i class="icon-sign-right fr"></i></p>'
                })
                return html + '</li>';
            }
            function getTipItemsHtml(list) {
                var html = '<li class="item">';
                var index = 0;
                list.forEach(function (item, idx) {
                    if (item.tip != '') html += '<p>'+ (++index) + '.' + item.tip +'</p>'
                })
                return html + '</li>';
            }
            function getStatusObj(code) {
                var obj = {};
                switch(code) {
                    case '12':
                        obj.text = '已过期';
                        obj.className = 'finished';
                        break;
                    case '13':
                    case '21':
                        obj.text = '已完成';
                        obj.className = 'finished';
                        break;
                    case '00':
                        obj.text = '取消预约';
                        obj.className = 'finished';
                        break;
                    case '11':
                    case '20':
                        obj.text = '产检中';
                        obj.className = 'unstart';
                        break;
                    case '02':
                    default:
                        obj.text = '已预约';
                        obj.className = 'unstart'
                        break;
                }
                return obj;
            }
            
            
        },
        isBindCard: false,
        setPageInfo: function () {
            document.title = '我的产检'
        },
        bindUI: function () {
            var self = this;
            self.setPageInfo();
            self.$rootDom.addClass('page-antenatal-care visibile');            
            //创建滑动实例
            var $moveBoxDom = $('.easy-move-container');
            if (!$moveBoxDom.length) return;
            ;(function () {
                var winHeight = window.innerHeight; 
                var topHeight = $('header').height();
                var $content = $('section').find('.content');
                $('body').addClass('overflow-hidden h-100');
                $content.height(winHeight - topHeight -20); 
            }())
            var $MoveBoxItems = $moveBoxDom.find('.item');
            $MoveBoxItems.width($moveBoxDom.width() / 5);
            $moveBoxDom.width($MoveBoxItems.width() * $MoveBoxItems.length);
            
            var easyMoveIndex = $moveBoxDom.find('.unstart').length ? $moveBoxDom.find('.unstart').eq(0).index() : 0;
            var easyMoveEle = APP.ui.easyMove($moveBoxDom[0], {
                parentEle: $moveBoxDom.parent()[0],
                index: easyMoveIndex,
                focusIndex: 2,
                showNum:3,
                limitBorder: true,
                touchMoveCb: function (index) {
                    self.swipe.touchMoveCb(index);
                },
                callback: function (index) {
                    pageInitObj.swipe.easyMoveEnd(index);
                    
                }
            });
            self.swipe.moveContainer = easyMoveEle.element;
            $MoveBoxItems.click(function () {
                var index = $(this).index();
                if (easyMoveEle.index != index) easyMoveEle.move(index)
                
            })
            var tabContainers = document.querySelectorAll('.tab-con-container');
            if (tabContainers.length) {
                [].forEach.call(tabContainers, function (item) {
                    this.swipe._tabContainerStore.push(APP.ui.TabWidget({
                        tabConContainer: item,
                        callback: function (index) {
                            var curTabConItem = this.tabConContainer.children[index];
                            var tipNameDom = document.querySelectorAll('.nav-item-name')[1];
                            tipNameDom.classList.remove('hidden');
                            if (!curTabConItem || !curTabConItem.children.length) {
                                if (curTabConItem.parentNode.previousElementSibling && curTabConItem.parentNode.previousElementSibling.classList.contains('nav-item-name')) {
                                    tipNameDom.classList.add('hidden');    
                                }     
                            }
                        }
                    }))    
                }, self)
            }
            self.swipe.curentIndex = easyMoveEle.index;
            
            //未绑卡,静态显示的页面中,检查项中有一个tab切换
            
            if (!self.isBindCard) {
                APP.ui.TabWidget({
                    tabNavContainer: self.$rootDom.find('.inner-tab-nav-list')[0],
                    tabConContainer: self.$rootDom.find('.inner-tab-con-list')[0],
                    callback: function (index) {
                        var $innerTipConList =  self.$rootDom.find('.inner-tip-con-list');
                        $innerTipConList.children().hide();
                        $innerTipConList.children().eq(index).show();   
                    }
                })
            }
            
        },
        init: function (stateObj) {
            var self = this;
            var profileInfo = APP.profileInfo;
            if (profileInfo.emStatus == 1) self.unbindCard(stateObj) 
            if (profileInfo.emStatus == 2) self.bindCard(stateObj);
        },
        bindCard: function (stateObj) {
            var self = this;
            self.isBindCard = true;
            //测试静态页面使用,以后放测试环境或者线上要删除!!!
            //self.isBindCard = location.pathname.indexOf('unbind') !== -1 ? false : true;              
            var profileInfo = APP.profileInfo;
            var profileHtml = undefined;
            var postData = {
                uid: APP.uid,
                token: APP.tools.encryptedString(JSON.parse(localStorage.getItem('yfyPublic'))),
                cardNo: profileInfo.cardNo
            }
            $.ajax({
                url: APP.host.api+'/infanthospital/getBookInfo',
                type: 'post',
                data: JSON.stringify(postData),
                contentType: 'application/json',
                success: function (res) {
                    res = JSON.parse(res);
                    if (res.status == 0) {
                        res = self._todoResult(res);
                        self.ready(stateObj, res);
                        if (profileInfo) {
                            profileHtml = template('antenatal_profile_template', profileInfo);
                            $('.section .content').prepend(profileHtml)
                        }  
                        if (self.$rootDom.find('.profile-box').length == 0 && profileHtml) {
                            self.$rootDom.find('.section .content').prepend(profileHtml)    
                        }
                    }
                }
            })
        },
        unbindCard: function (stateObj) {
            var self = this;
            self.isBindCard = false;
            self.ready(stateObj, {uid: APP.uid})
        },
        _todoResult: function (result) {
            return result
        },
        swipe: {
            _tabContainerStore: [],
            pushTabStore: function (instance) {
                this._tabContainerStore.push(instance)
            },
            _curentIndex : 1,
            get curentIndex() {
                return this._curentIndex;
            },
            set curentIndex(index) {
                this._curentIndex = index; 
                var curEle = this.moveContainer.children[index];
                curEle.classList.add('on');
                if (curEle.previousElementSibling) curEle.previousElementSibling.classList.add('prev');
                if (curEle.nextElementSibling) curEle.nextElementSibling.classList.add('next');
                this._tabContainerStore.forEach(function (item) {
                    item.change(index);    
                })
                //用户未绑卡,
                //针对静态页面的dom交互
                ;(index == 2 ? $('.inner-tab-nav-list').show() : $('.inner-tab-nav-list').hide()) 
            },
            easyMoveEnd: function (index) {
                var prevCurEle = this.moveContainer.children[this.curentIndex];
                if (prevCurEle.previousElementSibling) prevCurEle.previousElementSibling.classList.remove('prev');
                if (prevCurEle.nextElementSibling) prevCurEle.nextElementSibling.classList.remove('next');
                prevCurEle.classList.remove('on');
                this.curentIndex = index;             
            },
            touchMoveCb: function (index) {
                var curEle = this.moveContainer.children[index];
                if (curEle.previousElementSibling) curEle.previousElementSibling.classList.remove('prev');
                if (curEle.nextElementSibling) curEle.nextElementSibling.classList.remove('next');
                curEle.classList.remove('on');
            },
        },
        destroy: function () {
            //如果有事件绑定的话, 解除事件绑定
            $('body').removeClass('overflow-hidden h-100');
            this.$rootDom.removeClass('visibile page-antenatal-care');  
            this.$rootDom.html('');
        }
            
    }
    //默认
    return pageInitObj;
    
    
})