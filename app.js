var url  = require("url"),
    http = require('http'),
    readUri = require('./readUri'),
    server = new http.Server();

server.name = "www.showtime.com";
server.on('request',function(req,res,next){
    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    if (api.indexOf('/api/') !== -1) {
        var apiHref = api.slice(api.indexOf('/api/')+5);
        console.log(apiHref);
        res.end(handleApi(apiHref,req));

    }
    else{
        if (api.indexOf('.') === -1) {
                pathname += "index.html"
        }
        console.log(pathname);
        readUri.read(pathname,res);
    }
})

function handleApi(url,req) {
    switch (url) {
        case 'promise' : 
            var demo = require('./api/reactdemo');
            return demo(url,req);
            break
        case 'router' :
            var router = require('./api/router');
            return router(url);
            break;
        case 'timeout':
            //var timeout = require('./api/timeout');
            setTimeout(function () {
                return 'oops'
            }, 6000);
            //return timeout(url)
            break
        default :
            break
    }
    
}
server.listen(3000,server.name, function() {
    console.log('%s are listening', server.name);
});