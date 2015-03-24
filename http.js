
var //restify = require('restify'),
    //ecstatic = require('ecstatic'),
    url  = require("url"),
    path = require("path"),
    http = require('http'),
    fs   = require("fs"),
    server = new http.Server();


server.on('request',function(req,res,next){

    //res.end('oopssss');

    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    console.log(api);
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname=__dirname+"/index.html";
    }
    fs.exists(pathname,function(exists){
        if(exists){
            switch(path.extname(pathname)){
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html"});
                    break;
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
            }

            fs.readFile(pathname,function (err,data){
                res.end(data);
            });
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h5>404 Not Found</h5>");
        }
    })
})
//get也可以添加正则
//server.get('/',restify.serveStatic({
//   directory: './',
//    default: 'index.html'
//}))
//server.head('/hello/:name', respond);

server.listen(3000,'www.showtime.com', function() {
    console.log('%s listening at %s', server.name, server.url);
});