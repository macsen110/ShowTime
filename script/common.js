define(function(require, exports, module){
	var LYS = require('LYS');
	var promiseBtn = document.getElementById('promiseGet');
	if(promiseBtn) {
		promiseBtn.addEventListener('click',promiseGet,false)
	}
	function promiseGet() {
		var promise = new Promise(function(resolve,reject) {
			var _xhr = new XMLHttpRequest();
			_xhr.open("GET",'api/promise');
			_xhr.onload = function(){
				if(_xhr.readyState == 4){
					if(_xhr.status == 200){
					 
						//all is well. Our action is successfully completed.
						// We should resolve our Promise.
						resolve(_xhr.response);
					 
					}
					else{
					 
						//not so good. Something went wrong somewhere.
						// We will reject the Promise made.
						var error = new Error("something went wrong");
						reject(error);
					 
					}
				}
			}
			_xhr.onerror = function(error){
			 
				reject(error);
			}
			_xhr.send();
		})
		promise.then(function(data) {
			console.log('data:'+data)

		},function(error) {
			console.log('error:'+error)
		})
	}
})
