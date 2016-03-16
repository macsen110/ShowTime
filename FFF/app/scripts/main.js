require.config({
        baseUrl: 'scripts/',
        paths:{
            'a':'a'
        }
    }
);
require(['zepto','FFF','a'], function ($,FFF,a) {
    var myTip = a.Dialog;
    $('#click_trigger_dialog').on('click', function () {
        new myTip({
            isMask: false,
            isIcon: 1,
            className: 'dialog-container',
            content: 'this is content info!!',
            clickBtn: function () {
                console.log('sspd')
            },
            beforeClose: function () {
                alert('i am going close')
            }
        }).render();
    })

    
});