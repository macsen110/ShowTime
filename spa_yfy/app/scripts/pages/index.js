/**
 * Created by Macsen110 on 15/11/30.
 */
define(['zepto'], function($){  
    //初始化page  
    /*@isAgreeAccredit 请求接口,验证是否授权绑卡
    ** *@ready 验证接口请求完成后,如果未授权调用ready，
     * @bindUI 绑定业务逻辑
     * @reqAccredit 同意授权,请求后端接口
     * @dialog 页面弹框元素,默认为undefined
    *******/
    var pageInitObj = {
        $rootDom: $('#page_container'),
        ui: {},
        ready: function (stateObj) {
            var html = require('./tpl/index.html');
            this.$rootDom.append(html);
            if (STORE.curPathName == stateObj.pageName) {
                STORE.setRouter(stateObj, this)
                this.show()
            }
        },
        show: function () {
            this.$rootDom.addClass('visibile');
            this.bindUI()
        },
        bindUI: function () {
            var self = this;
            var startIcon =  $('.page-index .icon');
            startIcon.on('click', function () {
                self.ui.dialog = APP.ui.Dialog({
                    isMask: true,
                    title: '提示',
                    className: 'dialog-container',
                    content: '绑定就诊卡,并授权将个人信息同步给1产检,以便我们能更好的为您服务',
                    foot: '<button class="btn-dialog-ok">同意</button>',
                    afterOk: function () {
                        self.reqAccredit()
                    }    
                });
            })
            ;(function () {
                var winWidth = window.innerWidth;
                var winHeight = window.innerHeight;
                var iconHeight = self.$rootDom.find('.content .icon').height();
                var wordsHeight = self.$rootDom.find('.content .words').height();
                self.$rootDom.find('.bg').css('max-height', winHeight -iconHeight - wordsHeight - winWidth * .03 +'px')
            }())        
        },
        init: function (stateObj) {
            this.ready(stateObj)
        },
        reqAccredit: function () { 
            var self = this;         
            var postData = {
                uid: APP.uid,
                token: APP.tools.encryptedString(JSON.parse(localStorage.getItem('yfyPublic')))
            }
            //这边写请求接口逻辑,
            //成功后跳转
            $.ajax({
                url: APP.host.api + '/infanthospital/initCustomer',
                data: JSON.stringify(postData),
                type : 'post',
                contentType : 'application/json',
                success : function(response) {
                    response = JSON.parse(response);
                    if (response.status == 0) {
                        var emStatus = response.emStatus;
                        self.ui.dialog && self.ui.dialog.destory();
                        APP.saveProfileInfo(emStatus, response);
                        return;
                    }
                }
            })
        },
        destroy: function () {
            //如果有事件绑定的话, 解除事件绑定
            this.$rootDom.html('');
            this.$rootDom.removeClass('visibile')
        } 
    }
    
     return pageInitObj

    
})
