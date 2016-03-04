require.config({
        baseUrl: 'scripts/',
        paths:{
            'a':'a'
        }
    }
);
require(['zepto','FFF','a'], function ($,FFF,a) {
    var myTip = a.Dialog;
    new myTip().render();
    
});