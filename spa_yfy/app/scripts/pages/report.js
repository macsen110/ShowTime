define(['zepto', 'template'], function ($, template) {
    var pageInitObj = {
        $rootDom: $('#page_container'),
        init: function (stateObj) {
            var self = this;
            var url,data;
            var RepType = stateObj.RepType;
            switch(RepType){
                case '01' : //唐式
                    url = '/infanthospital/getTSReportDetail';
                    data = 'data';
                    break;
                case '02' : //超声报告
                    url = '/infanthospital/getUSReportDetail';
                    data = 'data';
                    break;
                case '04' : //病理报告
                    url = '/infanthospital/getPathReportDetail';
                    data = 'data';
                    break;
            }
            // request for data
            function oAjax(url,data){
                $.ajax({
                    url:APP.host.api + url,
                    data:JSON.stringify(data),
                    cache:true,
                    type:'POST',
                    contentType:'application/json',
                    success:function(response){
                        response = JSON.parse(response);
                        response.RepType = RepType;
                        self.ready(stateObj, response);
                    }
                })
            }
            oAjax(url,data)
        },
        ready: function (stateObj, data) {
            var tplScript = require("./tpl/report.html");
            if (STORE.curPathName == stateObj.pageName) {
                STORE.setRouter(stateObj, this)
                this.show(tplScript, data)
            }
        },
        show: function (tplScript, data) {
            var self = this;
            self.$rootDom.html(tplScript);            
            var html = template('report_template', data);
            self.$rootDom.prepend(html);
            self.bindUI(data.id); 
            
        },
        bindUI: function (id) {
            var self = this;
            self.setPageInfo(id);
            self.$rootDom.addClass('page-report visibile');
        },
        setPageInfo: function (id) {
            document.title = getTitleById(id);
            function getTitleById(id) {
                var title;
                switch (id) {
                    case '1':
                        title = '化验报告详情'
                        break;
                    case '2': 
                        title = 'ddd';
                        break;
                    default:
                        title = 'aaa';
                        break
                }
                return title;
            }
        },
        destroy: function () {
            //如果有事件绑定的话, 解除事件绑定            
            this.$rootDom.removeClass('page-report visibile');
            this.$rootDom.html('');
        }
    }
    return pageInitObj;

})