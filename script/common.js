define(function(require, exports, module){
	var LYS = require('LYS');
	var promiseBtn = document.getElementById('promiseGet');
	if(promiseBtn) {
		promiseBtn.addEventListener('click',promiseGet,false)
	}
	document.onreadystatechange = function () {
		if (document.readyState == "complete") {
		//initApplication();
			setTimeout(function() {
				var p = document.createElement("p");
				p.id = "Ansy";
				p.innerText = "sss";
				p.addEventListener('click',function() {
					console.log('plice')
				}, false)
				document.body.appendChild(p)
			},1000)
		}
	}
	var ansyDom = document.getElementById('Ansy');
	if (ansyDom) {
		ansyDom.addEventListener('click',function () {
			console.log(2222)
		},false)
	}
	function promiseGet() {
		var promise = new Promise(function(resolve,reject) {
			var _xhr = new XMLHttpRequest();
			_xhr.open("GET",'api/promise');
			_xhr.onload = function(){
				if(_xhr.readyState === 4){
					if(_xhr.status === 200){
					 
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

//序列化表单数据
function serialize(form) {
    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }
                        break;
                }
                break;
            case 'file':
                break;
            case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
        }
    }
    return q.join("&");
}