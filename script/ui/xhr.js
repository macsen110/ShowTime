//模拟Ajax

function xhr(opt) {
	this.method = 'GET';
	this.aysc = true;
	this.sendData = null;
	//this.timeout = 3000;
	if (typeof opt === 'object') {
		for (var i in opt) {
			this[i] = opt[i]
		}
	}
	this.send();
}

xhr.prototype = {
	constructor: 'xhr',
	send: function () {
		var self = this;
	    var _xhr = new XMLHttpRequest();
	    if (self.timeout) {
	    	_xhr.timeout = self.timeout;
	    }
	    _xhr.open(self.method, self.url, self.aysc);
	    if (self.setHeader) {
	    	_xhr.setRequestHeader("Content-Type", self.setHeader);	    
	    }
	    _xhr.onload = function (){
	       if (_xhr.readyState === 4) {
	           if (_xhr.status === 200) {
	           		var sucData;
	           		if (_xhr.response) {
	                	sucData = JSON.parse(_xhr.response);
	           		}
	                self.done(sucData);
	           }
	           else{
	               var error = new Error("网络请求失败,请稍后再试");
	               self.faild(error);
	           }
	       }
	    }
	    _xhr.onerror = function (error) {
	       self.faild(error);
	    }
	    _xhr.ontimeout = function () { console.log("Timed out!!!") };
	    _xhr.send(self.sendData)
	},
	done: function (data) {

	},
	faild: function () {
		
	}
}