define(['zepto', 'template'], function ($, template) {
    var isFirstReq;
    var yfySessionReportObj;
    
    var pageInitObj = {
        $rootDom: $('#page_container'),
        resetReportObj: function (obj) {
            if (!yfySessionReportObj) yfySessionReportObj = sessionStorage.getItem('yfySessionReportObj') ? JSON.parse(sessionStorage.getItem('yfySessionReportObj')) : null;
            if (obj) {
                if (!yfySessionReportObj) yfySessionReportObj = {page: obj.page, curNum: page.curNum};
                else yfySessionReportObj.data
            } 
        }, 
        init: function (stateObj) {
            var self = this;
            self.RepType = stateObj.RepType;
            var url;
            var data = yfySessionReportObj ? {page: yfySessionReportObj.page} : {};

            switch(RepType){
                case '01' : //唐式
                    url = '/infanthospital/getTSReportDetail';
                break;
                case '02' : //超声报告
                    url = '/infanthospital/getUSReportDetail';
                break;
                case '03' : //超声报告
                    url = '/infanthospital/getUSReportDetail';
                break;
            }
            // request for data
            self.oAjax(url,data);
        },
        ready: function (stateObj, data) {
            var tplScript = require("./tpl/report_list.html");
            if (STORE.curPathName == stateObj.pageName) {
                STORE.setRouter(stateObj, this)
                this.show(tplScript, data)
            }
        },
        show: function (tplScript, data) {
            var self = this;
            self.$rootDom.html(tplScript);            
            var html = template('report_list_template', data);
            self.$rootDom.prepend(html);
            self.bindUI(); 
        },
        bindUI: function () {
            var self = this;
            self.setPageInfo();
            self.$rootDom.addClass('page-report-list visibile');

            var iNow = 1;
            var reportList = $('.report-list');
            var curNum = $('.cur-num');
            var totalNum = $('.total-num');
            
            $('.icon-sign-left').on('click',function(){

                
            })
            $('.icon-sign-right').on('click',function(){
                
            })
        },
        oAjax: function(url,data){
            var self = this;
            if (yfySessionReportObj) {
                var list = yfySessionReportObj;
            }
            $.ajax({
                url:APP.host.api + url,
                data:JSON.stringify(data),
                cache:true,
                type:'POST',
                contentType:'application/json',
                success:function(response){
                    response = JSON.parse(response);
                    response.page = data.page;
                    response.RepType = self.RepType;
                    self.resetReportObj(response);
                    if (!isFirstReq) {
                        isFirstReq = true;
                        self.ready(stateObj, response)
                    };                    
                }
            })
        },
        setPageInfo: function () {
        },
        destroy: function () {
            //如果有事件绑定的话, 解除事件绑定
            this.$rootDom.removeClass('page-report-list visibile') 
            this.$rootDom.html('');
            
        }
    }
    return pageInitObj;

})