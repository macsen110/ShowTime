class xhr {
	constructor (opt) {

		this.method = 'GET';
		this.aysc = true;
		this.sendData = null;
		if (typeof opt === 'object') {
			Object.assign(this, opt);
		}

		this.send();

	}
	send() {
	    var _xhr = new XMLHttpRequest();
	    _xhr.open(this.method, this.url, this.aysc);
	    if (this.setHeader) {
	    	_xhr.setRequestHeader("Content-Type", this.setHeader);	
	    
	    }

	    _xhr.onload = function () {
	       if (_xhr.readyState === 4) {
	           if (_xhr.status === 200) {
	           		var sucData;
	           		if (_xhr.response) {
	                	sucData = JSON.parse(_xhr.response);
	           		}
	                this.done(sucData);
	           }
	           else{
	               var error = new Error("something went wrong");
	               reject(error);
	           }
	       }
	    }.bind(this);
	    _xhr.onerror = function(error){
	       console.log(error);
	       this.faild(error);
	    }.bind(this)
	    _xhr.send(this.sendData)
	}
	done(data) {

	}
	faild() {

	}
}

export default xhr;