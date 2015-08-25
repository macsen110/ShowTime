var url  = require("url"),
    http = require('http'),
    readUri = require('./readUri'),
    server = new http.Server();

server.name = "172.16.2.77";
server.on('request',function(req,res,next){
    var pathname=__dirname+url.parse(req.url).pathname;
    var api = req.url;
    if (api === '/api/research/start') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                body_bg: 'http://img3.cache.netease.com/photo/0003/2015-06-30/ATCDPPU800AJ0003.jpg',
                catagory: 'Start',
                desc: '开始',
                btns: [
                    {
                        link: "/api/research/info",
                        text: "返回",
                    }
                ]
            }
        }),'utf-8');

    }
    if (api === '/api/research/info') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                catagory: 'Information',
                postUrl: '/api/research/info_post',
                btns: [
                    {
                        link: "/api/research/start",
                        text: "返回",
                    },
                    {
                        link: "/api/research/question_radio",
                        text: "马上开始",
                    }
                ],
                data:[
                    {
                        type:'text',
                        name:'姓名',
                        keys:'name'
                    },
                    {
                        type:'text',
                        name:'手机号码',
                        keys:'phone'
                    }
                ]
            },
        }),'utf-8');
    }
    if (api === '/api/research/info_post') {
        var postData = '';
        req.on('data', function (data) {
            postData += data;
        })
        req.on('end', function (data) {
            console.log(postData)
            res.end(JSON.stringify({
                code: 0
            },'utf-8'))
        })
        return false;
    }
    if (api === '/api/research/question_radio') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                catagory: 'Question_radio',
                title: 'Question_radio component',
                q_id: '3',
                postUrl: '/api/research/question_radio_post',
                data: [
                    {
                        value : '1',
                        checked:  true                 
                    },
                    {
                        value : '2'
                    },
                    {
                        value : '3',
                    }
                ],
                btns: [
                    {
                        link: "/api/research/info",
                        text: "返回",
                    },
                    {
                        link: "/api/research/question_checkbox",
                        text: "下一题",
                    }
                ]
            }
        }),'utf-8');
    }
    if (api === '/api/research/question_radio_post') {
        var postData = '';
        req.on('data', function (data) {
            postData += data;
        })
        req.on('end', function (data) {
            console.log(postData)
            res.end(JSON.stringify({
                code: 0
            },'utf-8'))
        })
        return false;
    }
    if (api === '/api/research/question_checkbox') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                q_id: 4,
                title: 'Question_checkbox component',
                postUrl: '/api/research/question_checkbox_post',
                catagory: 'Question_checkbox',
                data: [
                    {
                        value : '1',
                        checked:  true                 
                    },
                    {
                        value : '2'
                    },
                    {
                        value : '3',
                    }
                    
                ],
                btns: [
                    {
                        link: "/api/research/question_radio",
                        text: "上一题",
                    },
                    {
                        link: "/api/research/question_input",
                        text: "下一题",
                    }
                ]
            }
        }),'utf-8');
    }
    
    if (api === '/api/research/question_checkbox_post') {
        var postData = '';
        req.on('data', function (data) {
            postData += data;
        })
        req.on('end', function (data) {
            console.log(postData)
            res.end(JSON.stringify({
                code: 0
            },'utf-8'))
        })
        return false;
    }
    
    
    if (api === '/api/research/question_input') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                catagory: 'Question_input',
                q_id: 5,
                title: 'Question_input component',
                defaultValue: 'defaultVaule',
                postUrl: '/api/research/question_input_post',
                btns: [
                    {
                        link: "/api/research/question_checkbox",
                        text: "上一题",
                    },
                    {
                        link: "/api/research/suggest",
                        text: "下一题",
                    }
                ]
            }
        }),'utf-8');
    }
    if (api === '/api/research/question_input_post') {
        var postData = '';
        req.on('data', function (data) {
            postData += data;
        })
        req.on('end', function (data) {
            console.log(postData)
            res.end(JSON.stringify({
                code: 0
            },'utf-8'))
        })
        return false;
    }

    
    if (api === '/api/research/suggest') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                catagory: 'Suggest',
                postUrl: '/api/research/question_input_post',
                btns: [
                    {
                        link: "/api/research/question_checkbox",
                        text: "返回",
                    },
                    {
                        link: "/api/research/end",
                        text: "完成",
                    }
                ]
            }

        }),'utf-8');
    }
    
    if (api === '/api/research/end') {
        res.end(JSON.stringify({
            code: 0,
            dataObj: {
                catagory: 'End',
                desc: 'End'
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