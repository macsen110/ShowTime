/**
 * Created by wudi on 15/11/30.
 */
define(['zepto','template'], function($, template) {  
    
    //init page
    var pageInitObj = {
        $rootDom: $('#page_container'),
        ready: function (stateObj, data) {
            var self = this;
            var tplScript = require("./tpl/profile.html"); 
            if (STORE.curPathName == stateObj.pageName) {
                STORE.setRouter(stateObj, self);
                self.show(tplScript, data)
            }
        },
        show: function (tplScript, data) {
            var self = this;
            self.$rootDom.html(tplScript);
            var html = template('profile_template', data);
            self.$rootDom.prepend(html);
            self.bindUI(); 
            
        },
        setPageInfo: function () {
            document.title = "个人中心"
        },
        bindUI: function () {
            var self = this; 
            self.setPageInfo();
            self.$rootDom.addClass('page-profile visibile');                
        },
        _getUserInfo: function (stateObj) {
            var self = this;
            self.ready(stateObj, APP.profileInfo);
        },
        init: function (stateObj) {
            var self = this;
            self._getUserInfo(stateObj);
        },
        destroy: function () {
            //如果有事件绑定的话, 解除事件绑定
            this.$rootDom.removeClass('visibile page-profile'); 
            this.$rootDom.html('');
        }
    }
        
    return pageInitObj;
})