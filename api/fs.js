/// <reference path="typings/node/node.d.ts"/>
var fs = require('fs');
fs.open('test.js', 'w');
var path = require('path');
var str = '\/********'
+'file create by macsen110'
+'/*********/';
fs.writeFile('test.js', str, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
//fs.mkdir('/aaa/bbb/');
//创建多层文件夹 同步
function mkdirsSync(dirpath, mode) { 
    if (!fs.existsSync(dirpath)) {
		console.log(0)
        var pathtmp;
		//console.log(dirpath.split('/'));
        dirpath.split('/').forEach(function(dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            }
            else {
                pathtmp = dirname;
            }
            console.log(pathtmp);
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp, mode)) {
                    return false;
                }
            }
        });
    }
    return true; 
}

mkdirsSync('etc2/passwd');
fs.exists('etc/passwd', function (exists) {
	if (exists) console.log(999)
    else console.log(666)
	
})