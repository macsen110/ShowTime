module.exports = function (url,req) {
	var qs = require('querystring');
	var data = '';
	var POST = {};
	req.on('data',function (params) {
		data+=params
	})
	req.on('end',function (params) {
			data = data.toString();
            data = data.split('&');
			console.log(data)
            for (var i = 0; i < data.length; i++) {
                var _data = data[i].split("=");
                POST[_data[0]] = _data[1];
            }
            console.log(POST);
	})
	
	return url
	
};