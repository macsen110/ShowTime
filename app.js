var url  = require("url"),
    http = require('http'),
    readUri = require('./readUri'),
    server = new http.Server();
server.on('request', function (req,res,next) {
    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    if (api.indexOf('/api/') !== -1) {
        return handleApi(api, req, res);
    }
    else {
        if (api.indexOf('.') === -1) {
            pathname += "index.html"
        }

        readUri.read(pathname,res);
    }
})

function handleApi(url,req, res) {
    if (url.indexOf('research') !== -1) {
        var research = require('./api/research');
        return research.handle(url, req, res);
    }
    switch (url) {
        case 'promise' : 
            var demo = require('./api/reactdemo');
            return demo(url,req, res);
        case 'router' :
            var router = require('./api/router');
            return router(url);
        case 'timeout':
            setTimeout(function () {
                return 'oops'
            }, 6000);
            break
        default :
            break
    }
    
}
server.listen(3000);