/**
 * Created by wudi on 15/11/30.
 */
define(['zepto','template'], function($, template) {    
    //init page
    
    var pageInitObj = {
        $rootDom: $('#page_container'),
        isBindCard: false,
        ready: function (stateObj, data) {
            var self = this;
            var tplScript = require("./tpl/waiting_doctor.html");
            if (STORE.curPathName == stateObj.pageName) {
                STORE.setRouter(stateObj, self);
                self.show(tplScript, data);
            }
        },
        show: function (tplScript, data) {
            var self = this;
            self.$rootDom.html(tplScript);
            var html = self.isBindCard ? template('wait_bind_card_template', data) 
            : template('wait_unbind_card_template', data);            
            self.$rootDom.prepend(html);
            self.bindUI(); 
        },
        setPageInfo: function () {
            document.title = "我的候诊"
        },
        bindUI: function () {
            var self = this;
            self.setPageInfo();
            self.$rootDom.addClass('page-wait-doctor visibile');
            if (self.isBindCard) {
                var $unNeedQueue = self.$rootDom.find('.list .type-5, .list .type-6');
                $unNeedQueue.find('.test-item-key').text('检验项目')
                if ($unNeedQueue.length) {
                    $unNeedQueue.remove();
                    $('.list').before('<ul class="list"></ul>');
                    if ($unNeedQueue.length > 1) {
                        $unNeedQueue.forEach(function (item, idx) {
                            $('.list').eq(0).append(item)    
                        })    
                    }
                    else {
                        $('.list').eq(0).append($unNeedQueue)
                    }
                }
            }
            else {
                $('.tooltip-container .item').on('click', function () {
                    var index = $(this).index();
                    $(this).addClass('cur').siblings().removeClass('cur');
                    $('.unbind-card-container .list').eq(index).addClass('cur').siblings().removeClass('cur')
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
            //this need to request bindCard ajax
            var self = this;
            self.isBindCard = true;
            var profileInfo = APP.profileInfo;
            var postData = {
                uid: profileInfo.uid,
                token: APP.tools.encryptedString(JSON.parse(localStorage.getItem('yfyPublic'))),
                cardNo: profileInfo.cardNo
            }
            $.ajax({
                url: APP.host.api + '/infanthospital/getQueueInfo',
                type: 'post',
                data: JSON.stringify(postData),
                contentType: 'application/json',
                success: function (res) {
                    res = JSON.parse(res);
                    if (res.status == 0) {
                        res = self._todoResult(res);
                        self.ready(stateObj, res);
                        return;
                    }
                    APP.ui.Prompt({content: res.description}).render()
                }
            })
        },
        unbindCard: function (stateObj) {
            var self = this;
            self.bindCard = false;
            self.ready(stateObj, {uid: APP.uid});            
        },
        _todoResult: function (result) {
            var self = this;
            if (self.isBindCard) {
                result = result;
            }
            else {
                result = result
            }
            return result
        },
        destroy: function () {
            //如果有事件绑定的话, 解除事件绑定
            this.$rootDom.html('');
            this.$rootDom.removeClass('visibile page-wait-doctor');
            this.$rootDom.html('');
        }
    }
    
    
    return pageInitObj;
})