
var url  = require("url"),
    http = require('http'),
    readUri = require('./readUri'),
    server = new http.Server();

server.name = "www.showtime.com";
server.on('request',function(req,res,next){
    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    if (api === '/testrouter') {
        pathname = __dirname + '/reactrouter'
        //res.end(pathname)
    }
    if (api.indexOf('api') === 1) {
        if (api === '/api/promise') {
            res.end('promise ok')
        }

    }
    else{
        if (api.indexOf('.') === -1) {
            if (api!=="/") {
                pathname+=".html";
            }
            else {
                pathname += "index.html"
            }
        }
        readUri.read(pathname,res);
    }
})
server.listen(3000,server.name, function() {
    console.log('%s are listening', server.name);
});