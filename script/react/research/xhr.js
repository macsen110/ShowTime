class xhr {
	constructor (opt) {

		this.method = 'GET';
		this.aysc = true;
		this.sendData = null;
		this.timeout = 3000;
		if (typeof opt === 'object') {
			Object.assign(this, opt);
		}

		this.send();

	}
	send() {
	    var _xhr = new XMLHttpRequest();
	    if (this.timeout) {
	    	_xhr.timeout = this.timeout;
	    }
	    _xhr.open(this.method, this.url, this.aysc);
	    if (this.setHeader) {
	    	_xhr.setRequestHeader("Content-Type", this.setHeader);	
	    
	    }
	    _xhr.onload = () => {
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
	    }
	    _xhr.onerror = (error) => {
	       console.log(error);
	       this.faild(error);
	    }
	    _xhr.ontimeout = () => { console.log("Timed out!!!") };
	    _xhr.send(this.sendData)
	}
	done(data) {

	}
	faild() {

	}
}

export default xhr;