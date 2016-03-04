require.config({
        baseUrl: 'scripts/',
        paths:{
            'a':'a'
        }
    }
);
require(['zepto','FFF','a'], function ($,FFF,a) {
    var myTip = a.Dialog;
    new myTip({
        isIcon: 0,
        className: 'dialog-container',
        content: 'this is a content'
    }).render();
    
});