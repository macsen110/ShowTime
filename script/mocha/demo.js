//test add method
exports.add = function (x, y) {
	return x + y
};
exports.async = function (url, cb) {
	var _xhr = new XMLHttpRequest();
	_xhr.open("GET", url);
	_xhr.onload = function(){
		if(_xhr.readyState === 4){
			if(_xhr.status === 200){
				cb(_xhr.response);
			}
		}
	}
}