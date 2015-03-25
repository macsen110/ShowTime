
var //restify = require('restify'),
    //ecstatic = require('ecstatic'),
    url  = require("url"),
    //path = require("path"),
    http = require('http'),
    //fs   = require("fs"),
    readUri = require('./readUri');
    server = new http.Server();

server.name = "www.showtime.com";
server.on('request',function(req,res,next){
    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    if (api.indexOf('api') === 1) {

    }
    else{
        if (api!=="/" && api.indexOf('.html') === -1) {
            pathname+=".html";
        }
        else {
            pathname += "index.html"
        }
    }
    readUri.read(pathname,res);

})
server.listen(3000,server.name, function() {
    console.log('%s are listening', server.name);
});