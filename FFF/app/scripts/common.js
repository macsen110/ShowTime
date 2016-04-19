/**
 * Created by wudi on 15/11/30.
 */
define(['template', 'move'], function(template, easyMove){
    /**
     **pageInitObj,
     **页面初始化对象,
     **包含每个页面的名称(以dom Id的值唯一标识)
     **@params antenatalCare 产检
     **@params 
     ***/
    var pageInitObj = {
        dom: {
            antenatalCare: 'page_antenatal_care'
        }    
    }
    Object.seal(pageInitObj);
    
    //根据id判断页面
    function isPageDom(id) {
        return document.getElementById(id)
    }
    //产检page 页面逻辑
    if (isPageDom(pageInitObj.dom.antenatalCare)) {
        var data = {
            title: '标签',
            list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
        };
        var html = template(pageInitObj.dom.antenatalCare + '_template', data);
        $('#'+pageInitObj.dom.antenatalCare).html(html);
        var $moveBoxDom = $('.easy-move-container');
        var $MoveBoxItems = $moveBoxDom.find('.item');
        $MoveBoxItems.width($moveBoxDom.width() / 5);
        $moveBoxDom.width($MoveBoxItems.width() * $MoveBoxItems.length);
        var easyMove = new easyMove.easyMove($moveBoxDom[0], {
            index: -2,
            showNum:5,
            limitBorder: true,
            callback: function () {
                console.log(110)
            }
        });
        
    }
    
    return {};
})