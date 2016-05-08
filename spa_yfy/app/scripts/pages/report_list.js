define(['zepto', 'template'], function ($, template) {
    var isFirstReq;
    var yfySessionReportObj = sessionStorage.getItem('yfySessionReportObj') ? JSON.parse(sessionStorage.getItem('yfySessionReportObj')) : null;
    
    var pageInitObj = {
        $rootDom: $('#page_container'),
        setReportStore: function (obj) {
            var filter = yfySessionReportObj.filter(function (item) {
                return item.type == obj.type
            })
            var filterData = yfySessionReportObj[yfySessionReportObj.indexOf(filter[0])];
            filterData.curNum = obj.page;
            filterData.pageNums = obj.pageNums;
            filterData.data.push(obj.data);
            sessionStorage.setItem('yfySessionReportObj', yfySessionReportObj);
        }, 
        isReportStroe: function (obj) {
            if (!yfySessionReportObj) {
                yfySessionReportObj = [{
                    type: obj.type,
                    data: []
                }]
                return {
                    yfyReportStore: 0
                }
            }
            else {
                var filter = yfySessionReportObj.filter(function (item) {
                    return item.type == obj.type
                })
                if (filter.length) {
                    var filterData = yfySessionReportObj[yfySessionReportObj.indexOf(filter[0])];
                    if (obj.pageNum) {
                        filterData.curNum = obj.pageNum;
                        var filterItem = filterData.filter(function (item) {
                            return item.pageNum == obj.pageNum
                        })
                        if (filterItem.length) {
                            var filterItemData = filterData[filterData.indexOf[filterItem[0]]];
                            return {
                                yfyReportStore: 1,
                                typeStore: 1,
                                typeItemStore: 1,
                                typeCurPageNum: filterData.curNum,
                                typeItemData: filterItemData,
                            }
                        }
                        else {
                            return {
                                yfyReportStore: 1,
                                typeStore: 1,
                                typeItemStore: 0
                            };
                        }
                    }
                    else {
                        return {
                            yfyReportStore: 1,
                            typeStore: 1,
                            typeItemStore: 1,
                            typeCurPageNum: filterData.curNum,
                            typeItemData: filterItemData,
                        }
                    }
                }
                else {
                    yfySessionReportObj.push({
                        type: obj.type,
                        data: []
                    })
                    return {
                        yfyReportStore: 1,
                        typeStore: 0
                    }
                }
            }
        },
        init: function (stateObj) {
            var self = this;
            var RepType = stateObj.RepType;
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