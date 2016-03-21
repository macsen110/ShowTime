require.config({
        baseUrl: 'scripts/',
        pahts:{
            'a':'a'
        }
    }
)
require(['a', 'swipe_amd'], function (a, swipe) {
    var screne = {
        _screneId : 0,
        get screneId() {
            
        },
        set screneId(value) {
            
        }
    }
    new swipe.Swipe(document.getElementById('swipe_list'), {
                    callback: function (index) {
                        console.log(index)
                    }})
})