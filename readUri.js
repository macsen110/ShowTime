exports.read = function (pathname, res) {
	var fs = require('fs');
	var path = require('path');
    console.log(11)
    fs.exists(pathname, function (exists) {
        if (exists) {
            res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            switch(path.extname(pathname)){
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html", "Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache"});
                    break;
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript", "Cache-Control": "no-cache, no-store, must-revalidate","Pragma": "no-cache"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css", "Cache-Control": "no-cache, no-store, must-revalidate","Pragma": "no-cache"});
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
                case ".svg" :
                    res.writeHead(200, {"Content-Type" : "image/svg+xml"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
            }

            fs.readFile(pathname, function (err,data) {
                res.end(data);
            });
        } 
        else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h5>oops, 404 Not Found</h5>");
        }
    })
}