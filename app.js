var url  = require("url"),
    http = require('http'),
    readUri = require('./readUri'),
    server = new http.Server();

server.name = "www.showtime.com";
server.on('request',function(req,res,next){
    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    if (api === '/api/research/start') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'Start',
            dataObj: {
                desc: '开始'
            }
        }),'utf-8');

    }
    if (api === '/api/research/info') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'Information',
            dataObj: {
                dataArr:[
                    {type:'ipt',name:'姓名',keys:'name'},
                    {type:'ipt',name:'手机号码',keys:'phone'}
                ]
            },
        }),'utf-8');
    }
    
    if (api === '/api/research/question1') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'Question_radio',
            dataObj: {
                title: 'Question_radio component',
                data: [1,2,3]
            }
        }),'utf-8');
    }
    
    if (api === '/api/research/question2') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'Question_input',
            dataObj: {
                title: 'Question_input component',
                data: [1,2,3]
            }
        }),'utf-8');
    }
    
    if (api === '/api/research/question_checkbox') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'Question_checkbox',
            dataObj: {
                title: 'Question_checkbox component',
                data: [1,2,3]
            }
        }),'utf-8');
    }
    
    if (api === '/api/research/suggest') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'Suggest',
        }),'utf-8');
    }
    
    if (api === '/api/research/end') {
        res.end(JSON.stringify({
            code: 0,
            componentName: 'End',
            dataObj: {
                desc: 'End',
            }
        }),'utf-8');
    }
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