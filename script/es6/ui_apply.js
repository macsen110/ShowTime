import COMMUI from './ui.js';
var trrigerEle = document.getElementById('trrigerEle');
trrigerEle.addEventListener('click', function () {
	COMMUI.ui_alert({type: 'alert'}).open()	
})

